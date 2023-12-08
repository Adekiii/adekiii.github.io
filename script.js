// a0NDba5sGsc_GfRV669xxoWPiLKv1nPzPGNFsx8GbKto
const rootUrl = "https://database.deta.sh/v1/a0NDba5sGsc/comp3736/items"

// Generate a "pseudo" identifier
const currentUser = btoa(new Date().getTime()).slice(13, -2);
console.log(currentUser);

// Replace these placeholders with your own data
const questions = [
    { //1
        image: "https://i.imgur.com/8HI0wpv.png",
        question: "Which country has the greatest difference in total medals earned between 1992 and 1996?",
        options: ["AUS", "USA", "NED", "KOR"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //2
        image: "https://i.imgur.com/6Qe6SCI.png",
        question: "Which country has the greatest difference in total medals earned between 2004 and 2008?",
        options: ["USA", "AUS", "JPN", "KOR"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //3
        image: "https://i.imgur.com/d6MoIzD.png",
        question: "Which country has the greatest difference in total medals earned between 1984 and 1992?",
        options: ["ROU", "FRA", "JPN", "AUS"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //4
        image: "https://i.imgur.com/aRgb1YL.png",
        question: "Which country has the greatest difference in total medals earned between 1996 and 2004?",
        options: ["JPN", "AUS", "FRA", "ROU"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //5
        image: "https://i.imgur.com/NYGhYfK.png",
        question: "Which country earned the greatest total medals between 1984 and 1992 inclusive?",
        options: ["GBR", "KOR", "BRA"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //6
        image: "https://i.imgur.com/Qfssk3U.png",
        question: "Which country earned the greatest total medals between 1976 and 1984 inclusive?",
        options: ["GBR", "KOR", "BRA"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //7
        image: "https://i.imgur.com/SJOZG3M.png",
        question: "Which country earned the greatest total medals between 1988 and 1996 inclusive?",
        options: ["GER", "FRA", "BRA", "NED"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //8
        image: "https://i.imgur.com/cduCMIv.png",
        question: "Which country earned the greatest total medals between 1996 and 2004 inclusive?",
        options: ["GER", "FRA", "BRA", "NED"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //9
        image: "https://i.imgur.com/SnEzAzM.png",
        question: "How many more medals did JPN earn compared to HUN in 2004?",
        options: ["54", "39", "68", "44"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //10
        image: "https://i.imgur.com/9ifTebW.png",
        question: "How many more medals did JPN earn compared to ESP in 2000?",
        options: ["0", "5", "10", "18"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //11
        image: "https://i.imgur.com/fTgCDR1.png",
        question: "How many more medals did GBR earn compared to BRA in 1984?",
        options: ["35", "20", "49", "27"],
        answer: 2, // Index of the correct answer in the options array
    },
    { //12
        image: "https://i.imgur.com/lrzzAnB.png",
        question: "How many more medals did BRA earn compared to JPN in 1996?",
        options: ["21", "5", "26", "32"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //13
        image: "https://i.imgur.com/wjC1WzP.png",
        question: "Which country had the smallest difference in medals earned in 2004 compared to 2012?",
        options: ["NED", "JPN", "HUN", "USA"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //14
        image: "https://i.imgur.com/dDta4UH.png",
        question: "Which country had the smallest difference in medals earned in 1988 compared to 1996?",
        options: ["HUN", "JPN", "NED", "USA"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //15
        image: "https://i.imgur.com/7VDMovu.png",
        question: "Which country had the smallest difference in medals earned in 1988 compared to 1996?",
        options: ["ROU", "ITA", "JPN"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //16
        image: "https://i.imgur.com/eEbKAIb.png",
        question: "Which country had the smallest difference in medals earned in 1984 compared to 1992?",
        options: ["JPN", "ROU", "ITA"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //17
        image: "https://i.imgur.com/ATqg4ZA.png",
        question: "Which country earned the most combined silver and gold medals in 1992?",
        options: ["ESP", "AUS"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //18
        image: "https://i.imgur.com/o4fMwI4.png",
        question: "Which country earned the most combined silver and gold medals in 2008?",
        options: ["AUS", "ESP"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //19
        image: "https://i.imgur.com/qK9NS7M.png",
        question: "Which country earned the most combined silver and gold medals in 1992?",
        options: ["AUS", "NED", "ITA"],
        answer: 0, // Index of the correct answer in the options array
    },
    { //20
        image: "https://i.imgur.com/5t7kwuB.png",
        question: "Which country earned the most combined silver and gold medals in 1988?",
        options: ["AUS", "NED", "ITA"],
        answer: 0, // Index of the correct answer in the options array
    },
    // Add more question objects similarly
];

let currentQuestion = 0;
let startTime, endTime;
const results = [];

function startExperiment() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('experiment-container').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionObj = questions[currentQuestion];
    console.log(questionObj.image)
    document.getElementById('image').src = questionObj.image;
    document.getElementById('question').innerText = questionObj.question;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    const correctIndex = questionObj.answer; // Store the index of the correct answer

    // Shuffle the order of options while preserving the mapping
    const shuffledOptionsWithMapping = questionObj.options.map((option, index) => ({ option, index }));
    shuffledOptionsWithMapping.sort(() => Math.random() - 0.5);

    shuffledOptionsWithMapping.forEach(({ option, index: shuffledIndex }) => {
        const answerButton = document.createElement('button');
        answerButton.innerText = option;
        answerButton.addEventListener('click', () => checkAnswer(correctIndex === shuffledIndex, currentQuestion));
        answersDiv.appendChild(answerButton);
    });

    startTime = new Date().getTime();
}

function checkAnswer(isCorrect, questionNumber) {
    endTime = new Date().getTime();
    let timeTaken = Math.floor((endTime - startTime) / 1000);
    if (timeTaken === 0) {
        timeTaken = 1;
    }
    correctness = isCorrect ? 1 : 0;
    const efficiency = correctness + (1 / timeTaken);

    results.push({
        isCorrect: correctness,
        timeTaken: timeTaken,
        chartType: questionNumber % 2 === 0 ? "Line" : "Area",
        user: currentUser,
        question: questions[questionNumber]['question'],
        efficiency: efficiency
    });
    console.log(results);

    clearScreen();
}

function clearScreen() {
    document.getElementById('question').innerText = ''; // Clear question
    document.getElementById('feedback').innerText = ''; // Clear feedback
    document.getElementById('answers').innerHTML = ''; // Clear answers
    document.getElementById('image').style.display = 'none'; // Hide image

    setTimeout(nextQuestion, 1000); // Show next question after 1 second
}

function nextQuestion() {
    document.getElementById('image').style.display = 'block'; // Show image
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endExperiment();
    }
}

function endExperiment() {
    document.getElementById('experiment-container').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block'; // Show the thank you section
    saveResultsToCSV();
    saveResultsToDatabase();
    currentQuestion = 0; // Reset experiment for potential restart
    results.length = 0; // Clear results array
  }

  document.getElementById('return-home').addEventListener('click', () => {
    document.getElementById('thank-you').style.display = 'none';
    document.getElementById('homepage').style.display = 'block'; // Show the home page
  });

function saveResultsToDatabase() {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': 'a0NDba5sGsc_GfRV669xxoWPiLKv1nPzPGNFsx8GbKto'
        },
        body: JSON.stringify({
            "items": results
        })
    };
    fetch(rootUrl, requestOptions)
        .then(response => response.json());
}

function saveResultsToCSV() {
    const headers = 'TimeTaken(ms),Correctness';
    const csvContent = results.map(result => `${result.timeTaken},${result.isCorrect}`).join('\n');
    const csvData = `${headers}\n${csvContent}`;

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'experiment_results.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('start-button').addEventListener('click', startExperiment);
