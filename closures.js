
function init(){
    let name = "mozilla";
    function displayName(){
        console.log(name);
    }
    displayName();
}

init();

// function outer(){
//     let username = "hitesh";
//     console.log("outer", secret);
//     function inner(){
//         let secret = "my123";
//         console.log("inner", username);
//     }
//     function innerTwo(){
//         console.log("innerTwo", username);
//         console.log(secret);
//     }
//     inner();
//     innerTwo();
// }

// outer();
// console.log("Too outer", username);

function makeFunc(){
    const name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();