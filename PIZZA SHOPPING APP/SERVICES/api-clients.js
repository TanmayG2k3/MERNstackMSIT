//network call 
import URL from '../UTILS/constants.js'
function networkcall()
const promise = fetch(URL)
promise.then(response=>{
    console.log('response is', response)
    const promise2 = response.json()
    promise2.then(data=>{
        console.log('response is',data)
    }).catch(err=>{
        console.log('json conversion error',err)
    })
}).catch(error=>{
console.log('error is',error)
})