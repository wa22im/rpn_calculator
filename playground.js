console.log("hello world");

const RPNcalculator =(expression)=>{
    // string => array with char 
    expression = expression.split(" ")
    const avgArray = (arr)=>{
        let sum =0
        for (  var i =0 ; i<arr.length ; i++){
            sum+=arr[i]
        }
        return sum/arr.length
    }   
    const opsMap = {'+' :[2,(values)=>{return values[0] + values[1]}],
    '-' :[2,(values)=> values[0] - values[1]],
    '*' :[2,(values)=> values[0] * values[1]] ,
    '/' :[2,(values)=> values[0] / values[1]],
    'sqrt':[1,(values)=>Math.sqrt(values[0])],
    'avg':[-1 , avgArray]}

    const myOps = Object.keys(opsMap)
    let resultReduce = expression.reduce((curr , newVal)=>{
        // newVal => expression[i]
        //curr our stack
        if(myOps.includes(newVal) ) {
            var myParameters = opsMap[newVal][0]
            // -1 or 2
            let helperArr = [] 
            myParameters = myParameters ==-1 ? curr.pop() : myParameters
                for ( var j = 0 ; j<myParameters ; j++){
                    helperArr.push(curr.pop())
                }
                let anonFun = opsMap[newVal][1]
                let result = anonFun(helperArr)
                curr.push(result)          
        }
        
        else {
            curr.push(parseFloat(newVal)) // 2 3 4 
        }
        return curr
    },[]) 
   
return resultReduce[0]
}

console.log(RPNcalculator("1 2 3 3 avg 3 4 5 3 avg +"))
                        // 2   4   +  
// avg(avg(1, 2, 3), 3, 4, 5)  =>   1 2 3 avg 3 4 5 avg
console.log(RPNcalculator('3 4 2 + *'))
//5 4 +
console.log(RPNcalculator('5 4 +'))
//3.12 4 + 2 *
//console.log(RPNcalculator('3.12 4 + 2 *'))

// 5 4 2 - 3 / + => 2 
// 5 2 - => 3 
//console.log(RPNcalculator('5 2 -'))

// 4 2 /  => 2
//console.log(RPNcalculator('4 2 /'))

// => sqrt =>

// 14,24000000041

// =>  2 16 sqrt + 

console.log(RPNcalculator("2 16 sqrt +"))
/*

avg(1, 2, 3) = 2
avg(3, 4, 5, 6) = 4.5
// [1 2 3 ]
[]
[2]
1 2 3 avg

*/


/*

operation (  plus)  
behavior => added to code 
parameters => ( )
*/
/*
    x bla 
    4 5 6 3 bla

*/
