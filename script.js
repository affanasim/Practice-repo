function printName(Name){
    for(let i = 1;i<=100;i++){
        console.log(Name);
    }
}
printName("Affan");

let cal = {
    sum: function(a,b){
        console.log(a+b);
    },sub : function(a,b){
        console.log(a-b);
    },mul : function(a,b){
        console.log(a*b);
    },div: function(){
        console.log(a/b);
    },pow: function(a,b){
        console.log(a**b);
    }
}
cal.mul(2,4)
