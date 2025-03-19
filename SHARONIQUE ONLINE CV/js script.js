// document.addEventListener("DOMContentLoaded", function () {
//     const themeToggle = document.querySelector(".theme-toggle");

//     // Load saved theme preference
//     if (localStorage.getItem("darkMode") === "enabled") {
//         document.body.classList.add("dark-mode");
//     }

//     // Toggle dark mode on button click
//     themeToggle.addEventListener("click", function () {
//         document.body.classList.toggle("dark-mode");

//         // Save theme preference in localStorage
//         const isDarkMode = document.body.classList.contains("dark-mode");
//         localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
//     });
    

// document.addEventListener("DOMContentLoaded", function () {
//     // Select the theme toggle button
//     const toggleButton = document.getElementById("theme-toggle");
    
//     // Check if the user has a saved theme preference
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme) {
//         document.body.classList.add(savedTheme); // Apply saved theme
//     }

//     // Add click event to the button
//     toggleButton.addEventListener("click", function () {
//         document.body.classList.toggle("dark-theme"); // Toggle dark theme class

//         // Save the current theme to localStorage
//         if (document.body.classList.contains("dark-theme")) {
//             localStorage.setItem("theme", "dark-theme");
//         } else {
//             localStorage.removeItem("theme");
//         }
//     });
// });


// Select the theme toggle button using its ID
const toggleButton = document.getElementById('toggle-button');

//Select the body element to apply the dark mode class
const body = document.body; 

//Check if the user has saved theme preference in localStorage
if(localStorage.getItem('theme') ==='dark-mode') {
    body.classList.add('dark-mode');
 }

//Add an event listener to the toggle button that listens for a click event
toggleButton.addEventListener('click',()=>{

    //Toggle the dark-mode class on the body to switch themes
    body.classList.toggle('dark-mode');

    //Save or remove the theme preference
    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark-mode');
     } else{
        localStorage.removeItem('theme');
     }


    //Select the elements that should also switch to dark mode
    const elementsToToggle = [document.querySelector('header'),document.querySelectorAll('section'),toggleButtonforEach];
    
    //Loop through each element in the array and toggle the dark-mode class
    elementsToToggle.forEach(element => {
        element.classList.toggle('dark-mode');
    
     
        
    })
}
)
