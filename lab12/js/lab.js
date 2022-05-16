
$("#button").click(function(){
  var name = $("#my-input").val();
  $("#output1").html(name);
  var num = name.length;
  if (num % 4) {
      $("#output1").html("The Sorting Hat has sorted you into gryph");
  }
  else if (num % 3) {
      $("#output1").html("The Sorting Hat has sorted you into dumbl");
  }
  if (num % 2) {
      $("#output1").html("The Sorting Hat has sorted you into slyth");
  }
  else {
    $("#output1").html("The Sorting Hat has sorted you into ham");
    }
  })
