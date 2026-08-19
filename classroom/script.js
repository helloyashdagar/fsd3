function leap(y) {
    
    return(y%100==0? y%400==0 : y%4==0);
    
}

console.log(leap(2024));
console.log(leap(1900)); 
console.log(leap(2000));
console.log(leap(2026));  