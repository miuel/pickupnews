import $ from 'jquery';
import $template from 'src/template';
 /*                                    REUTERS API                           */
  var $appBody = $('#app-body')

    $.ajax({
      url: 'https://newsapi.org/v1/articles?source=reuters&sortBy=top&apiKey=e6477581fff6446d92566547c67a4222',
      success: function (data, textStatus, xhr) {
       reutersApi(data);
      }
    })   

 export default function reutersApi(data) {
    data.articles.forEach(function (news) {
          var article = $template
              .replace(':name:', news.title)
              .replace(':img:', news.urlToImage)
              .replace(':img alt:', news.title)
              .replace(':summary:', news.description)
              .replace(':url-source:', news.url)              
          
          $appBody
            .find('.news-container-reuters')
            .append($(article))
        })
 }   