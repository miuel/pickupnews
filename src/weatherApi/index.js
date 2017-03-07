import $ from 'jquery';

/*              API WEATHER               */
  var IMG_WEATHER = "https://openweathermap.org/img/w/";
  
  var templateWeather = '<article class="weather-container">' + 
                          '<div class="weather-img">' +
                            '<img src=":img:" alt=":img alt:" />' +
                          '</div>' +
                          '<div class="weather-info">' +
                            '<p>:name:, :country: - :temperature: °C</p>' +
                            /*'<p>:description:</p>' +
                            '<p>:summary:</p>' +*/                            
                          '</div>' +
                        '</article>';

  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Santa%20Lucia,%20ES&appid=0797f636000a85080848139a78cccf75', getCurrentWeather);
  
  function getCurrentWeather (data) {
          console.log(data);  
          console.log(data.name);  
           var celciusTemp = data.main.temp - 273.15;
           var tempCurrent = celciusTemp.toFixed(1);
          var article = templateWeather
              .replace(':name:', data.name)
              .replace(':country:', data.sys.country)
              .replace(':img:', "https://openweathermap.org/img/w/" + data.weather["0"].icon + ".png")
              .replace(':img alt:', data.name)
              /*.replace(':description:', data.weather["0"].description)
              .replace(':summary:', data.weather["0"].main)*/
              .replace(':temperature:', tempCurrent)          

        renderTemplateWeather(article);
        
  }

  export default function renderTemplateWeather(showWeather) {
    var $appHeader = $('#app-header')
        $appHeader
                .find('.weather-api')
                .append(showWeather)
  }

  