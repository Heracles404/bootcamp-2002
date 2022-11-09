// OnClick Property
const btn = document.getElementById('v2')

btn.onclick = function () {
    alert('You clicked me!')
    alert('I hope it worked.')
}

function scream() {
    alert('AAAAAAAAAAAAAAAAAHHHHHHH!')
    alert('Stop touching me!')
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
    alert('You clicked me!')
}

// Event Listeners
const  btn3 = document.querySelector('#v3')
btn3.addEventListener('dblclick', function (){
    alert("CLICKED!")
})