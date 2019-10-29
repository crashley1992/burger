// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  console.log($(this));
      var newDevouredState = {
        devoured: true
      };
  console.log(newDevouredState);
      // Send the PUT request.
      $.ajax("/burgers/update/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", true);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("this was clicked");
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax('/burgers/update/', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('new burger');
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $('.delete-burger').on('click', function(event) {
    var id = $(this).data('id');

    // Send the DELETE request.
    $.ajax('/burgers/update/' + id, {
      type: 'DELETE'
    }).then(
      function() {
        console.log('burger has been deleted', id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});