let num = prompt("Input Score");
let score = +num;
let msg ;
if (num === null || num.trim()=='' || isNaN(num)){
    alert(" Pleaese Enter valid score")
} else{
    msg= score >= 80 ? 'Grade A!'
     : score >= 70 ? 'Grade B!'
     : score >= 60 ? 'Grade C!'
     : score >= 50 ? 'Grade D!' :'Grade F!';
     alert(msg);
}