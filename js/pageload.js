$('#noload').replaceWith('<div></div>');
function pgload() {
    //console.log("name: {" + name +"}\n");
    var divprop1 = '<div id="pgname" class="subheader" style="padding: 0px 14px; height: 34px;"><b><a class="normcur hlink" style="font-size: 18px; color: white;" HREF="" style="color: white">';
    var divprop2 = '</a></b></div>'
    if (name != '') {
        $('#title').replaceWith('<title id="title">PQCraft\'s Github.io Page: ' + name + '</title>');
        $('#pgname').replaceWith(divprop1 + '>&nbsp;&nbsp;' + name + divprop2);
    } else {
        $('#title').replaceWith('<title id="title">PQCraft\'s Github.io Page');
        $('#pgname').replaceWith(divprop1 + '<br>' + divprop2);
    }
}
pgload();
