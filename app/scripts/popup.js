var a_val = "a_val_opt";
var b_val = "b_val_opt";
var c_val = "c_val_opt";
var dataOptions = {
  a: a_val,
  b: b_val,
  c: c_val
};


// Tableに表示
chrome.storage.sync.get(null, function(items) {
    var allKeys = Object.keys(items);
    console.log("popup_items: ", items);
    console.log("popup_allKeys: ",allKeys);
    _.map(allKeys, function(key){
        $('.completeDataTable tbody').append("<tr><td>" + key + "</td><td>" + items[key] + "</td><td><input type='button' class='deleteBtn' value='削除'></input></td></tr>");
    });
    $('.deleteBtn').click(function(){
        console.log('deleteBtn clicked');
        //クリックで親要素ごと削除する
        console.log($(this).parent().parent().children().eq(0).text());
        var deleteKey = $(this).parent().parent().children().eq(0).text();
        chrome.storage.sync.remove(deleteKey, function(){
            console.log("delete finish");
        });
        //$(this).parent().parent().remove();
    });
});
