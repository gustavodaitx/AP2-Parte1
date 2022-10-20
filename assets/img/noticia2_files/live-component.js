var LiveNews = LiveNews || {};

LiveNews.Live = function (configuration) {

    var config = configuration;
	var serviceMateria = new LiveNews.Service.ServiceMateria();
	var model = [];

	// Component starter
    start = function () {
        controller();
    },

    //////////////////////////// MVC => Controller ////////////////////////////////////
	controller = function () {

		// Pega os dados do aovivo da api de historico
		serviceMateria.getAllHistory(historyModelCallback);

		// Inicia a conexão com o web socket
		serviceMateria.getAllInstant(liveSocketCallback);

	},

    //////////////////////////// MVC => Model //////////////////////////////

	historyModelCallback = function (history) {

		// Filtrando posts deletados
		data = filterDeleted(history);

		// Filtrando posts pela edição
		data = filterEdition(data, config.externalConfig.edition);

		// Parse do valor passado no shortcode para inteiro
		let config_posts = parseInt(config.externalConfig.posts);

		// Estabelecendo o limite do tamannho do objeto caso seja menor que o limite estabelecido
		let limit = (data.length > config_posts && config_posts !== -1) ? config_posts : data.length;

		// Loop pelos primeiros resultados estabelecidos pelo shortcode
		for(let k=0; k < limit; k++){

			// Convertendo formato de data para 10h45
			data[k].formatedDate = moment(data[k].dateCreate).format("HH[h]mm");

			// Formatando a data para caracteres & e aspas
			data[k].title = filterTitle(data[k].title);

			// Adicionando o objeto no model global.
			model[k] = data[k];

		};

	},

	liveSocketCallback = function (data) {

		let limit = parseInt(config.externalConfig.posts);

		for(let i=0 ; i<data.length ; i++){

			// Checa por deleção e remove o elemento do model
			if( !(config.externalConfig.edition === null || config.externalConfig.edition === undefined || config.externalConfig.edition === "") && !data[i].liveEdition.includes(config.externalConfig.edition) ){
				model = removeDeleted(data[i]);
				continue;
			}

			// Checa por deleção e remove o elemento do model
			if(data[i].statusName === "Delete"){
				model = removeDeleted(data[i]);
				continue;
			}

			// Checa atualização
			if(data[i].statusName === "Update"){
				runUpdateAt(data[i]);
				continue;
			}

			// Convertendo formato de data para 10h45
			data[i].formatedDate = String(moment(data[i].dateCreate).format("HH[h]mm"));

			// Adicionando uma flag de novidade
			data[i].isHistory = false;

			// Formatando a data para caracteres & e aspas
			data[i].title = filterTitle(data[i].title);

			// Adicionando a nova postagem no modelo de objetos no início do vetor
			model.unshift(data[i]);

			// Removendo o último elemento da pilha para manter o limite
			if (limit !== -1 && config.div.childElementCount >= limit){
				model.pop();
			}

		}

		// Limpando toda a listagem
		clear();

		// Chamando template com modelo de dados completo
		getTemplate(model);

	},

	//Carrega template mustache
	getTemplate = function (data) {

		// Ordenando o resultado decrescentemente
		data.sort( compare );

		// Associando o resultado
		fetch(serviceMateria.urlTemplate)
			.then(response => response.text())
			.then(template => {

				// Montando o HTML da lista
				Mustache.parse(template);
				output = Mustache.render(template, data);

				// Imprimindo na tela
				config.div.innerHTML = output;

				// Carrega postagens do Instagrma com a api oembed
				if ( typeof window.instgrm !== 'undefined' ) {
					window.instgrm.Embeds.process();
				}

			}).catch(error => console.log('Erro ao carregar template : ', error.message));

	}

	// Compara as datas para ordenação do model
	compare = function ( a, b ) {
		if( moment(a.dateCreate).isBefore(b.dateCreate) ) return 1;
		if( moment(b.dateCreate).isBefore(a.dateCreate) ) return -1;
		return 0;
	}

	// Limpa o container do ao vivo para recriar a listagem
	clear = function(){
		config.div.innerHTML = "";
	}

	// Remove uma postagem que teve status alterado para Delete do model
	removeDeleted = function(data){
		let filtered = model.filter(obj => obj.postId !== data.postId);
		return filtered;
	}

	// Filtra o vetor de dados para excluir notícias deletadas.
	filterDeleted = function(data){
		let filtered = data.filter(obj => obj.statusName !== "Delete");
		return filtered;
	}

	// Filtra o vetor de dados para uma edição específica.
	filterEdition = function(data, edition){

		if(edition === "" || edition === null || edition === undefined){ return data; }

		let filtered = data.filter(obj => obj.liveEdition.includes(edition));
		return filtered;

	}

	// Faz o update de uma notícia.
	runUpdateAt = function(data){
		for(let i=0 ; i<model.length ; i++){

			if(model[i].postId === data.postId){

				// Formatando a Hora
				data.formatedDate = String(moment(data.dateCreate).format("HH[h]mm"));

				// Setando dado como vindo do socket
				data.isHistory = false;

				// Formatando a data para caracteres & e aspas
				data.title = filterTitle(data.title);

				model[i] = data;

				break;

			}
		}
	}

	// Filtra os caracteres que o Wordpress escapa (&, -, ' e ")
	filterTitle = function(title){

		let escapedTitle;

		// Escapando caracter ampersand
		const comercialE = /&#038;/g;
		escapedTitle = title.replace(comercialE, '&');

		// Trocando codificação de áspas simples
		const aspasSimplesStart = /&#8216;/g;
		escapedTitle = escapedTitle.replace(aspasSimplesStart, '\'');
		const aspasSimplesEnd = /&#8217;/g;
		escapedTitle = escapedTitle.replace(aspasSimplesEnd, '\'');

		// Trocando codificação de áspas duplas
		const aspasDuplasStart = /&#8220;/g;
		escapedTitle = escapedTitle.replace(aspasDuplasStart, '"');
		const aspasDuplasEnd = /&#8221;/g;
		escapedTitle = escapedTitle.replace(aspasDuplasEnd, '"');

		// Trocando codificação do hífen
		const hifen = /&#8211;/g;
		escapedTitle = escapedTitle.replace(hifen, '-');

		return escapedTitle;

	}

    //////////////////////////// MVC => View ////////////////////////////////////

    render = function (data) {

		// Buscando o template
        getTemplate(data);

    }

    return {
        start: start
    };

}

// Component load
document.addEventListener("DOMContentLoaded", function () {
    let divs = jQuery("div[data-type=livenews]");
    for (let index = 0; index < divs.length; index++) {
        let config = {
            div: divs[index],
            externalConfig: JSON.parse(divs[index].getAttribute('data-config'))
        };
        new LiveNews.Live(config).start();
    }
});
