import $ from 'jquery';

/*unplash API*/
var $appBody = $('#app-body')
$.getJSON('https://api.unsplash.com/photos/?client_id=f5b7f6115ee053b5a70b05cc0f65250d60d155cba1ac29dae1d1446fe97bacf9', unplashApi);

export default function unplashApi(data){
  console.log(data);   
  var templateUnplash = '<article class="unplash-container">' + 
                            '<div class="unplash-img">' +
                              '<img src=":img:" alt=":img alt:" />' +
                            '</div>' +
                          '</article>'; 
  
  var article = templateUnplash
              .replace(':img:', data["0"].urls.regular);

               $appBody
                .find('.unplash-container')
                .append($(article))
  }

  
