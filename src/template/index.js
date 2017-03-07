import $ from 'jquery';

   var template = `<article class="article-container"> 
                      <div class="article-img">
                        <img src=":img:" alt=":img alt:" />
                      </div>
                      <div class="info">
                        <h1>:name:</h1>
                        <p>:summary:</p>
                        <a href=":url-source:" target="_blank"><p class="plus" aria-hidden="true">✚</p></a>                       
                      </div>
                  </article>;`
                  
export default template                  