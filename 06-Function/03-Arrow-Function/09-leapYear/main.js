leap = (year) => {   
    if (year %100 == 0) {
        if (year %400 == 0) {
            return "leap year"
        }else return "not a leap year"
    }   else if (year %4 == 0){
        return "leap year"
    }else return "not a leap year"
 };
 