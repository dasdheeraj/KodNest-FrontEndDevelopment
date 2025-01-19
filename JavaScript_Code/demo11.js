function change(){
    // c = document.querySelector('#container')
    // c = document.querySelector('.container')
    c = document.querySelector('div')
    c.style.backgroundColor = 'yellow'

    para = document.querySelectorAll('p')
    for(i = 0; i< para.length; i++){
        para[i].style.color = 'blue'
    }

    headings = document.querySelectorAll('.heading')
    for(i = 0; i< headings.length; i++){
        headings[i].style.color = 'brown'
    }
}