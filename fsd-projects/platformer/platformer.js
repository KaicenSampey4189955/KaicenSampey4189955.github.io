$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid(); toggleGrid();
toggleGrid();
    // TODO 2 - Create Platforms
createPlatform(100, 630, 100, 10);
createPlatform(100, 500, 100, 10); // collectable on this one maybe idk (future me: no)
createPlatform(450, 400, 100, 10);
createPlatform(200, 275, 100, 10);
createPlatform(865, 400, 100, 10);
createPlatform(865, 510, 100, 10); // collectible here
createPlatform(865, 400, 10, 110);
createPlatform(350, 400, 10, 100);
createPlatform(100, 175, 10, 200);
createPlatform(1270, 510, 35, 10);
createPlatform(1365, 300, 35, 10);
createPlatform(1365, 385, 35, 10);
createPlatform(1132, 285, 35, 10); // collectable here
createPlatform(1125, 185, 10, 110);
createPlatform(200, 195, 100, 10); // collectable on this one
    // TODO 3 - Create Collectables
createCollectable("steve", 897, 440)
createCollectable("max", 230, 120)
createCollectable("grace", 1130, 225)
    
    // TODO 4 - Create Cannons
createCannon("left", 10, 200);
createCannon("right", 700, 300);
createCannon("bottom", 700, 300);
// createCannon('top', 200, 500) !!!!!! how to make them !!!!!!!!!!!!
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
