
const theme = document.querySelectorAll('.navbar-container__color-schemes--color-scheme');


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


//byt färgtema på sidan
theme.forEach(button => {
    button.addEventListener('click', (e)=>{
         document.querySelector('body').className=button.classList[1];
         document.querySelector('header').classList.toggle('open');
    })
})
