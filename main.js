var input1 = document.getElementById("input1");
var table1 = document.querySelectorAll("table td");

function funkcja1(){
    table1[0].style.backgroundColor = `hsl(${input1.value}, 100%, 50%)`;
    table1[1].style.backgroundColor = `hsl(${input1.value}, 80%, 50%)`;
    table1[2].style.backgroundColor = `hsl(${input1.value}, 60%, 50%)`;
    table1[3].style.backgroundColor = `hsl(${input1.value}, 40%, 50%)`;
    table1[4].style.backgroundColor = `hsl(${input1.value}, 20%, 50%)`;
}
