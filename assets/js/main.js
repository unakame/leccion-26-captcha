function CrearCaptcha(){

     var a = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97).toUpperCase()+ '';
     var b = Math.ceil(Math.random() * 10);
     var c = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97).toUpperCase()+ '';
     var d = Math.ceil(Math.random() * 10);
     var e = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97).toUpperCase()+ '';
     var f = Math.ceil(Math.random() * 10);
     var g = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97).toUpperCase()+ '';

     var code = a +  b  + c + d +  e + f +g;
     document.getElementById("codigo").value = code
 }

   document.getElementById("refresh").addEventListener("click", function(){
       CrearCaptcha();
       colorear();
   });

function ValidarCaptcha(){
  var captcha = document.getElementById('codigo').value;
  var input = document.getElementById('input').value;
  if (captcha == input) return "Correcto!";
      return "Intenta de nuevo";
}

   document.getElementById("verify").addEventListener("click", function(){
       alert(ValidarCaptcha());
  })

  function colorear() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return document.getElementById("codigo").style.color = color;

  }
