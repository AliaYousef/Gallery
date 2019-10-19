var images = document.getElementsByClassName("img");
var name = "";
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', onImageClick);

}

function onImageClick(e) {
    document.getElementById("show").style.visibility = "visible"
    const index = event.target.getAttribute('src');
    const Name = event.target.getAttribute('Name');
    document.getElementById("add").innerHTML = '<img   src="' + index + '" class="img3"><span class="img3">'+ Name+' </span>';
    num = event.target.getAttribute('value');
    name = event.target.getAttribute('src');
}

document.getElementById("close").addEventListener('click', close);

function close() {
    document.getElementById("show").style.visibility = "hidden";
}
document.getElementById('first').addEventListener('click', pre);

function pre(e) {
    if (num== 0 ){
        num = images.length;
    document.getElementById("add").innerHTML = '<img   src="' + images[--num].src + '" class="img3">';
    }else {
        document.getElementById("add").innerHTML = '<img   src="' + images[--num].src + '" class="img3">'; 
    }
}
document.getElementById('second').addEventListener('click', next);
function next (){
    if (num== images.length ){
        num = 0;
    document.getElementById("add").innerHTML = '<img   src="' + images[num++].src + '" class="img3">';
    }else {
        document.getElementById("add").innerHTML = '<img   src="' + images[num++].src + '" class="img3">'; 
    }
}