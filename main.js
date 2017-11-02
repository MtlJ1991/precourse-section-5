function check () {
    let question1 = document.theQuiz.question1.value;
    let question2 = document.theQuiz.question2.value;
    let question3 = document.theQuiz.question3.value;
    let correct = 0;
    
    if(question1 === "Frieza"){
        correct++;
    }
    if(question2 === "Hour"){
        correct++;
    }
    if(question3 === "Hat"){
        correct++;
    }
    // Message will be printed
    
    let response = ["You've acsended!", "You're powering up, almost there!", "Trip to the time chamber required!", "Krillen puts you to shame!"];
    let pictures = ["gifs/vegeto.gif", "gifs/vegeta.gif", "gifs/time.gif", "gifs/krillin.gif"];
    let score;
    
    if(correct <= 0 ){
        score = 3;
    }
    if(correct > 0 && correct < 2 ){
        score = 2;
    }
    if(correct > 1  && correct < 3){
        score= 1;
    }
    if(correct  > 2){
        score= 0;
    }
    document.getElementById("submitted").style.visibility = "visible";
    document.getElementById("response").innerHTML = response[score];
    document.getElementById("number_correct").innerHTML = "Your current score is " + correct + " !";
    document.getElementById("picture").src = pictures[score];
    
    }