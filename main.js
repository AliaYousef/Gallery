var images = document.getElementsByClassName("img");
var titles = [ "The Lion King", "The Angry Birds 2","Car 3", "Lego Movie 2",  "Spider-Man", "Hotel Transylvania 3"]
var name = "";
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', onImageClick);
}

function onImageClick(e) {
    document.getElementById("show").style.visibility = "visible"
    const index = event.target.getAttribute('src');
    const Name = event.target.getAttribute('Name');
    document.getElementById("add").innerHTML = '<div class= "imgDiv"><img   src="' + index + '" class="img3"><div class="text-block">'+Name+' </div></div>';
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
    document.getElementById("add").innerHTML = '<div class= "imgDiv"><img   src="' + images[--num].src + '" class="img3"><div class="text-block">'+titles[num]+' </div></div>';
    }else {
        document.getElementById("add").innerHTML = '<div class= "imgDiv"><img   src="' + images[--num].src + '" class="img3"><div class="text-block">'+titles[num]+' </div></div>'; 
    }
}
document.getElementById('second').addEventListener('click', next);
function next (){
    if (num== images.length ){
        num = -1;
        num++
    document.getElementById("add").innerHTML = '<div class= "imgDiv"><img   src="' + images[num].src + '" class="img3"><div class="text-block">'+titles[num]+' </div></div>';
    }else {
        document.getElementById("add").innerHTML = '<div class= "imgDiv"><img   src="' + images[num].src + '" class="img3"><div class="text-block">'+titles[num]+' </div></div>';
        num++
    }
}