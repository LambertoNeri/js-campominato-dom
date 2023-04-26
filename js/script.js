



const eleGrid = document.querySelector('.container');
const facile = document.querySelector('.facile');
const medio = document.querySelector('.medio');
const hard = document.querySelector('.difficile');
const play = document.querySelector('#play');
const scritta = document.querySelector('.scritta');
const dropdown = document.querySelector('#dropdownNuovo')
 

let listCells = 0;
let listCellsHard = 0;
let listCellsMedium = 0;

play.addEventListener('click',
    function(){
        var getValue = document.getElementById('dropdownNuovo').selectedOptions[0].value;
        if (getValue == 1) {
            ease();
        } else if (getValue == 2) {
            mediume();
        } else if (getValue == 3) {
            hardole();
        }
        console.log (getValue) 
    } 
)   

//facile.addEventListener('click',
    function ease() {
        scritta.classList.add("hide");
        cancelling();
        createGrid(100, eleGrid);
       
    }
//);





//medio.addEventListener('click',
    function mediume() {
        scritta.classList.add("hide");
        cancelling();
        createGrid(81, eleGrid);
        
    }
//);



//hard.addEventListener('click',
    function hardole() {
        scritta.classList.add("hide");
        cancelling();
        createGrid(49, eleGrid);
        
    }
//);




function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
};
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            };
        };
    };
};




function cancelling() {


    listCellsHard = document.querySelectorAll('.cell-hard');
    listCellsMedium = document.querySelectorAll('.cell-medium');
    listCells = document.querySelectorAll('.cell');

    for (i = 0; i < listCells.length; i++) {
        var elem = document.querySelector(".cell"); elem.remove();
    };

    for (i = 0; i < listCellsMedium.length; i++) {
        var elem = document.querySelector(".cell-medium"); elem.remove();
    };

    for (i = 0; i < listCellsHard.length; i++) {
        var elem = document.querySelector(".cell-hard"); elem.remove();
    };
};




function createGrid(numCells, eleContainer) {

    if (numCells == 100) {
        for (let i = 0; i < numCells; i++) {
            eleContainer.innerHTML += `<div class="cell">${[i + 1]}</div>`;

            const listCells = document.querySelectorAll('.cell');
            for (let i = 0; i < listCells.length; i++) {
                const cell = listCells[i];
                cell.addEventListener('click',
                    function colorCell() {
                        console.log(this);
                        this.classList.toggle('clicked');
                    })
            };
        }
    } else if (numCells == 81) {

        for (let i = 0; i < numCells; i++) {
            eleContainer.innerHTML += `<div class="cell-medium">${[i + 1]}</div>`;

            const listCellsMedium = document.querySelectorAll('.cell-medium');
            for (let i = 0; i < listCellsMedium.length; i++) {
                const cell = listCellsMedium[i];
                cell.addEventListener('click',
                    function colorCell() {
                        console.log(this);
                        this.classList.toggle('clicked');
                    })
            }
        }
    } else if (numCells == 49) {
        for (let i = 0; i < numCells; i++) {
            eleContainer.innerHTML += `<div class="cell-hard">${[i + 1]}</div>`;

            const listCellsHard = document.querySelectorAll('.cell-hard');
            for (let i = 0; i < listCellsHard.length; i++) {
                const cell = listCellsHard[i];
                cell.addEventListener('click',
                    function colorCell() {
                        console.log(this);
                        this.classList.toggle('clicked');
                    });
            }
        }

    };


}


/* posso semplificare ancora, creare variabile che cambia rispetto alla lungezza della chiamata celle (esempio 100 celle = long, 81 celle = medium, 49 celle = short)

dopo cambio il mio create grid con queste variabili, infine chiedo all'addeventlistener di creare celle diverse hard-medium-easy guardando questa variabile */