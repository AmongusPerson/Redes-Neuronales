webcam.set({
    width: 360,
    height: 360,
    image_format: "png",
    png_quality: 360
});

camera = document.getElementById("camera");

webcam.attach('#camera')

function capturar() {
    Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; })
}

console.log('ml5 version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7A76gJBLv/model.json',modelLoaded);

function modelLoaded() {
    console.log('modelLoaded')
}

function check() {
    
}