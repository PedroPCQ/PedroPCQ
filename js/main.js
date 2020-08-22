'use strict'

const menu = document.querySelector ( '.menu' );

const burguerButton = document.querySelector ( '#burguer_button' );

burguerButton.addEventListener( 'click', hideShow );

function hideShow () {

  if ( menu.classList.contains ( 'menu_active' )) {

    menu.classList.remove ( 'menu_active' );

  } else {

    menu.classList.add ( 'menu_active' );

  }
  
}
