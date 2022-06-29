let countElHome = document.getElementById("counthome-el") // pass in arguments
let countHome = 0
let countElGuest = document.getElementById("countguest-el") // pass in arguments
let countGuest = 0

// Home Counter

function incrementHomeby1() {
    countHome += 1
    countElHome.textContent = countHome
}

function incrementHomeby2() {
    countHome += 2
    countElHome.textContent = countHome
}

function incrementHomeby3() {
    countHome = countHome + 3
    countElHome.textContent = countHome
}


// Guest Counter 


function incrementGuestby1() {
    countGuest += 1
    countElGuest.textContent = countGuest
}

function incrementGuestby2() {
    countGuest += 2
    countElGuest.textContent = countGuest
}

function incrementGuestby3() {
    countGuest += 3
    countElGuest.textContent = countGuest
}

