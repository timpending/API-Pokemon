$(document).ready(function(){


  var wheelSelectionArray = ["random", "color", "name", "id"]

  wheel = new wheelnav("wheelDiv");
  wheel.wheelRadius = 120;
  wheel.titleRotateAngle = -45;
  wheel.initWheel(wheelSelectionArray);
  wheel.createWheel();


  // Wheel Unhide Navigations
  // wheel.navItems[0].navTitle.mouseup(function() {
  //   console.log(wheel.navItems);
  //   // title = random
  //   $('#buttons').children().addClass('hidden')
  //   $("#random").removeClass("hidden");
  // });
  // wheel.navItems[0].navSlice.mouseup(function() {
  //   $('#buttons').children().addClass('hidden')
  //   $("#random").removeClass("hidden");
  // })
  //
  // wheel.navItems[1].navTitle.mouseup(function() {
  //   $('#buttons').children().addClass('hidden')
  //   $("#color").removeClass("hidden");
  // });
  // wheel.navItems[1].navSlice.mouseup(function() {
  //   $('#buttons').children().addClass('hidden')
  //   $("#color").removeClass("hidden");
  // })
  //
  // wheel.navItems[2].navTitle.mouseup(function() {
  //   $('#buttons').children().addClass('hidden')
  //   $("#name").removeClass("hidden");
  // });
  // wheel.navItems[2].navSlice.mouseup(function() {
  //   $('#buttons').children().addClass('hidden')
  //   $("#name").removeClass("hidden");
  // })
  //
  // wheel.navItems[3].navTitle.mouseup(function() {
  //   $('#buttons').children().addClass('hidden')
  //   $("#id").removeClass("hidden");
  // });
  // wheel.navItems[3].navSlice.mouseup(function() {
  //   $('#buttons').children().addClass('hidden')
  //   $("#id").removeClass("hidden");
  // })

// Wheel Unhide Navigations
wheel.navItems.forEach(slice => {
    slice.navSlice.mouseup(function(){
      let title = slice.title;
      $('#buttons').children().addClass('hidden')
      $(`#${title}`).removeClass("hidden");
    })
    slice.navTitle.mouseup(function(){
      let title = slice.title;
      $('#buttons').children().addClass('hidden')
      $(`#${title}`).removeClass("hidden");
    })
})


// Document Ready Closure
})

// GENERAL FUNCTIONS
let random151Number = function() {
  return Math.ceil(Math.random()*151).toString();
}


// Random Selection Function
  let randomPoke = function(){
    let randNum = random151Number();
    console.log(randNum);
    $.ajax({
      dataType: "json",
      url: "https://pokeapi.co/api/v2/pokemon/" + randNum
    })

    .done(function(data){

      // Reset Result Div
      $("#result").empty();

      // var newResultDiv = $()
      let preName = data.name.toString()
      let name = preName.substring(0, 1).toUpperCase() + preName.substring(1, preName.length)
      let weight = data.weight.toString() + " kg";
      let height = data.height.toString() + " m";
      let id = randNum.toString();
      let photo = data.sprites.front_shiny

      $("#result").append(`<img src="${photo}" />`);
      $("#result").append(`<h1>${name}</h1>`);
      $("#result").append(`<h1>Height: ${height}</h1>`);
      $("#result").append(`<h1>Weight: ${weight}</h1>`);
      $("#result").append(`<h1>ID: ${id}</h1>`);


    })
  }

  // Color Selector Function


  // Name Selector Function
  let namePoke = function(name){
    let enteredName = $("#namePokeInput").val();
    console.log(enteredName);
    $.ajax({
      dataType: "json",
      url: "https://pokeapi.co/api/v2/pokemon/" + enteredName
    })

    .done(function(data){

      // Reset Result Div
      $("#result").empty();

      let preName = data.name.toString()
      let name = preName.substring(0, 1).toUpperCase() + preName.substring(1, preName.length)
      let weight = data.weight.toString() + " kg";
      let height = data.height.toString() + " m";
      let id = data.id
      let photo = data.sprites.front_shiny

      $("#result").append(`<img src="${photo}" />`);
      $("#result").append(`<h1>${name}</h1>`);
      $("#result").append(`<h1>Height: ${height}</h1>`);
      $("#result").append(`<h1>Weight: ${weight}</h1>`);
      $("#result").append(`<h1>ID: ${id}</h1>`);

    })
  }

  // Id Selector Function
