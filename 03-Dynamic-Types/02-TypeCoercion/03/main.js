let a = 1 * "4" + +null + +" " - "5" * 2 + +(7 + 2 + "" + +!!undefined); 
//                                           [9 + "" + 0]= "90" [+!!undefined = +False = 0 ]
//  A =  (1*'4') + +null + +'' - ('5' *2 )+ +"90" 
//          4 +      0+     0 -    (10)
//           4+ -(10) = -6+ "90" = 84
// A = 84
