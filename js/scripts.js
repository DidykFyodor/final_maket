
$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    arrows: false,
  });
});
// Burger

let burger = document.querySelector("#header__burger");
let header = document.querySelector("#header");

burger.onclick = function () {
  header.classList.toggle("menu-open");
};

// ------------------
document.querySelector('.tab1').addEventListener('click', function() {
  document.querySelector('.h1').innerHTML = 'We turn the idea of legal services';
})

document.querySelector('.tab2').addEventListener('click', function() {
  document.querySelector('.h1').innerHTML = 'Lorem ipsum dolor sit amet consectetur.';
})

document.querySelector('.tab3').addEventListener('click', function() {
  document.querySelector('.h1').innerHTML = 'Architecto nihil pariatur nobis!';
})

document.querySelector('.tab4').addEventListener('click', function() {
  document.querySelector('.h1').innerHTML = 'Esse mollitia voluptatum rem nostrum vero quos atque tempore placeat?';
})


document.querySelector('.tab1').addEventListener('click', function() {
  document.querySelector('.p1').innerHTML = 'Consolidating many years of experience and practice, the company\'s lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine.';
})

document.querySelector('.tab2').addEventListener('click', function() {
  document.querySelector('.p1').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laudantium veritatis harum doloribus qui, sint nemo corporis atque consequatur labore?';
})

document.querySelector('.tab3').addEventListener('click', function() {
  document.querySelector('.p1').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laudantium veritatis harum doloribus qui, sint nemo corporis atque ';
})

document.querySelector('.tab4').addEventListener('click', function() {
  document.querySelector('.p1').innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat laborum, odit tempore harum nobis similique corporis in debitis exercitationem quae eum error! Fugit, magni doloremque.';
})