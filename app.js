// about section 

var tabDetails = document.getElementsByClassName('tab-details');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(type){
    for(let tabDetail of tabDetails){
        tabDetail.classList.remove('active-link');
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(type).classList.add('active-tab');
}