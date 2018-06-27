// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$("#sizePicker").submit(function(event){
  event.preventDefault();
  var height = $("#inputHeight").val();
  console.log(height);
  var width = $("#inputWeight").val();
  console.log(width);
  makeGrid(height,width);

})



function makeGrid(height,width) {
  $("tr").remove();

  for (var x = 1; x <= height; x += 1){
    $("#pixelCanvas").append("<tr id=row" + x + "></tr>");
      for (var y = 1; y <= width; y += 1){
        $("#row" + x).append("<td></td>");
      }
    }

  $("td").click(function addcolor(){
    var color = $("#colorPicker").val();
  if ($(this).attr("style")){
    $(this).removeAttr("style")
  } else {
    $(this).attr("style","background-color:" + color);
  }
  })
  }



// Your code goes here!
