
const axios = new Promise( (resolve, reject) => {
  //THE API I'M MAKING THE REQUEST TO IS UNRELIABLE
  //1 OUT OF 10 TIMES I GET A BAD RESPONSE 
const chance = Math.floor(Math.random() * 10)
if (chance == 0){
  reject("Error:That was a bad request");
}else{
  resolve("Request was all good!");
}
})

axios
.then(res => console.log("Then:" ,res))
.catch(err => console.log("Catch: ", err))






function generateId(){
  let id =''
  for(let i =0; i < 9; i++){
    id += Math.floor(Math.random() * 10)
  }
  return id
}


const createUser = (name) => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=> {
//VALIDATE THE NAME
if(name.length < 3){
  reject("Name must be more than 3 characters")
}else{
  resolve({
    'id': generateId(),
    "name": name
  })
}
    }, 1000)

  })
}

// createUser("Nick")
//   .then(res => { //arrow function implicitly returns on a single line
//     console.log(res)
//     return createUser("Bill")  //we need to adda return on multi line in order to chain these .then methods

//   }) 
//   .then(res =>console.log("Then:" ,res))

//   .catch(err => console.log("Catch: ", err))

  Promise.all([ //this alows us to keep track of multiple promises all at once
    createUser("Mike"),
    createUser("Larry"),
    createUser("Moe"),
  ])

  .then(data => console.log(data))
  .catch(err => console.log(err))
