// Add & Remove Value Onclick Event
g = 1;
// Function to add a new value
function addGuest(){
    newGuest = document.createElement('li');
    newGuest.textContent = 'Guest '+ g;

    gList = document.querySelector('ul');
    gList.appendChild(newGuest);
    g++;
}

// Function to remove a value
function removeGuest(){
    gList = document.querySelector('ul');
    lastGuest = gList.lastElementChild;
    // write code watching lecture of 23rd May = one line need here
    g = g-1;
}