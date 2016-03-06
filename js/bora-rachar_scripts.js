function updateTextInput(val) {
  document.getElementById('value').value = val; 
}

$(document).ready(function() {
  //Google API da fonte 'Lato'e 'Montserrat':
  WebFontConfig = {
    google: { families: [
      'Lato:400,300,700,100:latin',
      'Montserrat:400,700:latin'
      ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();


$.getJSON( 'js/brazil-cities-states.json', function(data) {
  var listStates = $('#stateList'),
      listCities = $('#cityList'),
      states = data.estados;

  for (var i = 0; i < states.length; i++) {
    var state = states[i].nome.toLowerCase();
    listStates.append('<input type="checkbox" name="'+state+'">'+
                      '<label for="'+state+'">'+state+'</label><br>');
  }
  var stateInputs = $('#stateList input');
  



  stateInputs.click(function() {
    var currentStateInput = this,
        idexOfState = $.inArray(currentStateInput, stateInputs),
        cityOfCurrentState = states[idexOfState].cidades;

        for (var i = 0; i < cityOfCurrentState.length; i++) {
          var city = cityOfCurrentState[i];
          listCities.append('<input type="checkbox"><label>'+city+'</label><br>');
        }

        

  });


});

       




});