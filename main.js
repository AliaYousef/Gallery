var images = document.getElementsByClassName("img");
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', onImageClick);

}

function onImageClick(e) {
    const index = event.target.getAttribute('src');
    document.getElementById("add").innerHTML = '<div class = "newAdd added " ><img src = "'+ index + '" class = "img3"></div> <a href="#" id = "close" class ="close">X</a>';
    console.log(index);
    document.getElementById("close").addEventListener('click',function(){
        document.getElementById("add").innerHTML = " ";
    })
}
