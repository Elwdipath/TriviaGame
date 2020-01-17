//Trivia Game
//1. Create game object
var trivia = {
    questionsArr: [{
        one: "Which nut is used to make dynamite?", //Peanut – peanut oil can be processed to produce glycerol, which can then be used to make nitroglycerine – an explosive liquid used in dynamite.
        two:"Which vegetable was considered poisonous in Medieval times but was used by the Romans as an aphrodisiac?", //Tomato – being in the Solanaceae family, which includes deadly nightshades and other poisonous plants, tomatoes were erroneously thought to be poisonous. According to the folklore, if you would eat a tomato, its poison would turn your blood into acid. Instead, the colonists used to grow tomatoes purely for decoration.
        three:"What is the highest recorded jump by a kangaroo in a single leap?", //9 meters (30 feet)
        four:"What is the longest movie ever made?", //Logistics – at 51,420 minutes, (857 hours or 35 days and 17 hours), it is the longest movie ever made.
        five:"Which country has beaver as the national emblem? Turkey; Peru; Canada",//Canada
        six:"Which cells are situated only within the nervous system?", //Neurons – humans have around 100 billion neurons in their brain alone.
        seven:"Which is the hottest planet? Venus; Mercury; Saturn; Jupiter", //Venus – although Mercury is much closer to the Sun, it has no atmosphere. The atmosphere on Venus helps retain much more of the Sun’s heat.
        eight:"Which war caused the greatest loss of life for Americans? WW1; WW2; Vietnam; The American Civil War", //The American Civil War – around 620,000 dead. This is more than WW1, WW2 and Vietnam combined.
        nine:"Which continent covers the largest area? Asia; North America; Africa; South America", //Asia – 44.58 million square kilometers, 30% of Earth’s land area.
        ten:"Han, Ming and Qing were ruling dynasties in which country?", //China
    }],
    
    correctAnswers: [],
    wrongAnswers: [],

}


//2. Create questions and set them in an array in the game object
//3. Grab a random object from game.questionArr and display it on the screen.
//4. Start a timer of 30 secs and display question
    //4a. if question is answered correctly display correct text and increment game.correctAnswers by 1
    //4b. if answer is incorrect display incorrect text and increment game.wrongAnswers by 1
    //4c. if time runs out display times up text and increment game.wrongAnswers by 1