//Trivia Game
//1. Create game object
var trivia = {
    questionsArr: [
        {
        // one:
            question: "Which nut is used to make dynamite?",
            //
            A:"Walnut",
            B:"Macadamia Nut",
            C:"Peanut",
            D:"Almond",
            answer: "C",
            context:"Peanut – peanut oil can be processed to produce glycerol, which can then be used to make nitroglycerine – an explosive liquid used in dynamite.",
            // isAsked: false,
        }, 
        { 
        // two:
            question: "Which vegetable was considered poisonous in Medieval times but was used by the Romans as an aphrodisiac?",
            A:"Tomato",
            B:"Carrot",
            C:"Squash",
            D:"Broccoli",
            answer: "A",
            // – being in the Solanaceae family, which includes deadly nightshades and other poisonous plants, tomatoes were erroneously thought to be poisonous. According to the folklore, if you would eat a tomato, its poison would turn your blood into acid. Instead, the colonists used to grow tomatoes purely for decoration
            // isAsked: false,
        },
        {
        // three:
            question:"What is the highest recorded jump by a kangaroo in a single leap?",
            A:"20 feet",
            B:"9 meters",
            C:"20 meters",
            D:"15 meters",
            answer: "B",
                // (30 feet)
            // isAsked: false,
        },
        {
        // four: 
            question: "What is the longest movie ever made?",
            A:"Heat",
            B:"Pride and Prejudice",
            C:"Logistics",
            D:"Saving Private Ryan",
            //  – at 51,420 minutes, (857 hours or 35 days and 17 hours), it is the longest movie ever made.
            answer: "C",
            // isAsked: false,
        },
        {
        // five:
            question: "Which country has beaver as the national emblem?",
            A:"Turkey",
            B:"Ukraine",
            C:"Peru",
            D:"Canada",
            answer: "D",
            //
            answer: "",
            // isAsked: false,
        },
        {
        // six: 
            question:"Which cells are situated only within the nervous system?",
            A:"Neurons",
            B:"Red blood cells",
            C:"White blood cells",
            D:"iPhones",
            answer: "A",
            // – humans have around 100 billion neurons in their brain alone.
            // isAsked: false
        },{ 
        // seven:
            question: "Which is the hottest planet?",
            A:"Mercury",
            B:"Saturn",
            C:"Venus",
            D:"Jupiter",
            answer: "C",
            // – although Mercury is much closer to the Sun, it has no atmosphere. The atmosphere on Venus helps retain much more of the Sun’s heat.
            // isAsked: false
        }, {
        // eight: 
            question:"Which war caused the greatest loss of life for Americans",
            A:"The American Civil War",
            B:"WW1",
            C:"WW2",
            D:"Vietnam",
            answer: "A",
            // – around 620,000 dead. This is more than WW1, WW2 and Vietnam combined.
            // isAsked: false
        }, {
        // nine:
            question:"Which continent covers the largest area? Asia",
            A:"Africa",
            B:"North America",
            C:"South America",
            D:"Asia",
            answer: "D",
            // – 44.58 million square kilometers, 30% of Earth’s land area.
            // isAsked: false
        },{ 
        // ten:
            question:"Han, Ming and Qing were ruling dynasties in which country?",
            A:"Thailand",
            B:"Vietnam",
            C:"India",
            D:"China",
            answer: "D",
            //
            // isAsked: false
        }, 
    
    ],
    
    correctAnswers: 0,
    wrongAnswers: 0,

}

let timer = 10;
let timerInt;
let curQ = 0;
trivia.questionsArr = trivia.questionsArr.sort(function (){return Math.random() - 0.5}); 



function buildCard(){

    clock();
    gameOver()
    var gameDiv = $('<form class= gameDiv>');
    $("#main").empty();
    $("#main").append(gameDiv);
    var q = $('<h2 id = question>' + trivia.questionsArr[curQ].question + '</h2>');
    var a = $('<input type = "radio" value = "A" name = "a" id = "a" > ' + trivia.questionsArr[curQ].A + '</p>');
    var b = $('<input type = "radio" value = "B" name = "a" id = "b" > ' + trivia.questionsArr[curQ].B + '</p>') ;
    var c = $('<input type = "radio" value = "C" name = "a" id = "c" > ' + trivia.questionsArr[curQ].C + '</p>');
    var d = $('<input type = "radio" value = "D" name = "a" id = "d" > ' + trivia.questionsArr[curQ].D + '</p>');
    var submit = $('<button id = submit>');
    $(".gameDiv").append(q,a,b,c,d,submit);
    submit.text("Submit")
    gameOver()
    //end game logic
    
}

function clock(){
    //TODO! Figure out timers....
    clearInterval(timerInt);
    timerInt = setInterval(countDown, 1000)
    
    // console.log(timer)
}

function countDown(){
    var clickSubmit = document.getElementById("submit")
    // console.log(click)
    timer--
    $("#timer").html('<h3>' + timer + '</h3>')
    console.log(timer)
    if (timer === 0){
        clearInterval(timerInt);
        trivia.wrongAnswers++;
        clickSubmit.click();
        timer = 10;
        alert("Times Up");
    }

}

function stopT(){
    clearInterval(timer)
}
function gameOver(){
    stopT()
    if (curQ === 10) {
        $("#main").empty();
        // var qC = $('<h2 id = correct>' + trivia.correctAnswers + "Correct" + trivia.wrongAnswers + "Wrong" + '</h2>');
        // var qW = $('<h2 id = wrong>' + trivia.wrongAnswers + "Wrong" + '</h2>');
        alert("Game over " + trivia.correctAnswers + " Correct: " + trivia.wrongAnswers + " Wrong");
        // console.log("Correct " + trivia.correctAnswers);
        // console.log("Wrong " + trivia.wrongAnswers)
        // $(".gameDiv").append(qC, qW)
        
    }
}

    $(document).on("click","#submit", function() {
        event.preventDefault()
        console.log("test")
        
       var value = $('input[name="a"]:checked').val();
        

        if ( value === trivia.questionsArr[curQ].answer ){
            $("#qAnswer").text("Correct")
            trivia.correctAnswers++
            console.log(trivia.correctAnswers)
            gameOver()
            timer = 10;
            
        }else {
            console.log("Wrong")
            trivia.wrongAnswers++
            console.log(trivia.wrongAnswers)
            gameOver()
            timer = 10;
        }
        curQ++
        // gameOver();
        buildCard();
    })

buildCard()
