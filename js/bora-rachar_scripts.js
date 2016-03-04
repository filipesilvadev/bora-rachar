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


  
    function updateTextInput(val) {
      document.getElementById('value').value = val; 
    }

       




});