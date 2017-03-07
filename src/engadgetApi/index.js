import $ from 'jquery';

/*                                      engadget   API                                    */
var $appBody = $('#app-body')
var templateMini = '<article class="article-mini-container">' + 
                      '<div class="article-mini-img">' +
                        '<img src=":img:" alt=":img alt:" />' +
                      '</div>' +
                      '<div class="info-mini">' +
                        '<h2>:name:</h2>' +
                        '<p>:summary:</p>' +
                        '<a href=":url-source:" target="_blank" class="article-mini-link"><p class="plus-mini" aria-hidden="true">+</p></a>'                        
                      '</div>' +
                  '</article>';
                  
    $.ajax({
      url: 'https://newsapi.org/v1/articles?source=engadget&sortBy=latest&apiKey=e6477581fff6446d92566547c67a4222',
      success: function (data, textStatus, xhr) {
        engadgetApi(data);
      }
    }) 

    export default function engadgetApi(data) {
      data.articles.forEach(function (news) {
          var article = templateMini
              .replace(':name:', news.title)
              .replace(':img:', news.urlToImage)
              .replace(':img alt:', news.title)
              .replace(':summary:', news.description)
              .replace(':url-source:', news.url)              
          
          $appBody
            .find('.recomendados-container')
            .append($(article))
        })
    }