import $ from 'jquery';


/*                                        FOX SPORTS API                                    */
  var $appBody = $('#app-body')
  var templateFox = '<article class="article-container-fox">' + 
                      '<div class="article-img">' +
                        '<img src=":img:" alt=":img alt:" />' +
                      '</div>' +
                      '<div class="info">' +
                        '<a href=":url-source:" target="_blank"><h1>:name:</h1></a>' +        
                      '</div>' +
                  '</article>';
    $.ajax({
      url: 'https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=e6477581fff6446d92566547c67a4222',
      success: function (data, textStatus, xhr) {
        foxsportsApi(data);
      }
    }) 

    export default function foxsportsApi(data) {
      data.articles.forEach(function (news) {
          var article = templateFox
              .replace(':name:', news.title)
              .replace(':img:', news.urlToImage)
              .replace(':img alt:', news.title)
              /*.replace(':summary:', news.description)*/
              .replace(':url-source:', news.url)              
          
          $appBody
            .find('.news-container-fox')
            .append($(article))
        })
    }