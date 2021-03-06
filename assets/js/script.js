function buildQueryURL() {

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?";
  
    
    var queryParams = { "appid": "e93f1d79d40142e2bc8be671bdbfa000" };
  
    var imperial = "&units=imperial";
    
    queryParams.q = $("#searchInput")
      .val()
      .trim();
    
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams) + imperial);
    return queryURL + $.param(queryParams) + imperial;
}
buildQueryURL()

function clear() {
    $("#todayCast").empty();
    $("#cardCast").empty();
  }


function updatePage(weatherData) {

  var mainDisplay = weatherData.list[0].main.temp
  var mainDisplayF = weatherData.list[0].main.feels_like
  var mainDisplayMin = weatherData.list[0].main.temp_min
  var mainDisplayMax = weatherData.list[0].main.temp_max
  var mainDisplayPressure = weatherData.list[0].main.pressure

  
      
  var displayMainTemp = $("<div></div>").text("Temp: " + mainDisplay + " °f")
  var displayMainFeel = $("<div></div>").text("Feels like: " + mainDisplayF + " °f")
  var displayMainMin = $("<div></div>").text("Minimum Temp: " + mainDisplayMin + " °f")
  var displayMainMax = $("<div></div>").text("Maximum Temp: " + mainDisplayMax + " °f")
  var displayMainPressure = $("<div></div>").text("Pressure: " + mainDisplayPressure + " millibars")


  displayMainTemp.addClass("mainTemp")
  displayMainFeel.addClass("mainFeel")
  displayMainMin.addClass("mainMin")
  displayMainMax.addClass("mainMax")
  displayMainPressure.addClass("mainPressure")


  $("#todayCast").append(displayMainTemp)
  $("#todayCast").append(displayMainFeel)
  $("#todayCast").append(displayMainMin)
  $("#todayCast").append(displayMainMax)
  $("#todayCast").append(displayMainPressure)



  var highMin     = 40;
  var step = 7;

  for (var i = step; i <= highMin; i+=step) {
  
        
        var cards = weatherData.list[i].dt_txt;
        var cardTemp = weatherData.list[i].main.temp;
        var cardMain = weatherData.list[i].weather[0].main; 
        var cardDisc = weatherData.list[i].weather[0].description;

        console.log(cardDisc)

        
        var cardSpread = $("<div></div").text(cards);
        var cardDiv1 = $("<div></div>").text(cardTemp)
        var cardDiv2 = $("<div></div>").text(cardMain)
        var cardDiv3 = $("<div></div>").text(cardDisc)

        cardDiv1.addClass("card-divider")
        cardDiv2.addClass("card-section")
        cardDiv3.addClass("card-divider")
        cardSpread.addClass('card', "12345" [i])
        cardSpread.attr("style", "width: 300px")
        $("#cardCast").append(cardSpread);
        $(cardSpread).append(cardDiv1)
        $(cardSpread.append(cardDiv2))
        $(cardSpread).append(cardDiv3)
    
    }
}
 
$("#submitSearch").on("click", function(event) {
    event.preventDefault();
  
    clear();
  
    var queryURL = buildQueryURL();
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(updatePage);
  });

$("#mn").on("click", function (event) {
    event.preventDefault();

    clear();

    var queryMn = "https://api.openweathermap.org/data/2.5/forecast?appid=e93f1d79d40142e2bc8be671bdbfa000&q=Minneapolis&units=imperial" 
    
    $.ajax({
      url: queryMn,
      method: "GET"
    }).then(updatePage);

  })
  
$("#co").on("click", function (event) {
    event.preventDefault();

    clear();

    var queryMn = "https://api.openweathermap.org/data/2.5/forecast?appid=e93f1d79d40142e2bc8be671bdbfa000&q=Denver&units=imperial" 
    
    $.ajax({
      url: queryMn,
      method: "GET"
    }).then(updatePage);

  })

$("#ia").on("click", function (event) {
    event.preventDefault();

    clear();

    var queryMn = "https://api.openweathermap.org/data/2.5/forecast?appid=e93f1d79d40142e2bc8be671bdbfa000&q=DesMoines&units=imperial" 
    
    $.ajax({
      url: queryMn,
      method: "GET"
    }).then(updatePage);

  })

$("#ne").on("click", function (event) {
    event.preventDefault();

    clear();

    var queryMn = "https://api.openweathermap.org/data/2.5/forecast?appid=e93f1d79d40142e2bc8be671bdbfa000&q=Omaha&units=imperial" 
    
    $.ajax({
      url: queryMn,
      method: "GET"
    }).then(updatePage);

  })

$("#wi").on("click", function (event) {
    event.preventDefault();

    clear();

    var queryMn = "https://api.openweathermap.org/data/2.5/forecast?appid=e93f1d79d40142e2bc8be671bdbfa000&q=Madison&units=imperial" 
    
    $.ajax({
      url: queryMn,
      method: "GET"
    }).then(updatePage);

  })

  $("#wy").on("click", function (event) {
    event.preventDefault();

    clear();

    var queryMn = "https://api.openweathermap.org/data/2.5/forecast?appid=e93f1d79d40142e2bc8be671bdbfa000&q=Cheyenne&units=imperial" 
    
    $.ajax({
      url: queryMn,
      method: "GET"
    }).then(updatePage);

  })

  $("#ny").on("click", function (event) {
    event.preventDefault();

    clear();

    var queryMn = "https://api.openweathermap.org/data/2.5/forecast?appid=e93f1d79d40142e2bc8be671bdbfa000&q=Buffalo&units=imperial" 
    
    $.ajax({
      url: queryMn,
      method: "GET"
    }).then(updatePage);

  })

  
    