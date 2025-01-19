// DOM - Documents Object Model
function change(){
    // alert("change() is executing")
    // window.alert("change() is executing")

    container = document.getElementById('container');
    container.style.backgroundColor = 'yellow';

    headings = document.getElementsByClassName('heading');
    for(i = 0; i<headings.length; i++){
        headings[i].style.color = 'blue';
    }

    paras = document.getElementsByTagName('p');
    for(i = 0; i<paras.length; i++){
        paras[i].style.color = 'brown';
    }

}