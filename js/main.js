$(document).ready(function () {

  $("#google-search").click(function () { 
      event.preventDefault();
      var search = $("search").val();

      if (search == '') {
          alert("Please enter the text to search for");
          return false;
      } else {
        alert(search);
      }
  });
});