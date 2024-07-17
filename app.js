// about section 
// about section 

var tabDetails = document.getElementsByClassName('tab-details');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(type) {
    for (let tabDetail of tabDetails) {
        tabDetail.classList.remove('active-link');
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(type).classList.add('active-tab');
}

// const btn = document.querySelector('button')
// const input1 = document.querySelector('.input_name')
// const input2 = document.querySelector('.input_email')
// const input3 = document.querySelector('.input_text')
// btn.addEventListener('click', () => {
//     input1.value = '';
//     input2.value = '';
//     input3.value = '';
//     document.querySelector('#span').style.display = 'block';
//     console.log('hello')
// })
const sidemenu = document.getElementById('sidemenu');
function closeMenu() {
    sidemenu.style.right = "-240px";
}
function openMenu() {
    sidemenu.style.right = '0';
}