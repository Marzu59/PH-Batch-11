
const date = new Date();

const  day = date.getDate()

const months = [
    "january", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

const findmonth = months[date.getMonth()]

const year = date.getFullYear();

const fullDate = ` ${day} ${findmonth} ${year}  `

console.log(fullDate)

document.getElementById('date').innerText = fullDate;