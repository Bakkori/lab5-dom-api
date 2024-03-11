let divImageContainer = document.getElementById("photoGallery");


let inputElem = document.createElement("input");
inputElem.type = "file";
inputElem.accept = "image/png";
divImageContainer.appendChild(inputElem);
let imgElm = document.createElement("img");
divImageContainer.appendChild(imgElm);


inputElem.onchange = function () {
    imgElm.src = URL.createObjectURL(inputElem.files[0]);
    let zoomIn = document.createElement("button");
    let zoomOut = document.createElement("button");

    zoomIn.innerText = '+';
    zoomOut.innerText = '-';
    divImageContainer.appendChild(zoomIn);
    divImageContainer.appendChild(zoomOut);

    zoomIn.addEventListener("click", function () {
        imgElm.width *= 2;
    });
    zoomOut.addEventListener("click", function () {
        imgElm.width /= 2;
    });
}

