$(document).ready(function() {
   $("#formOne").submit(function(event) {
      event.preventDefault();
      const person1Input = $("input#person1").val();
      const person2Input = $("input#person2").val();
      const animalInput= $("input#animal").val();
      const exclamationInput = $("input#exclamation").val();
      const verbInput = $("input#verb").val();
      const nounInput = $("input#noun").val();

      const inputs = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
      const blanks = $("#story span");

      inputs.forEach(function(element, index) {
        blanks[index].textContent = element;
      });
  
      $("#story").show();
    });
    $("#formTwo").submit(function(event) {
      event.preventDefault();
      const myNameInput = $("input#myName").val();

      $(".myName").text(myNameInput);

      $("#letter").show();
    });
  });