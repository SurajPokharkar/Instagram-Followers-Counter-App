
var counter = document.getElementById("counter")
var followers = document.getElementById("followers")

let count = 1

// setInterval(function, milliseconds)
// setTimeout(function, milliseconds)

setInterval( () => {
    if(count < 1000){
        count++;
        counter.innerText = count;
    }
}, 0.1)

setTimeout( () => {
    followers.innerText = "Followers on INSTAGRAM!! Congrats🎉"
}, 12000)

