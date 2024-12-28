let btn = document.getElementById('btn');
let input = document.getElementById('input');
let scrums = document.querySelectorAll('.Scrum');


// 

btn.onclick = function () {
    if (input.value != '') {
        scrums[0].innerHTML +=
            `<div class = "tache">
         <p  draggable="true" >${input.value}</p>
         <button class ="delete">delete</button>
         <button class ="edit">edit</button>
        </div>
       `
        delettache();
    }
    dragtache();

    let userstory = JSON.parse(localStorage.getItem('tache')) || [];
    userstory.push(input.value);
    localStorage.setItem('tache',JSON.stringify(userstory));
}
let drag = null;

function dragtache() {
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


        scrums.forEach(scrum => {
            scrum.addEventListener('dragover', function (e) {
                console.log('dragover');
                e.preventDefault();

            })

            scrum.addEventListener('dragleave', function (e) {
                // console.log ('dragover');
            })
            scrum.addEventListener('drop', function (e) {
                scrum.append(drag);
            })
        })
    })

};

function delettache() {
    const delet = document.querySelectorAll(".delete")
    delet.forEach(button => {
        button.onclick = function () {
            const tache = button.parentElement
            tache.remove();
            console.log("hh");

            localStorage.removeItem('tache');
        };
    })
};


function edittache(){
    const edit = document.querySelectorAll(".edit");
    edit.forEach(button =>{
        button.tache.value ;
    })

}