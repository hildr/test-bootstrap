var menu = document.querySelector('.hamburger'),
menu1 = document.querySelector('.hamburger1'),
menu2 = document.querySelector('.hamburger2'),
menu3 = document.querySelector('.hamburger3'),
close = document.querySelector('.close'),
close1 = document.querySelector('.close1'),
close2 = document.querySelector('.close2'),
close3 = document.querySelector('.close3'),
column = document.querySelector('.menu'),
column1 = document.querySelector('.menu1'),
column2 = document.querySelector('.menu2'),
column3 = document.querySelector('.menu3'),
nav = document.querySelector('nav');

nav.style.width = 0;
column.style.width = 0;
column1.style.width = 0;
column2.style.width = 0;
column3.style.width = 0;

menu.addEventListener('click', function(){
	nav.style.width = '1918px';
	column.style.width = '470px';
});

nav.addEventListener('click', function(){
	column.style.width = 0;
	nav.style.width = 0;
});

close.addEventListener('click', function(){
	column.style.width = 0;
	nav.style.width = 0;
});

menu1.addEventListener('click', function(){
	nav.style.width = '1918px';
	column1.style.width = '470px';
});

nav.addEventListener('click', function(){
	column1.style.width = 0;
	nav.style.width = 0;
});

close1.addEventListener('click', function(){
	column1.style.width = 0;
	nav.style.width = 0;
});

menu2.addEventListener('click', function(){
	nav.style.width = '1918px';
	column2.style.width = '470px';
});

nav.addEventListener('click', function(){
	column2.style.width = 0;
	nav.style.width = 0;
});

close2.addEventListener('click', function(){
	column2.style.width = 0;
	nav.style.width = 0;
});

menu3.addEventListener('click', function(){
	nav.style.width = '1918px';
	column3.style.width = '470px';
});

nav.addEventListener('click', function(){
	column3.style.width = 0;
	nav.style.width = 0;
});

close3.addEventListener('click', function(){
	column3.style.width = 0;
	nav.style.width = 0;
});



