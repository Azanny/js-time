//current time

function clock(){
    const timeNow = new Date();
    let current="";
    current+=timeNow.getHours()<10?"0"+timeNow.getHours():timeNow.getHours();
    current+=":";
    current+=timeNow.getMinutes()<10?"0"+timeNow.getMinutes():timeNow.getMinutes();
    current+=":";
    current+=timeNow.getSeconds()<10?"0"+timeNow.getSeconds():timeNow.getSeconds();
    document.body.innerText = current;
}

setInterval(clock,1000);


//delayed function
const delayedFunc = function(){
    setTimeout(()=>{
        console.log("I'm a delayed function!")
    },3500)
}

//Bubble sorting
function bubbleSort(arr){
    let temp;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

let randomArr10=Array.from({length:10},()=>Math.round(Math.random()*2000-1000)),
    randomArr100=Array.from({length:100},()=>Math.round(Math.random()*2000-1000)),
    randomArr1000=Array.from({length:1000},()=>Math.round(Math.random()*2000-1000));


console.time('bubblesort10');
 bubbleSort(randomArr10);
console.timeEnd('bubblesort10');
console.log(`length = ${randomArr10.length} \n`)

console.time('bubblesort100');
 bubbleSort(randomArr100);
console.timeEnd('bubblesort100');
console.log(`length = ${randomArr100.length} \n`)

console.time('bubblesort1000');
 bubbleSort(randomArr1000);
console.timeEnd('bubblesort1000');
console.log(`length = ${randomArr1000.length} \n`)


// console.time('sort10');
//  randomArr10.sort((prev,next)=>prev-next);
// console.timeEnd('sort10');
// console.log(`length = ${randomArr10.length} \n`)

// console.time('sort100');
// randomArr100.sort((prev,next)=>prev-next);
// console.timeEnd('sort100');
// console.log(`length = ${randomArr100.length} \n`)

// console.time('sort1000');
// randomArr1000.sort((prev,next)=>prev-next);
// console.timeEnd('sort1000');
// console.log(`length = ${randomArr1000.length} \n`)