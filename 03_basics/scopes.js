
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    console.log('INNER: ', a);
}

console.log(a);
// console.log(b);

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(website);
    }

    two();
}

one();

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addone(5));

function addone(num){
    return num + 1;
}


addTwo(4)
const addTwo = function(num){
    return num + 2;
}
