var testData = [];
var atwhoOptions = {
  at: "ka",
  tpl: "<li data-value='${content}'>${name} <small>${content}</small></li>",
  limit: 200,
  display_timeout: 400,
  data: testData
}

// 補完内容のリフレッシュ
function refreshContents() {
    console.log("変更します");
    chrome.storage.sync.get(null, function(items) {
        var allKeys = Object.keys(items);
        console.log(items);
        console.log("allKeys: ",allKeys);
        _.map(allKeys, function(key){
            tmpData = {};
            tmpData.name = key;
            tmpData.content = items[key];
            testData.push(tmpData);
        });
        console.log(testData);
        $('textarea').atwho(atwhoOptions);
    });
}

jQuery =>
    console.log("ロード終了");
    refreshContents();



// 補完項目が変更されたら内容をリフレッシュ
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("変更を通知した");
    if (request.greeting == "hello")
      testData = [];
      $("textarea").unbind( "atwho", "**" );
      refreshContents();

});
