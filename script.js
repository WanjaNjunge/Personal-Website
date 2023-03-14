function toggleDetails(detailsId, iconClass) {
    $(detailsId).toggle();
    $(iconClass).toggle();
  }
  
  $(document).ready(function() {
    $(".kniticon").click(function() {
      toggleDetails("#knitDetails", ".kniticon");
    });
    $("#knitDetails").click(function() {
      toggleDetails("#knitDetails", ".kniticon");
    });
    $(".tutorialicon").click(function() {
      toggleDetails("#tutorialDetails", ".tutorialicon");
    });
    $("#tutorialDetails").click(function() {
      toggleDetails("#tutorialDetails", ".tutorialicon");
    });

  
    for (let i = 1; i <= 8; i++) {
      $(`#project${i}`).hover(function() {
        $(`#popular${i}`).show();
      }, function() {
        $(`#popular${i}`).hide();
      });
    }
  
    let myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", function(event) {
      event.preventDefault(); 
      myFunction();
    });
  
    function myFunction() {
      let username = document.getElementById("name");
      let email = document.getElementById("email");
      let message = document.getElementById("message");
  
      if (!username.value || !email.value || !message.value) {
        return false;
      } else {
        alert("Thank you " + username.value + " for reaching out. Message received.");
        location.reload(); 
        return true;
      }
    }
  });