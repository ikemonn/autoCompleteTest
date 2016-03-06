var a_val = "a_val_opt";
var b_val = "b_val_opt";
var c_val = "c_val_opt";
var dataOptions = {
  a: a_val,
  b: b_val,
  c: c_val
};


createTable();
saveContent();





// 補完内容の変更通知
chrome.storage.onChanged.addListener(function(changes, namespace) {
    console.log("変更があったよ");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            console.log(response.farewell);
        });
    });
});

function createTable() {
    console.log("createTable");
    chrome.storage.sync.get(null, function(items) {
        var allKeys = Object.keys(items);
        console.log("popup_items: ", items);
        console.log("popup_allKeys: ",allKeys);
        _.map(allKeys, function(key){
            $('.completeDataTable tbody').append("<tr><td>" + key + "</td><td>" + items[key] + "</td><td><input type='button' class='deleteBtn' value='削除'></input></td></tr>");
        });
        deleteContent();
    });
}

function refreshTable() {
    $(".completeDataTable tbody tr").remove();
    // Tableに表示
    createTable();

}

function saveContent() {
    $('#saveBtn').click(function() {
        var saveData = {};
        saveData[$("#nameBox").val()] = $("#commandBox").val();

        chrome.storage.sync.set(saveData, function(){
            console.log("save finish");
            $("#nameBox").val('');
            $("#commandBox").val('');
            refreshTable();
        });
    });
}


function deleteContent() {
    $('.deleteBtn').click(function() {
        console.log('deleteBtn clicked');
        //クリックで親要素ごと削除する
        console.log($(this).parent().parent().children().eq(0).text());
        var deleteKey = $(this).parent().parent().children().eq(0).text();
        chrome.storage.sync.remove(deleteKey, function(){
            console.log("delete finish");
            refreshTable();
        });
        //$(this).parent().parent().remove();
    });
}
