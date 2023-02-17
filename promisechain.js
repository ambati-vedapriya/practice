//we can return anthore promise to the then method
//return a synchrnous value
//return /throw an error

let getuser= new Promise(function(resolve,reject){
    const user={
        name:'veda',
        email:"vedapriya@gmail.com",
        password:'password',
        permission:['db','hr','dev']
    }
    resolve(user);
            
})
getuser
.then(function(user) {
    console.log(`Got user ${user.name}`);
    return user.email;
})
.then(function(email) {
    console.log(`User email is ${email}`);
});
    // Return a Promise
   /* return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // Fetch address of the user based on email
            resolve('Bangalore');
         }, 1000);
    });
})
.then(function(address) {
    console.log(`User address is ${address}`);
    
})*/

/*.then(function(email){
    console.log(`user email is $email`);
})*/

/*let promise = new Promise(function (resolve, reject) {
    resolve(10);
  });
  
  // Calling the .then() method multiple times
  // on a single promise - It's not a chain
  promise.then(function (value) {
    value++;
    return value;
  });
  promise.then(function (value) {
    value = value + 10;
    return value;
  });
  promise.then(function (value) {
    value = value + 20;
    console.log(value);
    return value;
  });
  */
  let promise = new Promise(function (resolve, reject) {
    resolve(10);
  });
  
  
  promise.then(function (value) {
    value++;
    return value;
  }).then(function (value) {
    value = value + 10;
    return value;
  }).then(function (value) {
    value = value + 20;
    console.log(value);
    return value;
  });
 
 