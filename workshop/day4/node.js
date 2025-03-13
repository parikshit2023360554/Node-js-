// console.log("starting");


// function getdata(cd){
//     setTimeout(()=>{
//         // console.log("getting data");
//         // return "getting data";
//         cd("getting data");
//     },3000)
// }

// // console.log(getdata())  here the output will undefined as when we the getdata will get the 
// // data after 3 sec as for that time the console.log will be emplty 

// // to reduce we can de as followa


// getdata((data)=>{
//     console.log(data);
// })
// console.log("ending");


/* syncrorise and asincronse
problem in call back function
call back help solution - promises {}
call back array */

const mypromise = new Promise((resolve,reject)=>{
    // resolve();
    // reject();
    const data = "got the data";
    if(data){
        resolve(data);
    }
    else{
        reject("no data");
    }

});

mypromise.then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err)
});

console.log(mypromise);

// --------------------------------------------------------------------------------------------



// function login(email,password,cd){
//     setTimeout(()=>{
//         cd({email:email,username:"parikshit"})
//     },2000)
// }

// function getvideos(email,cd){
//     setTimeout(()=>{
//         cd(["video1","video2","video3"])
//     },1000)
// }

// login("singhparikshit@002","1234",(data)=>{
//     console.log(data);
//     getvideos(data.email,(videos)=>{
//         console.log(videos);
//     });
// })