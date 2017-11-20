"use strict";

var student = [];
var myFunction = function myFunction() {
    var name = document.getElementById("name").value;
    var rollno = document.getElementById("rollno").value;
    var passoutyear = document.getElementById("passoutyear").value;
    var stream = document.getElementById("stream").value;
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;

    if (name == parseInt(name)) {
        alert("Wrong Value Entered");
    } else if (rollno != parseInt(rollno)) {
        alert("Wrong Value Entered");
    } else if (passoutyear != parseInt(passoutyear)) {
        alert("Wrong Value Entered");
    } else if (name == null || name == "", rollno == null || rollno == "", passoutyear == null || passoutyear == "", stream == null || stream == "") {
        alert("Please Fill All Required Field");
        return false;
    } else if (rollno.toString().length < 10 || rollno.toString().length > 10) {

        alert("length of rollno should be ten");
    } else {

        var row = table.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);

        var element1 = document.createElement("input");
        element1.type = "checkbox";
        element1.name = "chkbox[]";
        cell0.appendChild(element1);
        cell1.innerHTML = name;
        cell2.innerHTML = rollno;
        cell3.innerHTML = passoutyear;
        cell4.innerHTML = stream;
        var obj = { name: name, rollno: rollno, passoutyear: passoutyear, stream: stream };
        student.push(obj);
        document.getElementById("name").value = " ";

        document.getElementById("rollno").value = " ";
    }
};

var studentdetail = function studentdetail() {

    var t = parseInt(prompt("enter"));
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    var f = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = rowCount[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            i = _step.value;

            var row = table.rows[i];
            var e = row.childNodes[2].innerHTML;
            if (e != t) {

                row.style.display = "none";
            }
            if (e == t) {
                f = 1;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (f == 0) {
        alert("data does not exists");
    } else {
        hide();
    }
};

var hide = function hide() {
    document.getElementById("student").style.display = "none";
    document.getElementById("button1").style.display = "none";
};
var show = function show() {
    document.getElementById("student").style.display = "block";
    document.getElementById("button1").style.display = "block";
};

var deleteall = function deleteall() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = rowCount[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            i = _step2.value;

            var row = table.rows[i];
            row.cells[0].childNodes[0].checked = true;
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    deleteRow();
};

var deleteRow = function deleteRow() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
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
};
var editRow = function editRow() {
    var table = document.getElementById("myTable");
    var rowCount = document.getElementById("myTable").rows.length;

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = rowCount[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            i = _step3.value;

            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                if (rowCount <= 1) {
                    alert("Cannot edit the rows.");
                    break;
                }

                row.cells[1].innerHTML = document.getElementById("name").value;
                row.cells[2].innerHTML = document.getElementById("rollno").value;
                row.cells[3].innerHTML = document.getElementById("passoutyear").value;
                row.cells[4].innerHTML = document.getElementById("stream").value;
                rowCount--;
                i--;
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
};