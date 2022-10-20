var LiveNews = LiveNews || {};
LiveNews.Infra = LiveNews.Infra || {};

LiveNews.Infra.ServiceAjax = function () {
  function ServiceAjax() {
    this.getJSON = function(url, callback){
      var json = new XMLHttpRequest();
      json.open('GET', url, true);
      json.responseType = 'json';
      json.onload = function() {
        if(json.status === 200 || json.status == 0) {
          callback(json.response);
        } else {
          //implement

        }
      };
      json.send(null);
    }

    this.getFileTemplate = function(url, callback){
      var file = new XMLHttpRequest();
      file.open('GET', url, true);
      file.responseType = 'document';
      file.onreadystatechange = function () {
        if(file.readyState === 4) {
          if(file.status === 200 || file.status == 0) {

              callback(file.responseXML);

          } else {
            //implement

          };
        };
      };
      file.send(null);
    }
  }

  return ServiceAjax;
}();
