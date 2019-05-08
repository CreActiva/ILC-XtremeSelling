(function ($) {
   $(function () {
      function Chequear_A(a, flag) {
         if (flag) {
            for (i = 0; i <= 3; i++) {
               if (i == 0) {
                  //$('#Collapse0').collapse('show');//Entorno de pruebas
                  $('#fase-'+i).collapse('show')
               } else {
                  //$('#Collapse' + i).collapse('hide');//Entorno de pruebas
                  $('#fase-'+i).collapse('hide')
               }
            }
            flag = false;
         } else {
            for (i = 0; i <= 3; i++) {
               if (i == a) {
                  //$('#Collapse' + i).collapse('show');//Entorno de pruebas
                  $('#fase-'+i).collapse('show')
               } else {
                  //$('#Collapse' + i).collapse('hide');//Entorno de pruebas
                  $('#fase-'+i).collapse('hide')
               }
            }
            flag = true;
         }
         return flag;
      }
      var general = true;
      var fase1 = false;
      var fase2 = false;
      var fase3 = false;
      $('.toggle-1').click(function(){
         var n = 1;
         fase1 = Chequear_A(n,fase1);
         fase2 = false;
         fase3 = false;
      });
      $('.toggle-2').click(function(){
         var n = 2;
         fase2 = Chequear_A(n,fase2);
         fase1 = false;
         fase3 = false;
      });
      $('.toggle-3').click(function(){
         var n = 3;
         fase3 = Chequear_A(n,fase3);
         fase1 = false;
         fase2 = false;
      });
   });
}(jQuery));