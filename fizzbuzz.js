const {prop, pipe, map}=require('ramda');

const isMultiple=(number)=>(element)=>element%number?false:true;
const ifIsMultipleReplace=(element)=>{
    const replacements=[
        {number:15, replacement:'FizzBuzz'},
        {number:3, replacement:'Fizz'},
        {number:5, replacement:'Buzz'}
    ];
    const replacement=replacements.find(el=>isMultiple(prop('number')(el))(element));
    return replacement?prop('replacement')(replacement):element;
};


const generateArray=(len)=>Array.from({length:len},(x,i)=>i+1);

const fizzBuzzToN=pipe(generateArray,map(ifIsMultipleReplace))

console.log(fizzBuzzToN(5));
console.log(fizzBuzzToN(15));
