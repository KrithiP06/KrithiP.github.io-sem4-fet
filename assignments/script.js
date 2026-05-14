function resetLayers() {
    document.getElementById("red").style.zIndex = "0";
    document.getElementById("blue").style.zIndex = "0";
    document.getElementById("green").style.zIndex = "0";
}

function showRed() {
    resetLayers();
    document.getElementById("red").style.zIndex = "3";
}

function showBlue() {
    resetLayers();
    document.getElementById("blue").style.zIndex = "3";
}

function showGreen() {
    resetLayers();
    document.getElementById("green").style.zIndex = "3";
}

function autoSwitch() {

    let colors = ["Red", "Blue", "Green"];
    let i = 0;
    let text = "";

    while(i < colors.length) {
        text += colors[i] + " Layer<br>";
        i++;
    }

    document.getElementById("output").innerHTML =
        "While Loop Output:<br>" + text;

    let j = 1;
    let count = "";

    do {
        count += "Layer " + j + " Active<br>";
        j++;
    } while(j <= 3);

    document.getElementById("output").innerHTML +=
        "<br>Do While Output:<br>" + count;
}
