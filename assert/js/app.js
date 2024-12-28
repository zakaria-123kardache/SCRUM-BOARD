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
let drag = null; 

function dragtache(){
    let taches = document.querySelectorAll('.tache');
    taches.forEach(tache => {

        tache.addEventListener('dragstart', function (e) {
          drag = tache;
          tache.computedStyleMap.opacity = '0.5';
          
          console.log('dragstar');
          
        })
        
        tache.addEventListener('dragend', function (e) {
            drag = null;
            console.log('dragend');
            tache.computedStyleMap.opacity = '1';
        
        })

}
    )};

