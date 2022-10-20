var LiveNews = LiveNews || {};
LiveNews.Service = LiveNews.Service || {};

LiveNews.Service.ServiceMateria = function () {

    var urlTemplate='/wp-content/plugins/livenews/front/assets/js/components/live/template.html';

	var channel = {
		live: global_params.service_post + '/live/ao-vivo',
		history: global_params.service_post + '/api/v1/history?Channel=ReceiveLivePost',
		channel: global_params.channel
	};

    // Método para pegar histórico
    function getAllHistory(onSuccess) {
        let ajax =  new LiveNews.Infra.ServiceAjax();
        let history = ajax.getJSON(channel.history, onSuccess);
        return history;
    }

    // Método para ativar o socket
    function getAllInstant(OnStreaming) {
        let socket = new LiveNews.Infra.SocketSignal();
        socket.get(channel.live, channel.channel, OnStreaming);
    }

    // Definição de propriedade e métodos públicos
    return {
        getAllHistory: getAllHistory,
        getAllInstant: getAllInstant,
        urlTemplate : urlTemplate
    };
};
