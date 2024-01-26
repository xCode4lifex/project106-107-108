function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/T_hCfIf7i/model.json',modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("results_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b +")";
        document.getElementById("result_confidence").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById("corgi");
        img1 = document.getElementById("cat");
        img2 = document.getElementById("hamster");
        img3 = document.getElementById("bird");

        if (results[0].label == "Clap") {
            img.src = "corgi dancing.gif";
            img1.src = "cat.png";
            img2.src = "hamster.png";
            img3.src = "bird.jpg";
        }
        else if (results[0].label == "Bell") {
            img.src = "corgi.jpg";
            img1.src = "cat dancing.gif";
            img2.src = "hamster.png";
            img3.src = "bird.jpg";
        }
        else if (results[0].label == "Snap") {
            img.src = "corgi.jpg";
            img1.src = "cat.png";
            img2.src = "hamster dancing.gif";
            img3.src = "bird.jpg";
        }
        else {
            img.src = "corgi.jpg";
            img1.src = "cat.png";
            img2.src = "hamster.png";
            img3.src = "bird dancing.gif";
        }

    }
}