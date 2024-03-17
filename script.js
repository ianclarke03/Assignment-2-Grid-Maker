// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    //alert("Clicked Add Row"); // Replace this line with your code.
    let table = document.getElementById("grid");
    
    numRows++;

    if(numCols == 0){
        numCols++; //now 1 column
    }

    let newRow = table.insertRow(-1);

    for(let i = 0; i < numCols; i++){
        const newCell = newRow.insertCell(i);
        newCell.setAttribute("onclick", "alert('Clicked a table cell');");
    }


    console.log("row func going off")

}

// Add a column
function addC() {
    let table = document.getElementById("grid");
   
    numCols++;

    if (numRows === 0) {
        addR(); // Add a row if there are no rows
    } 
    
    else {
        for (let i = 0; i < numRows; i++) {
            const newRow = table.rows[i];
            const newCell = newRow.insertCell(-1); // Insert cell at the end of the row
            newCell.setAttribute("onclick", "alert('Clicked a table cell');");
        }
    }


    console.log("addC function executed");
}


// Remove a row
function removeR() {
    //alert("Clicked Remove Row"); // Replace this line with your code.

    let table = document.getElementById("grid");
    
    if(numRows > 0){

        table.deleteRow(-1);
        numRows--;
        
    }

}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}