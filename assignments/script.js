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

    let layers = ["red", "blue", "green"];
    let i = 0;

    setInterval(function () {

        resetLayers();

        document.getElementById(layers[i]).style.zIndex = "3";

        i++;

        while(i >= layers.length) {
            i = 0;
        }

    }, 1000);

    let j = 1;
    let text = "";

    do {
        text += "Layer " + j + " Active<br>";
        j++;
    } while(j <= 3);

    document.getElementById("output").innerHTML =
        "Do While Loop Output:<br>" + text;
}
