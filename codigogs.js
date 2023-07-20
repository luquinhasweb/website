function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  
  function doPost(e){
    Logger.log(e.parameter.Nome)
    Logger.log(e.parameter.Sobrenome)
  }
  
  function getUrl(){
    var url = ScriptApp.getService().getUrl();
    return url
  }