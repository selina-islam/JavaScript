// select form input elements
const profileForm = document.querySelector('.profile_form')
const nameInput = document.getElementById('name')
const ageInput = document.getElementById('age')
const professionInput = document.getElementById('profession')

// select the area where profile will be displayed
const profileSection = document.querySelector('.profile_section')

// load saved data from localstorage when page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'))
    if (savedProfile) {
        showProfile(savedProfile)
    }
})

// handle form submit
profileForm.addEventListener('submit', function (event) {
    event.preventDefault() // prevent page reload

    // get values from input fields
    const name = nameInput.value.trim()
    const age = ageInput.value.trim()
    const profession = professionInput.value.trim()

    // check if all fields are filled
    if (name && age && profession) {
        // create a user profile object
        const userProfile = { name, age, profession }

        // save user profile to localstorage
        localStorage.setItem('userProfile', JSON.stringify(userProfile))

        // display the updated profile on screen
        showProfile(userProfile)

        // clear input fields after submission
        nameInput.value = ''
        ageInput.value = ''
        professionInput.value = ''
    } else {
        alert('please fill out all fields!')
    }
})

// function to display profile in the profile section
function showProfile(profile) {
    profileSection.innerHTML = `
        <h3>name: ${profile.name}</h3>
        <p>age: ${profile.age}</p>
        <p>profession: ${profile.profession}</p>
    `
}

// function to clear profile from localstorage and ui
function clearProfile() {
    localStorage.removeItem('userProfile')
    profileSection.innerHTML = '<h3>no profile found</h3>'
}
