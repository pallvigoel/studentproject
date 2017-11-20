"use strict"
let Add = () => {
    var name = document.getElementById("name").value;
    var rollno = document.getElementById("rollno").value;
    let passoutyear = document.getElementById("passoutyear").value;
    let stream = document.getElementById("stream").value;
    var table = document.getElementById("myTable");
    let rowCount = table.rows.length;
    let c=1;
    c=validate(name,rollno);
    if(c==1)
    {
        let row = table.insertRow();
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        let element1 = document.createElement("input");
        element1.type = "checkbox";
        element1.name = "chkbox[]";
        cell0.appendChild(element1);
        cell1.innerHTML = name;
        cell2.innerHTML = rollno;
        cell3.innerHTML = passoutyear;
        cell4.innerHTML = stream;
       
    }
    document.getElementById("name").value = " ";
    document.getElementById("rollno").value = " ";
}


let studentdetail = () => {
    const t = parseInt(prompt("enter"));
    let table = document.getElementById("myTable");
    let rowCount = table.rows.length;
    let f = 0;
    for (let i = 1; i < rowCount; i++) {
        let row = table.rows[i];
        let e = row.childNodes[2].innerHTML;
        if (e != t) {

            row.style.display = "none";
        }

        if (e == t) {
            f = 1;
            break;
        }
    }
    if (f == 0) {
        alert("data does not exists");
    }
    else {
        hide();
    }
}

let hide = () => {
    document.getElementById("student").style.display = "none";
    document.getElementById("button1").style.display = "none";
}

let show = () => {
    document.getElementById("student").style.display = "block";
    document.getElementById("button1").style.display = "block";
}

let deleteall = () => {
    let table = document.getElementById("myTable");
    let rowCount = table.rows.length;

    for (let i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        row.cells[0].childNodes[0].checked = true;

    }
    deleteRow();
    
}

let deleteRow = () => {
    let table = document.getElementById("myTable");
    let rowCount = table.rows.length;
    for (let i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];

        if (null != chkbox && true == chkbox.checked) {
            if (rowCount <= 1) {
                alert("Cannot delete all the rows.");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
    table.rows[0].cells[0].childNodes[0].checked = false;
    return;
}

let validate =(name,rollno) =>{

    if (name == " " || name==null)
    {
       alert("Please Fill All Required Field");
       return 0;
    }

    if(rollno == " "|| rollno==null){
        alert("Please Fill All Required Field");
        return 0; 
    }

    if (((name == parseInt(name))) || rollno != parseInt(rollno)) {
        alert("Wrong Value Entered");
        return 0;
    }
    
    if (rollno.toString().length < 10 || rollno.toString().length > 10) {
        alert("length of rollno should be ten");
        return 0;
    }
return 1;
}

let editRow = () => {
    let table = document.getElementById("myTable");
    let rowCount = document.getElementById("myTable").rows.length;
    
    if (rowCount <= 1) {
        alert("Data does not exists");
    }

    else {
        let name = document.getElementById("name").value;
        let rollno = document.getElementById("rollno").value;
        let passoutyear=document.getElementById("passoutyear").value;
        let stream=document.getElementById("stream").value;
        for (let i = 0; i < rowCount; i++) {
            let c=1;
            c=validate(name,rollno);
            if(c===0){
               break;
            }
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
   
            if (null != chkbox && true == chkbox.checked) {
                row.cells[1].innerHTML = name;
                row.cells[2].innerHTML = rollno;
                row.cells[3].innerHTML = passoutyear;
                row.cells[4].innerHTML = stream;
                chkbox.checked=false;
                }
            }
         document.getElementById("name").value = " ";
         document.getElementById("rollno").value = " ";
            
        }
    }


