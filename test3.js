let a = "aababba"
let b = "abbaabcd"
if(a.length<b.length){
  c=a
  d=b
}
else {
  c=b
  d=a
}
let f="";
for(let j=0; j<c.length; j++){
  g=f;
for(let i=0; i<c.length; i++){
 if(d.includes(c.slice(j,i+1))){
  f=c.slice(j,i+1)
 }
}
if(g.length<f.length){
  q=f;
}
}
console.log("Первая строка:",a)
console.log("Вторая строка:",b)
console.log("Самая длинная последовательность двух строк:",q)