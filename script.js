// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    //alert("Clicked Add Row"); // Replace this line with your code.
    let table = document.getElementById("grid");
    
    if(numCols == 0){
        numCols++; //now 1 column
    }

    let newRow = table.insertRow(0);

    for(let i = 0; i < numCols; i++){
        const newCell = newRow.insertCell(i);
        newCell.setAttribute("onclick", "alert('Clicked a table cell');");
    }

    numRows++;
    console.log("row func going off")

}

// Add a column
function addC() {
    //alert("Clicked Add Col"); // Replace this line with your code.
    let table = document.getElementById("grid");
   
    if(numRows == 0){
        numRows++; //now 1 row
    }

    for(let i = 0; i < numRows; i++){
        const newCell = table.rows[i].insertCell(-1);
        newCell.setAttribute("onclick", "alert('Clicked a table cell');");
    }

    numCols++;
    console.log("addC func going off");

}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
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