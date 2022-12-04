function deleteMe(){
document.getElementById("result").value = ""
}

function deleteMeLast(){
    var a = document.getElementById("result").value;
    document.getElementById("result").value = a.substring(0,a.length - 1);

}

function calculator(newValue){
    document.getElementById("result").value += newValue;
}

function answer(){
var a = document.getElementById("result").value;
var b = eval(a);
document.getElementById("result").value = b;

}