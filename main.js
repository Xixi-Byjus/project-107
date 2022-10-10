function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FzvTlY-H7/model.json', modelReady);}

    function modelReady(){
        navigator.mediaDevices.getUserMedia();
        navigator.mediaDevices.getUserMedia({audio: true});
    }