
let num = prompt("Put Number")
if(num == null || num == '' ||num.trim() =='' || isNaN(num)){
    alert("Invalid Number" )
} else {
    if (num > 0){
        alert ("Positive Number")
    } else if (+num == 0){
        alert ("Zero")
    }   else {
        alert("Negative number")
    }   
}



