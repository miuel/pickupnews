
import $ from 'jquery';
import page from 'page';

/*  importo todas las API*/
import renderTemplateWeather from 'src/weatherApi';
import nytApi from 'src/nytApi';
import reutersApi from 'src/reutersApi';
import foxsportsApi from 'src/foxsportsApi';
import timesApi from 'src/timesApi';
import unplashApi from 'src/unplashApi';
import engadgetApi from 'src/engadgetApi';
import footballApi from 'src/footballApi';;

var $spinerContainer = $('#app-body').find('.news-container');

page('/', function (ctx, next) {
  /*antes de hacer nada hay que saber si el documet esta cargado */
  $(document).ready(function() {
        console.log('el documento está preparado');     
        var $spinner = $('<div class="spinner">');
    
          $spinner.appendTo($spinerContainer);    
          
          /*  scroll */
          $(window).scroll(function() {
             if ($(this).scrollTop() > 90){  
              $('ul').addClass("sticky");
             }
              else {
               $('ul').removeClass("sticky");
              }
          });

  });

  var consulta = window.matchMedia('(max-width: 768px)');
	consulta.addListener(mediaQuery);

	var $burguerButton = document.getElementById('burguer-button');
	var $menu = document.getElementById('menu-responsive');
	function toogleMenu() {
				$menu.classList.toggle('active');
	};
	function showMenu() {
				$menu.classList.add('active');
	};
	function hideMenu() {
				$menu.classList.remove('active');
	};
  

	function mediaQuery() {
			if (consulta.matches) {
				// alert('se cumplio la condición'); 
				$burguerButton.addEventListener('touchstart', toogleMenu);
        					
			} 	else {
					$burguerButton.removeEventListener('touchstart', toogleMenu) ;
					// alert('estas viendo la web a mas de 800px de ancho');
				}
	}
	mediaQuery();

	// Gestos touch
	var $body = document.body;
	var gestos = new Hammer($body);
	gestos.on('swipeleft', hideMenu);
	gestos.on('swiperight', showMenu);



    renderTemplateWeather();
   
    nytApi();
    reutersApi();
    foxsportsApi();
    timesApi();
    unplashApi();
    engadgetApi();
    footballApi();
    

})

page()