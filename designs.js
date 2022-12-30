
// default grid
makeGrid(10, 10)


// This function allows users to customize the size of their grid
function makeGrid(row, column) {
    const table = document.querySelector('#pixelCanvas');
    // reset table if there are any rows
    while (table.hasChildNodes()){
        table.removeChild(table.firstElementChild)
    }
    // Create rows in table accoring to user grid choices
    for (var i = 0; i <= row - 1; i++) {
        let addRow = table.insertRow(i);
        for (var j= 0; j <= column - 1; j++){
            let cell = addRow.insertCell(j);
        }
    }
    
}


function  grabGridNumbers() {
    document.querySelector('#sizePicker').addEventListener('submit', (event) => {
        event.preventDefault()
        var gridHeight = event.target[0].value
        var gridWidth = event.target[1].value
        console.log(gridHeight, gridWidth)
        makeGrid(gridHeight, gridWidth);
   
    }
    );
    
};

// Bob Ross function allows users to choose their own color and paint within the canvas!
function bobRoss(){
    document.querySelector('#pixelCanvas').addEventListener('click', (event) => {
        event.preventDefault()
        var cell = event.target
        cell.bgColor = document.querySelector('#colorPicker').value;
});
    
};  

grabGridNumbers()
bobRoss()
   