var LiveNews = LiveNews || {};
LiveNews.Infra = LiveNews.Infra || {};

LiveNews.Infra.SocketSignal = function () {
    var socket,
    get = function(UrlSocket, ChannelSocket, OnStreaming) {
        // Inspiração: https://docs.microsoft.com/en-us/aspnet/core/signalr/javascript-client?view=aspnetcore-5.0&tabs=visual-studio

        // Cria objeto de conexão
        LiveNews.Infra.SocketSignal.socket = new signalR.HubConnectionBuilder().withUrl(UrlSocket,{
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets
        })
        .build();
        
        // Atribui canal de conexão
        LiveNews.Infra.SocketSignal.socket.on(ChannelSocket, OnStreaming);

        // Inicia a conexão do socket e tenta novamente se der erro
        async function start() {
            try {
                await LiveNews.Infra.SocketSignal.socket.start();
                console.log('LiveNews.Infra.SocketSignal socket Connected');
            } catch (err) {
                console.log('LiveNews.Infra.SocketSignal socket Error');
                console.log(err);
                setTimeout(start, 5000);
            }
        };

        // Tenta reestabelecer a conexão caso ela seja encerrada por engano
        LiveNews.Infra.SocketSignal.socket.onclose(async () => {
            console.log('LiveNews.Infra.SocketSignal socket Disconnected');
            await start();
        });

        // Inicia o processo geral
        start();
    };
    
    // Definição de propriedade e métodos públicos
    return{
        get: get,
        socket: socket
    };
  };