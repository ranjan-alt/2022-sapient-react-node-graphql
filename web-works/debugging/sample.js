function getNum1(){
    return document.getElementById("num1").value
}

function getNum2(){
    return document.getElementById("num2").value
}


function updateResults(){
    document.querySelector('#myDiv').innerHTML = getNum1() + getNum2()
}

document.getElementById("btnAdd").addEventListener("click", ()=>{
    if(getNum1()==="" || getNum2 === ""){
        document.querySelector("#myDiv").innerHTML = " please enter value"
    } else {
        updateResults()
    }
   
})