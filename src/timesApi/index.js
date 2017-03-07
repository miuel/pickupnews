import $ from 'jquery';

/*                                    Time API                                          */
    var $appBody = $('#app-body')
    var templateTime = '<article class="time-container">' + 
                      '<div class="time-img">' +
                        '<img src=":img:" alt=":img alt:" />' +
                      '</div>' +
                      '<div class="time-info">' +
                        '<a href=":url-source:" target="_blank"><h1>:name:</h1></a>' +
                        '<p>:summary:</p>' +     
                      '</div>' +
                  '</article>';



    $.ajax({
      url: 'https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=e6477581fff6446d92566547c67a4222',
      success: function (data, textStatus, xhr) {
        timesApi(data);
      }
    })

    export default function timesApi(data) {
      data.articles.forEach(function (news) {
          var article = templateTime
              .replace(':name:', news.title)
              .replace(':img:', news.urlToImage)
              .replace(':img alt:', news.title)
              .replace(':summary:', news.description)
              .replace(':url-source:', news.url)              
          
          $appBody
            .find('.news-container-time')
            .append($(article))
        })
    }