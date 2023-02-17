//finally
 
let promise1 = new Promise(function(resolve, reject) {
    resolve('Testing Finally.');
});

// Run .finally() before .then()
promise1.finally(function() {
    console.log('Running .finally()');
}).then(function(value) {
    console.log(value);
});
async function fetchUserDetails(userId) {
    // pretend we make an asynchronous call
   // and return the user details
   return {'name': 'Robin', 'likes': ['toys', 'pizzas']};
}
/*const user = await fetchUserDetails();
console.log(user)*/

async function caller() {
    // Using await in a non-async function.
    const user = await fetchUserDetails();
    console.log(user);
   }
   
   // This will result in an syntax error
   caller();

   function getSynchronousHi() {
    return 'Hi';
  }
  async function caller1() {
    const messageHi = await getSynchronousHi();
    console.log( messageHi);
  }
  
  caller1(); 


  const validateUser = ({userId, password}) => {
    return new Promise((resolve, reject) => {
      
            if (userId && password) {
                resolve(`${userId} you have been authenticated successfully!!!`);
            } else {
                reject({message: 'userId or Password could be blank!'});
            }

    
    });
}
const app = async () => {
    const data = {
        userId: 'veda',
        password: 'hai'
    };

    try {
        
        const result = await validateUser(data);
        console.log(result);
    } catch (e) {
        console.error(e.message);
    }
}

// invoke the function app
app();