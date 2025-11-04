try {
    if(4>5){
        console.log("true");
    }
    throw new Error("bizni try ichidagi codelarimizda xatolik bor");
} catch (error) {
    console.error(error);
}
finally {
    console.log("finally");
}

const myProimise = new Promise((resolve, reject)=>{
    let teacherdagiqarz = false
    if(teacherdagiqarz){
        resolve("Qarzni qabul qildim")
    }
    else{
        reject("Qarzni hali ham bermadi mashenik")
    }
})

myProimise.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.error(error);
});


async function myFunction(data){
    console.log(await data);
}
myFunction("salom")