const $img = document.getElementById("img_container").children;
const $container = document.getElementById("img_container");

function getImage(array){
    let random = Math.floor(Math.random() * array.length);
    $container.innerHTML = array[random].outerHTML;
}

getImage($img);