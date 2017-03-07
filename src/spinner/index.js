import $ from 'jquery';

/*  trabajando con el spinner loader  */

export default function() {
    var $spinerContainer = $('#app-body').find('.news-container');
    var $spinner = $('<div class="spinner">');
    
          $spinner.appendTo($spinerContainer);
}

    