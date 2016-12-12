$(document).ready(function(){
  $("#random").removeClass("hidden");

  var wheelSelectionArray = ["random", "color", "name", "id"]

  wheel = new wheelnav("wheelDiv");
  wheel.wheelRadius = 100;
  wheel.createWheel(wheelSelectionArray);


  // BROAD BASED FUNCTIONS
  let random151Number = function() {
    return Math.ceil(Math.random()*151).toString();
  }

  $('#random').on('click', function(){
    let randNum = random151Number();
    console.log(randNum);
    $.ajax({
      dataType: "json",
      url: "http://pokeapi.co/api/v2/pokemon/" + randNum
    })

    .done(function(data){

      var newResultDiv = $()
      let test= "test"
      let preName = data.name.toString()
      let name = preName.substring(0, 1).toUpperCase() + preName.substring(1, preName.length)
      let weight = data.weight.toString() + " kg";
      let height = data.height.toString() + " m";
      let id = randNum.toString();
      // let photo = unsure of where the image API is
      $("#result").append(`<h1>${name}</h1>`);
      $("#result").append(`<h1>Height: ${height}</h1>`);
      $("#result").append(`<h1>Weight: ${weight}</h1>`);
      $("#result").append(`<h1>ID: ${id}</h1>`);


    })
  })

// Document Ready Closure
})
