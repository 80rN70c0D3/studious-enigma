//doc : https://lavrton.com/javascript-loops-how-to-handle-async-await-6252dd3c795/

var inputBox = document.getElementById("realbox"); //google.com
var k = 0;
var txt = ''
var speed = 50; // The speed => duration of the effect in milliseconds. Less is faster
arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
arr_jpn = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]

function typeWriter() {
    if (k < txt.length) {
        console.log(k)
        inputBox.value += txt.charAt(k);
        k++;
        setTimeout(typeWriter, speed);
    } else if (k == txt.length) {
        inputBox.value += ' ';
        k = 0;
    }

}

function delay() {
    return new Promise(resolve => setTimeout(resolve, 3000)); //in ms 
}

async function delayedLog(item) {
    // notice that we can await a function
    // that returns a promise
    await delay();
    console.log(item);
}

async function processArray(array) {
    for (const item of array) {
        txt = item
        typeWriter()
        await delayedLog(item);
    }
    console.log('Done!');
    console.log('Month typed : ' + array.length);
}

//processArray(arr)
//processArray(arr_jpn)
