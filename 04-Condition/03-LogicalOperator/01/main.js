alert(null || 2 || undefined); //2  
alert(alert(1) || 2 || alert(3)); //alert 1&2 {undefined bec alert[1] before use return to undefind}
alert(1 && null && 2);//null
alert(alert(1) && alert(2)); // alert 1 and undefined bec alert1 finish it change to undifine
alert(null || (2 && 3) || 4);// alert 3  {undefined}