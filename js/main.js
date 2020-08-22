'use strict'

const tablet = window.matchMedia('screen and (max-width: 768px)');

const menu = document.querySelector ( '.menu' );

const burguerButton = document.querySelector ( '#burguer_button' );

tablet.addListener(validation);

function validation ( event ) {

  if ( event.matches ) {

    burguerButton.addEventListener( 'click', hideShow );

  } else {

    burguerButton.removeEventListener( 'click', hideShow );

  }
  
}

function hideShow () {

  if ( menu.classList.contains ( 'menu_active' )) {

    menu.classList.remove ( 'menu_active' );

  } else {

    menu.classList.add ( 'menu_active' );

  }

}
