const checkPermission = (a,b,c) => {
   if (a =="ADMIN"){
    b()
   }else c();
};

function AG(){
    alert('ACCESS GRANTED')
}
function AD(){
    alert('ACCESS DENINED')
}