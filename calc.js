let calc=(a,b,op)=>{
    if(op==='sum'){
        return a+b
    }
    if(op==='multi'){
        return a*b
    }
    
}
let m1=calc(10,20,'sum')
console.log(m1);

let m2=calc(10,20,'multi')
console.log(m2);
