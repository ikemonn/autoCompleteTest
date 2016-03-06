var testData = [];
var atwhoOptions = {
  at: "ka",
  tpl: "<li data-value='${content}'>${name} <small>${content}</small></li>",
  limit: 200,
  display_timeout: 400,
  data: testData
}

jQuery =>
    console.log("ロード終了");
    // $('textarea').atwho(atwhoOptions);
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



    console.log("ロード終了２");


  // callbacks:
  //   matcher: (flag, subtext) ->
  //     regexp = new XRegExp("(\\s+|^)" + flag + "([\\p{L}_-]+)$", "gi")
  //     match = regexp.exec(subtext)
  //     return null  unless match and match.length >= 2
  //     match[2]
  //
  //   remote_filter: (query, callback) ->
  //     return unless query || query.length < 4
  //     kind = query[0].toLowerCase()
  //     query = query.slice(1)
  //     if kind is "k"
  //       if query
  //         $.getJSON root_url + "/api/phrases.json",
  //           text: query
  //         ,(data) ->
  //           phrases = $.map data, (phrase) ->
  //             {
  //               'id': phrase.id
  //               'text': phrase.text
  //               'icon': chrome.extension.getURL('../images/leaf.png')
  //             }
  //           callback phrases
  //     else if kind is "t"
  //       if query
  //         $.getJSON root_url + "/api/phrases.json",
  //           tag: query
  //         ,(data) ->
  //           phrases = $.map data, (phrase) ->
  //             {
  //               'id': phrase.id
  //               'text': phrase.text
  //               'icon': chrome.extension.getURL('../images/tag.png')
  //             }
  //           callback phrases

  // var completeData = [
  //     {name: "デプロイ1", content: "deploy"},
  //     {name: "ssh1", content: "sshContent"},
  //     {name: "tunnel1", content: "tunnelContent"},
  //     {name: "デプロイ2", content: "deploy"},
  //     {name: "ssh2", content: "sshContent"},
  //     {name: "tunnel2", content: "tunnelContent"},
  //     {name: "デプロイ3", content: "deploy"},
  //     {name: "ssh3", content: "sshContent"},
  //     {name: "tunnel3", content: "tunnelContent"},
  //     {name: "デプロイ4", content: "deploy"},
  //     {name: "ssh4", content: "sshContent"},
  //     {name: "tunnel4", content: "tunnelContent"}
  // ];
