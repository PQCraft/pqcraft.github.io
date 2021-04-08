$('#noload').replaceWith('<div></div>');
function pgload() {
    //console.log("name: {" + name +"}\n");
    if (name != '') {
        $('#title').replaceWith('<title id="title">PQCraft\'s Github.io Page: ' + name + '</title>');
        $('#pgname').replaceWith('<div id="pgname" class="subheader"><b><a class="normcur hlink" style="font-size: 24px; color: white; padding: 0px 10px" HREF="" style="color: white">>&nbsp;&nbsp;' + name + '</a></b></div>');
    } else {
        $('#title').replaceWith('<title id="title">PQCraft\'s Github.io Page');
        $('#pgname').replaceWith('<div id="pgname" class="subheader"><b><a class="normcur hlink" style="font-size: 24px; color: white" HREF="" style="color: white"><br></a></b></div>');
    }
}
pgload();
