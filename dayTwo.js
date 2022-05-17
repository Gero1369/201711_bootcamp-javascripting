var f=function(a,b,c){
    console.log(a,b,c)
}
f.apply(null,[1,2,3])
f.call(this,1,2,3)

let first = 'Geoff'
let last = 'Pearson'

//  Template literals
console.log(`This class has ${first} ${last} in it`)    // backticks instead of quotes

console.log(`this is a
multi-line javascript
comment`)                   // backticks instead of quotes

// destructuring
// rest
// spreading

