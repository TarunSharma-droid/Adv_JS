//  Fetch using Async - await ( with try and catch)

function dothis(){

    return fetch('https://api.github.com/users/TarunSharma-droid')  
}

// if fetch() resolved then return the value got to result otherwise move to catch directly and return the reject value.
async function dataformAPI(){

    try{
        const result = await dothis()
        const answer = await result.json() // this await is used here because converting in JSON object is also asynchoronous opertation and takes time.
        console.log(answer)
    }

    catch(data2){
        console.log(data2)
    }
}

dataformAPI()

// Agar fetch() me network error hota hai (jaise internet nahi hai), to fetch() reject ho jaata hai → aur control
//  directly catch block me chala jaata hai.


// we can check the catch block execution by turning off the internet of the device.
