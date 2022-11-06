// Foreach loop
const numbers = [1, 2]

// Method 1
numbers.forEach(function (el) {
    console.log(el)
})
// Method 2 - newer method
for (let el of numbers) {
    console.log(el)
}


// Map Method
const n = [1, 2, 3, 4, 5]
const doubles = n.map(function (num) {
    return num * 2;
})


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

const titles = movies.map(function (movie){
    return movie.title;
})






