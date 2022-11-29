function start() {
  const canvas = document.getElementById("canvas");
  canvas.addEventListener("touchstart", handleStart);
  canvas.addEventListener("touchend", handleEnd);
  canvas.addEventListener("touchcancel", handleCancel);
  canvas.addEventListener("touchmove", handleMove);
  console.log("hi");
}
function handleStart() {
  //TO-DO
}

function handleEnd() {
  //TO-DO
}

function handleCancel() {
  //TO-DO
}

function handleMove() {
  //TO-DO
}

document.addEventListener("DOMcontentLoaded", startup);
