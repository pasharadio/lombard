let toggle_menu = document.getElementsByClassName('main-menu__toggle')[0],
    aside = document.getElementsByTagName('aside')[0],
    main = document.getElementsByTagName('main')[0];

toggle_menu.addEventListener('click', function (e) {

  e.stopPropagation();
  aside.classList.toggle('active');
  main.classList.toggle('darken');

});


main.addEventListener('click', function () {
  
  if (main.classList.contains('darken')) {
    main.classList.remove('darken');
    aside.classList.remove('active');
  }
});

aside.addEventListener('click', function (e) {
  e.stopPropagation();
});