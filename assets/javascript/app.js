var correctAns = 0;
var incorrectAns = 0;
var totalScore = 0;
var myTime = 30;
var questions = 0;


// JavaScript function that wraps everything
$(document).ready(function () {




    $("#start").click(function () {
        $(this).hide();
        counter = setInterval(incrementTimer, 1000);
        displayTrivia();
    });

    var triviaQuestions = [{
        question: "which mamal first reached earth's orbit alive?",
        choices: ["dog", "monkey", "cat", "human"],
        images: ["../images/Laika.JPG"],
        validAnswer: 0
    },
    {
        question: "Which movie was the first to win 11 Academy Awards?",
        choices: ["La La Land", "Benhur", "Sound of Music", "Titanic"],
        images: ["../images/Laika.JPG"],
        validAnswer: 1
    }
    ];

    function incrementTimer() {
        myTime--;
        if (myTime <= 0) {
            clearInterval(counter);
        }
        $("#showTimer").html("Time remaining: " + myTime + " secs");
    }

    function displayTrivia() {
        console.log("I am here in the function");
        for (q = 0; q < triviaQuestions.length; q++) {
         var currentQuestion = triviaQuestions[q].question;

            console.log("questions are "+ triviaQuestions[q].question);
            $("#questionBlock").append(currentQuestion);
            questions++;
            var choicesArr = []; 
            var choiceOptions = $("<div>");

            choicesArr= triviaQuestions[q].choices;
            for (i = 0; i < choicesArr.length; i++) {

                if (i === 0) {
                    choiceOptions.append($('<input type="radio" name="triviaOptions" value="' + i + '" checked>' + choicesArr[i] + '</input><br/>'));
                }
                else if (i > 0) {
                    choiceOptions.append($('<input type="radio" name="triviaOptions" value="' + i + '">' + choicesArr[i] + '</input><br/>'));
                    console.log("i = " + i);
                }

                $('#choiceBlock').append(choiceOptions);

            }

            $("input[type='radio']").click(function () {

                var radioValue = $("input[name='triviaOptions']:checked").val();
                if (radioValue) {
                    console.log("Your have selected - " + parseInt(radioValue) + parseInt(triviaQuestions[q].validAnswer));
                }

                if (parseInt(radioValue) === parseInt(triviaQuestions[q].validAnswer)) {
                    console.log("Your have selected the correct answer" + triviaQuestions[q].validAnswer);
                }


            });
            //$("#questionBlock").html(triviaQuestions[q].question);
        }

    }



});
