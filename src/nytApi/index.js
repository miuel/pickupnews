import $ from 'jquery';
import $template from 'src/template';

/*                 The New York Times API               */

         var $spinerContainer = $('#app-body').find('.news-container');
          var $spinner = $('<div class="spinner">');    
          $spinner.appendTo($spinerContainer);


  $.ajax({
      url: 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=e6477581fff6446d92566547c67a4222',
      success: function (data, textStatus, xhr) {
        nytApi(data);

        $spinerContainer.find('.spinner').remove();
    }    
  })

export default function nytApi(data) {
        var $appBody = $('#app-body')


        data.articles.forEach(function (news) {
          var article = $template
              .replace(':name:', news.title)
              .replace(':img:', news.urlToImage)
              .replace(':img alt:', news.title)
              .replace(':summary:', news.description)
              .replace(':url-source:', news.url)        

               $appBody
                .find('.news-container-nyt')
                .append($(article))
        })
      }
    

        