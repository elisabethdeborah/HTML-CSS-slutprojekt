//toggle menu
document.querySelector('.navicon')
.addEventListener('click', function(params){
    document.querySelector('header').classList.toggle('open');
});
//close menu on click on listobject (nav-link)
document.querySelectorAll('ul > li')
.forEach(link => {
    link.addEventListener('click', function() {
        console.log(link);
        document.querySelector('header').classList.toggle('open');
    })
})