// save a string value to localstorage
localStorage.setItem('mood', 'dark')

// create an object with user info
const rabeya = {
    home: 'tangail',
    age: 20
}

// convert the object to a string and save it to localstorage
localStorage.setItem('user', JSON.stringify(rabeya))

// get the saved user data from localstorage
const userInfo = localStorage.getItem('user')

// convert the string back to an object and show it in the console
console.log(JSON.parse(userInfo))

// clear all data from localstorage
localStorage.clear()
