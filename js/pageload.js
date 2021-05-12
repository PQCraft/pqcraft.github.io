$('#noload').replaceWith('<div></div>');
function pgload() {
    //console.log("name: {" + name +"}\n");
    var divprop1 = '<div id="pgname" style="display: block"><div class="subheader" style="height: 32px;"><b><a class="normcur hlink" style="font-size: 18px; color: white;" HREF="" style="color: white">';
    var divprop2 = '</a></b></div><br><br></div>'
    if (name != '') {
        $('#title').replaceWith('<title id="title">PQCraft\'s Github.io Page: ' + name + '</title>');
        $('#pgname').replaceWith(divprop1 + '>&nbsp;&nbsp;' + name + divprop2);
    } else {
        $('#title').replaceWith('<title id="title">PQCraft\'s Github.io Page</title>');
        $('#pgname').replaceWith(divprop1 + '<br>' + divprop2);
    }
}
pgload();
