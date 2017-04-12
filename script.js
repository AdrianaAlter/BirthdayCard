document.addEventListener('DOMContentLoaded', function(e) {
  var leftWing = document.getElementsByClassName("wing")[0];
  var rightWing = document.getElementsByClassName("wing")[1];
  var balloons = document.getElementsByClassName("balloon");
  var candles = document.getElementsByClassName("candle");
  var hats = document.getElementsByClassName("hat");
  var background = document.getElementById("scene");
  var button1 = document.getElementsByTagName("button")[0];
  var button2 = document.getElementsByTagName("button")[1];
  var colors = [" #ff274d", "#ED5E59", "#008542", "#034A2C", "#00baae", "#5B9DFD", "#1F5C99", "#00008B", "#93080e", "#871145", "#580054", "#C8A2C9"];
    addBalloonMenu = function() {
      var colorUl = document.createElement("ul");
      colors.map(function(color){
        var colorLi = document.createElement("li");
        colorLi.className = "colorLi";
        colorLi.style.backgroundColor = color;
        colorLi.addEventListener('click', changeBalloon);
        colorUl.appendChild(colorLi);
      });
      var header = document.createElement("h2");
      header.innerHTML = "Balloons";
      colorUl.appendChild(header);
      leftWing.appendChild(colorUl);
    };
    addCandleMenu = function() {
      var colorUl = document.createElement("ul");
      colors.map(function(color){
        var colorLi = document.createElement("li");
        colorLi.className = "colorLi";
        colorLi.style.backgroundColor = color;
        colorLi.addEventListener('click', changeCandle);
        colorUl.appendChild(colorLi);
      });
      var header = document.createElement("h2");
      header.innerHTML = "Candles";
      colorUl.appendChild(header);
      leftWing.appendChild(colorUl);
    };
    addHatMenu = function() {
      var colorUl = document.createElement("ul");
      colors.map(function(color){
        var colorLi = document.createElement("li");
        colorLi.className = "colorLi";
        colorLi.style.backgroundColor = color;
        colorLi.addEventListener('click', changeHat);
        colorUl.appendChild(colorLi);
      });
      var header = document.createElement("h2");
      header.innerHTML = "Hats";
      colorUl.appendChild(header);
      rightWing.appendChild(colorUl);
    };
    changeBalloon = function(e){
      var color = e.currentTarget.style.backgroundColor;
      for (var i = 0; i < balloons.length; i++){
        balloons[i].style.background = "radial-gradient(circle at top left, transparent, oldlace 10%, " + color + " 75%, oldlace 100%)";
      }
    };
    changeCandle = function(e){
      var color = e.currentTarget.style.backgroundColor;
      for (var i = 0; i < candles.length; i++){
        candles[i].style.background = "linear-gradient(to right, " + color + ", papayawhip 20%, " + color + ", " + color + ")";
      }
    };
    changeHat = function(e){
      var color = e.currentTarget.style.backgroundColor;
      for (var i = 0; i < hats.length; i++){
        hats[i].style.borderBottomColor = color;
      }
    };
    changeWp = function(e){
      var wp = e.currentTarget.className.split(" ")[1];
      background.className = wp;
    };
    addWallpaperMenu = function(){
      var wallpapers = ["wp1", "wp2", "wp3", "wp4", "wp5", "wp6", "wp7", "wp8", "wp9", "wp10", "wp11", "wp12"];
      var wpUl = document.createElement("ul");
      wallpapers.map(function(wp){
        var wpLi = document.createElement("li");
        wpLi.className = "wpLi " + wp;
        wpLi.addEventListener('click', changeWp);
        wpUl.appendChild(wpLi);
      });
      var header = document.createElement("h2");
      header.innerHTML = "Wallpaper";
      wpUl.appendChild(header);
      rightWing.appendChild(wpUl);
    };
    disappear = function(){
      leftWing.style.background = "transparent";
      rightWing.style.background = "transparent";
      leftWing.style.borderColor = "transparent";
      rightWing.style.borderColor = "transparent";
      var uls = document.getElementsByTagName("ul");
      var flames = document.getElementsByClassName("flame");
      for (var i = 0; i < uls.length; i++){
        uls[i].style.display = "none";
      }
      for (var j = 0; j < balloons.length; j++){
        balloons[j].style.animationPlayState = "running";
      }
      for (var k = 0; k < flames.length; k++) {
        flames[k].style.display = "block";
      }
      button2.style.display = "none";
    };
    button2.addEventListener("click", disappear);

    start = function(){
      var welcome = document.getElementById("welcome");
      welcome.style.display = "none";
      background.style.display = "flex";
    };

  addBalloonMenu();
  addCandleMenu();
  addWallpaperMenu();
  addHatMenu();
  button1.addEventListener("click", start);

});
