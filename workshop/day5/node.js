
// console.log("a order has been palced");



// function orderCoffe(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("waiting for the order");
//         },3000);

//     })
// }

// async function getcoffe(){
//     console.log("order has been palced");
//     let message = await orderCoffe();
//     console.log(message);

// }

// getcoffe();




// console.log("order successfully");









const datafirst = () => 
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("data first is coming");
            resolve();
        }, 3000);
    });

const dataSecond = () => 
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("data second is coming");
            resolve();
        }, 1000);
    });

const dataThird = () => 
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("data third is coming");
            resolve();
        }, 4000);
    });

async function fetchData() {
    await datafirst();  
    await dataSecond(); 
    await dataThird();  
}

fetchData();



