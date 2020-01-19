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
            isAsked: false,
        }, 
        { 
        // two:
            question: "Which vegetable was considered poisonous in Medieval times but was used by the Romans as an aphrodisiac?",
            A:"Tomato",
            B:"test",
            C:"t",
            D:"test",
            answer: "A",
            // – being in the Solanaceae family, which includes deadly nightshades and other poisonous plants, tomatoes were erroneously thought to be poisonous. According to the folklore, if you would eat a tomato, its poison would turn your blood into acid. Instead, the colonists used to grow tomatoes purely for decoration
            isAsked: false,
        },
        {
        // three:
            question:"What is the highest recorded jump by a kangaroo in a single leap?",
            A:"test",
            B:"9 meters",
            C:"test",
            D:"test",
            answer: "B",
                // (30 feet)
            isAsked: false,
        },
        {
        // four: 
            question: "What is the longest movie ever made?",
            A:"test",
            B:"test",
            C:"Logistics",
            D:"test",
            // answer: "",
            // options: ["A. Logistics", "B. Heat", "C. Titanic","D. Saving Private Ryan"],
            //  – at 51,420 minutes, (857 hours or 35 days and 17 hours), it is the longest movie ever made.
            answer: "C",
            isAsked: false,
        },
        {
        // five:
            question: "Which country has beaver as the national emblem? Turkey; Peru; Canada",
            A:"test",
            B:"test",
            C:"test",
            D:"Canada",
            answer: "D",
            //
            answer: "",
            isAsked: false,
        },
        {
        // six: 
            question:"Which cells are situated only within the nervous system?",
            A:"Neurons",
            B:"test",
            C:"test",
            D:"test",
            answer: "A",
            // – humans have around 100 billion neurons in their brain alone.
            isAsked: false
        },{ 
        // seven:
            question: "Which is the hottest planet? Venus; Mercury; Saturn; Jupiter",
            A:"test",
            B:"test",
            C:"Venus",
            D:"test",
            answer: "C",
            // – although Mercury is much closer to the Sun, it has no atmosphere. The atmosphere on Venus helps retain much more of the Sun’s heat.
            isAsked: false
        }, {
        // eight: 
            question:"Which war caused the greatest loss of life for Americans? WW1; WW2; Vietnam; The American Civil War",
            A:"The American Civil War",
            B:"test",
            C:"test",
            D:"test",
            answer: "A",
            // – around 620,000 dead. This is more than WW1, WW2 and Vietnam combined.
            isAsked: false
        }, {
        // nine:
            question:"Which continent covers the largest area? Asia; North America; Africa; South America",
            A:"test",
            B:"test",
            C:"t",
            D:"Asia",
            answer: "D",
            // – 44.58 million square kilometers, 30% of Earth’s land area.
            isAsked: false
        },{ 
        // ten:
            question:"Han, Ming and Qing were ruling dynasties in which country?",
            A:"test",
            B:"test",
            C:"t",
            D:"China",
            answer: "D",
            //
            isAsked: false
        }, 
    
    ],
    
    correctAnswers: [],
    wrongAnswers: [],

}

let timer;
let curQ;

//3. Grab a random object from game.questionArr 
function rQuestion(){
    
    var q = trivia.questionsArr[Math.floor(Math.random() * trivia.questionsArr.length)]
    if (q.isAsked === false){
        // console.log(q);
        curQ = q
        q.isAsked = true;
    }//TODO!: Else statement when all questions are set to true

}
//display Q on the screen.

function buildCard(){

    $("#question").html('<h3>'+curQ.question+'</h3>')
    $("#A").html('<input type = "radio" id = "A">' + curQ.A)
    $("#B").html('<input type = "radio" id = "B">' + curQ.B)
    $("#C").html('<input type = "radio" id = "C">' + curQ.C)
    $("#D").html('<input type = "radio" id = "D">' + curQ.D)
}
rQuestion()
buildCard()

//4. Start a timer of 30 secs and display question
    //4a. if question is answered correctly display correct text and increment game.correctAnswers by 1
    //4b. if answer is incorrect display incorrect text and increment game.wrongAnswers by 1
    //4c. if time runs out display times up text and increment game.wrongAnswers by 1