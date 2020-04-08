function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

function mySecondFunction(imgs) {
  var expandImg = document.getElementById("expandedSecondImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
