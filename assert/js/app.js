let btn = document.getElementById('btn');
let input = document.getElementById('input');
let scrums = document.querySelectorAll('.Scrum');

btn.onclick = function(){
    if (input.value != ''){
        scrums[0].innerHTML +=
        `<p class = "tache" draggable="true" >${input.value}</p>`
    }
    dragtache();
}

function dragtache(){
    let taches = document.querySelectorAll('.tache');
    taches.forEach(tache => {

        tache.addEventListener('dragstart', function (e) {
        //   drag = tache;
          console.log('dragstar');
        
        })

}
    )};

