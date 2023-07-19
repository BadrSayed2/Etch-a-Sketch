const body = document.querySelector('body')
const grid = document.createElement('div')
body.appendChild(grid)
grid.classList.add('grid')


function addStyleToSquares(){
    const squares = document.querySelectorAll('.square')
    
    for(const square of squares){
        
        square.addEventListener('mouseover' , function ( ) {
            
            // let randomColor = 
            square.setAttribute('style' ,'background-color: blue ' )
        
    }
    )
    
    
    square.addEventListener('mouseleave' , function ( ) {
        
        // let randomColor = 
        square.setAttribute('style' ,'background-color: rgb(131, 145, 241)' )
        
    }
    )
    
    
}

}

function createGrid( gridSideSquare = 16){
    if(gridSideSquare > 100){
        alert('toooooooooo much');
        gridSideSquare = 16
    }

    for(let i = 1 ; i <=gridSideSquare ; i++ ){
        const row = document.createElement('div')
        grid.appendChild(row)
        row.classList.add('row')
        for(let j = 1 ; j <=gridSideSquare ; j++ ){
            const square = document.createElement('div')
            row.appendChild(square)
            square.classList.add('square')
            
        }
    }
    addStyleToSquares()

}


function removeGrid(){
    grid.innerHTML = null
    try{row.innerHTML= null}
    catch(e){}
    
}

//logic part 


createGrid()

const clear = document.querySelector('.clean')
clear.addEventListener('click' , function (){
    const squares = document.querySelectorAll('.square')
    for(const square of squares){
        square.setAttribute('style' ,'background-color: white ' )
        
    }

})

const create  = document.querySelector('.create')
create.addEventListener('click' , function () {
        removeGrid();
        let newFormat = parseInt( prompt('how many squares would you like to be in the row and colomn?'))
        createGrid(newFormat)

})
