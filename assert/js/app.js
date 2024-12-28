let btn = document.getElementById('#btn');
let input = document.getElementById('#input');
let scrums = document.querySelectorAll('.Scrum');

btn.onclick = function(){
    if (input.value != ''){
        boxs[0].innerHTML +=
        `<p class = "tache" >${input.value}</p>`
    }
}