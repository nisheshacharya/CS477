Array.prototype.even = function(){
    const result = this.filter(num => num % 2 === 0) ;
    console.log(result);
};

([1,2,3,4,5,6,7,8,9]).even();

Array.prototype.odd = function(){
    const result = this.filter(num => num%2 !=0);
    console.log(result)
};
([1,2,3,4,5,6,7,8,9]).odd();
