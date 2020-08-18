function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function homePage() {
    document.getElementById("content").innerHTML = "home stuff";
    document.getElementById("contentTitle").innerHTML = "Hello Im Dwight!"
    document.getElementById("contentQuote").innerHTML = randomQuotes()
    
}

function mySkill() {
    document.getElementById("content").innerHTML = "skills stuff";
    document.getElementById("contentTitle").innerHTML = "skill"
    document.getElementById("contentQuote").innerHTML = randomQuotes()

}

function contact() {
    document.getElementById("content").innerHTML = " <form method='POST' action='mailto:kevin.d.williams2@gmail.com'><input type='text' name='fullName' placeholder='Enter Full-Name'></input><br /><input type='email' name='email' placeholder='Enter your email'></input><br /><textarea height='200px' width='400px' placeholder='Enter commits'></textarea><br /><button type='submit'>enter</button></form >"
    document.getElementById("contentTitle").innerHTML = "Contact"
    document.getElementById("contentQuote").innerHTML = randomQuotes()

}

const one = "qutoe one"
const two = "qutoe one2"
const three = "qutoe one3"
const four = "qutoe one4"
const five = "qutoe one5"
const six = "qutoe one6"
const seven = "qutoe one7"
const eight = "qutoe one8"
const nine = "qutoe one9"

function randomQuotes() {
    const randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            return 'zero'
            break
        case 1:
            return 'one'
            break
        case 2:
            return 'two'
            break
    }
}
document.getElementById("contentQuote").innerHTML = randomQuotes();