$("#send").click(function() {

  event.preventDefault();

  /*let name = $("#display-name").val();

      let name_length = name.length;*/

      /* Alle velden moeten ten minste 5 karakters bevatten &
      Het wachtwoord en de bevestiging moeten hetzelfde zijn*/
      if( $("#display-name").val().length < 5 ) {
          $("#display-name").css("border", "5px solid red");
          $("#display-name").css("background-color", "");
          alert("You did not fill out the form correctly!");
      } else {
        $("#display-name").css("background-color", "green");
        $("#display-name").css("border", "");
      }

      if( ($("#pass").val().length < 5 ) || ($("#pass").val() !== $("#pass-confirm").val())){
          $("#pass").css("border", "5px solid red");
          $("#pass").css("background-color", "");
          alert("You did not fill out the form correctly!");

      } else {
        $("#pass").css("background-color", "green");
        $("#pass").css("border", "");
      }
      //
      if( ($("#pass-confirm").val().length < 5) || ($("#pass").val() !== $("#pass-confirm").val()) ) {
          $("#pass-confirm").css("border", "5px solid red");
          $("#pass-confirm").css("background-color", "");
          alert("You did not fill out the form correctly!");

      } else {
        $("#pass-confirm").css("background-color", "green");
        $("#pass-confirm").css("border", "");
      }
      //
      if( $("#email").val().length < 5 ) {
          $("#email").css("border", "5px solid red");
          $("#email").css("background-color", "");
          alert("You did not fill out the form correctly!");

      } else {
        $("#email").css("background-color", "green");
        $("#email").css("border", "");
      }


  let pas = $("#pass").val();

  let pas2 = $("#pass-confirm").val();

  let mail = $("#email").val();

  let send = $("#send").val();

  let reset = $("#reset").val();

})

/* Reset button
$( "#reset" ).click(function() {
  event.preventDefault();
  $("#display-name").val().remove();
});
*/


$("#reset").click(function() {
  /*event.preventDefault();*/
    $("#display-name, #pass, #pass-confirm, #email").val("");
    $("#display-name, #pass, #pass-confirm, #email").css("background-color","");
    $("#display-name, #pass, #pass-confirm, #email").css("border","");

});
