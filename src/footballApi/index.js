import $ from 'jquery';

/*                 Football Italia API                 */
    var $appBody = $('#app-body')
    var templateTrending = '<article class="article-trending-container">' + 
                              '<div class="info-trending">' +
                                '<a href=":url-source:" target="_blank" class="article-trending-link"><h1>:name:</h1></a>' +                        
                              '</div>' +
                           '</article>';
                  
    $.ajax({
      url: 'https://newsapi.org/v1/articles?source=football-italia&sortBy=top&apiKey=e6477581fff6446d92566547c67a4222',
      success: function (data, textStatus, xhr) {
        footballApi(data);
      }
    }) 

 export default function footballApi(data) {
   data.articles.forEach (function (news) {                       
                  var article = templateTrending
                      .replace(':name:', news.title)
                      .replace(':url-source:', news.url)              
                  
                  $appBody
                    .find('.trending-container')
                    .append($(article))  
        })
 }   