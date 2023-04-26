const punteggio = document.querySelector('.punteggio')
const perso = document.querySelector('.perso')
const eleGrid = document.querySelector('.container');
const facile = document.querySelector('.facile');
const medio = document.querySelector('.medio');
const hard = document.querySelector('.difficile');
const play = document.querySelector('#play');
const scritta = document.querySelector('.scritta');
const dropdown = document.querySelector('#dropdownNuovo');
let mine = [];
let counter = 0
 

let listCells = 0;
let listCellsHard = 0;
let listCellsMedium = 0;

play.addEventListener('click',
    
    function(){
        perso.innerHTML = ''
        punteggio.innerHTML = ''
        counter = 0
        eleGrid.classList.remove('stop')
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

    function ease() {
        scritta.classList.add("hide");
        mine = getRandom(1, 100, 16)    
        console.log ('dentro', mine )
        cancelling();
        createGrid(100, eleGrid);
    }

    function mediume() {
        scritta.classList.add("hide");
        getRandom(1, 81, 16)
        cancelling();
        createGrid(81, eleGrid);
    }

    function hardole() {
        scritta.classList.add("hide");
        getRandom(1, 49, 16)
        cancelling();
        createGrid(49, eleGrid);
    }






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
                    console.log (mine);

                        if(mine.includes(i + 1)) {
                        console.log('Hai perso');
                        this.classList.toggle('clickedBomb')
                        perso.innerHTML = (` ${'HAI PERSO!! il tuo punteggio è'} ${counter} `)
                        eleGrid.classList.add('stop')
                        } else {
                        this.classList.toggle('clicked')
                        counter = counter + 1
                        punteggio.innerHTML = (` ${'il tuo punteggio è'} ${counter} `)
                        }   
                        
                    }
                );
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
                        if(mine.includes(i + 1)) {
                            console.log('Hai perso');
                            this.classList.toggle('clickedBomb')
                            perso.innerHTML = (` ${'HAI PERSO!! il tuo punteggio è'} ${counter} `)
                            eleGrid.classList.add('stop')
                            } else {
                            this.classList.toggle('clicked')
                            counter = counter + 1
                            punteggio.innerHTML = (` ${'il tuo punteggio è'} ${counter} `)
                            } 
                    }
                )
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
                        if(mine.includes(i + 1)) {
                            console.log('Hai perso');
                            this.classList.toggle('clickedBomb')
                            perso.innerHTML = (` ${'HAI PERSO!! il tuo punteggio è'} ${counter} `)
                            eleGrid.classList.add('stop')
                            } else {
                            this.classList.toggle('clicked')
                            counter = counter + 1
                            punteggio.innerHTML = (` ${'il tuo punteggio è'} ${counter} `)
                            } 
                    }
                );
            }
        }

    };
}





function getRandom (min, max, numbers) {
    var numbers = []
    while (numbers.length < 16) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
      if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}
return (numbers)
}




