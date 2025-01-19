// DOM concepts in js
function getAnswers(){
    // alert('fun() is executing')

    h1 = document.getElementById('h1')
    h1.textContent = 'Answers:'

    q1 = document.getElementById('q1')
    q1.textContent = 'byte - 1byte'

    q2 = document.getElementById('q2')
    q2.textContent = 'float- 4byte'

    q3 = document.getElementById('q3')
    q3.textContent = 'double - 8byte'

    b = document.getElementById('b')
    b.textContent = 'Get Questions'

    m = document.getElementById('m')
    m.textContent = 'Light Mode'
}
function goDark(){
    container = document.getElementById('container')
    container.style.color = 'yellow'
    container.style.backgroundColor = 'black'
}
function goLight(){
    light = document.getElementById('light')
    light.style.color = 'black'
    light.style.backgroundColor = 'white'
}
