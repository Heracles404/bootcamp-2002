// Nested Function
function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther']
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
        }
    }
    cryForHelp()
}



// HigherOrder Function
function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie)
callTenTimes(rollDie)



















