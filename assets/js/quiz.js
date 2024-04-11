// Quiz data structure
const quizData = [
  {
    question: "Which of the following is considered a strong password?",
    answers: ["123456", "password", "letmein", "Tr0ub4dor&3"],
    correctAnswer: 3,
    feedback:
      "Strong passwords often include a mix of uppercase and lowercase letters, numbers, and symbols.",
  },
  {
    question:
      "Which of the following is considered a secure method for authenticating a user?",
    answers: [
      "Passwords",
      "Security questions",
      "Two-factor authentication",
      "Using the same password for multiple accounts",
    ],
    correctAnswer: 2,
    feedback:
      "Two-factor authentication adds an additional layer of security by requiring not only a password and username but also something that only the user has on them, i.e., a piece of information only they should know or have immediately to hand - such as a physical token.",
  },
  {
    question: "What is an SQL injection attack?",
    answers: [
      "An attack that deletes files from a computer",
      "An attack that steals personal information from a user",
      "An attack that exploits vulnerabilities in a database to execute malicious SQL statements",
      "An attack that floods a network with excessive traffic",
    ],
    correctAnswer: 2,
    feedback:
      "An SQL injection attack is a type of cyber attack where an attacker exploits vulnerabilities in a web application's database to execute malicious SQL statements, potentially gaining unauthorised access to data or manipulating the database.",
  },
  {
    question:
      "What is the principle of least privilege (PoLP) in cybersecurity?",
    answers: [
      "Giving users the highest level of access rights",
      "Granting access based on job titles",
      "Providing access to all available resources",
      "Giving users only the minimum access rights necessary to perform their tasks",
    ],
    correctAnswer: 3,
    feedback:
      "The principle of least privilege (PoLP) states that users should be given only the minimum access rights necessary to perform their tasks. This reduces the potential impact of a security breach by limiting the privileges an attacker can obtain.",
  },
  {
    question: "What is the purpose of a honeypot in cybersecurity?",
    answers: [
      "To attract and trap bees",
      "To detect and remove malware",
      "To monitor network traffic for suspicious activity",
      "To increase internet speed",
    ],
    correctAnswer: 2,
    feedback:
      "A honeypot is a decoy system or network designed to attract and monitor unauthorised access attempts or suspicious activity. By analysing the activities of attackers, security professionals can gain insights into their methods and protect the real systems from similar attacks.",
  },
  {
    question: "What does HTTPS stand for?",
    answers: [
      "HyperText Transfer Protocol Secure",
      "HyperText Transfer Protocol",
      "Hyper Transfer Protocol Secure",
      "HyperText Transfer Protocol System",
    ],
    correctAnswer: 0,
    feedback:
      "HTTPS means HyperText Transfer Protocol Secure, indicating the web traffic is encrypted.",
  },
  {
    question: "What is a firewall used for in computing?",
    answers: [
      "Heating the computer",
      "Monitoring and controlling network traffic",
      "Cleaning viruses from the computer",
      "Enhancing the computer's performance",
    ],
    correctAnswer: 1,
    feedback:
      "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
  },
  {
    question: "Which of these is a common sign of a phishing attempt?",
    answers: [
      "The email is from a trusted source",
      "It contains no attachments",
      "It asks for personal information",
      "It has no links",
    ],
    correctAnswer: 2,
    feedback:
      "Phishing attempts often try to trick you into giving out personal information such as passwords, credit card numbers, or Social Security numbers.",
  },
  {
    question: 'What does the term "encryption" refer to?',
    answers: [
      "Converting information into an unreadable form for unauthorised users",
      "Scanning and removing viruses from a computer",
      "Increasing the speed of internet connection",
      "Physically securing a computer with a lock",
    ],
    correctAnswer: 0,
    feedback:
      "Encryption is the process of converting data into a code to prevent unauthorised access.",
  },
  {
    question: "Which of these is NOT a type of malware?",
    answers: ["Spyware", "Adware", "Freeware", "Ransomware"],
    correctAnswer: 2,
    feedback:
      "Freeware is software that is available for use at no monetary cost or for an optional fee, but usually (although not necessarily) closed source with one or more restricted usage rights.",
  },
  {
    question: "What is a Man-in-the-Middle (MitM) attack?",
    answers: [
      "A physical altercation between two individuals over a computer",
      "A disagreement between software developers",
      "An attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other",
      "A direct attack on a data centre's physical infrastructure",
    ],
    correctAnswer: 2,
    feedback:
      "In a MitM attack, the attacker intercepts communication between two parties to steal or manipulate the data being exchanged.",
  },
  {
    question:
      "Which of the following is considered a secure method for authenticating a user?",
    answers: [
      "Passwords",
      "Security questions",
      "Two-factor authentication",
      "Using the same password for multiple accounts",
    ],
    correctAnswer: 2,
    feedback:
      "Two-factor authentication adds an additional layer of security by requiring not only a password and username but also something that only the user has on them, i.e., a piece of information only they should know or have immediately to hand - such as a physical token.",
  },
  {
    question: "What is the primary purpose of GDPR?",
    answers: [
      "To enhance cyber-attack techniques",
      "To protect user data and privacy for individuals",
      "To regulate the export of digital products",
      "To increase internet speed globally",
    ],
    correctAnswer: 1,
    feedback:
      "The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy in the European Union and the European Economic Area.",
  },
  {
    question:
      'What does "IoT" stand for, and why is it significant in cybersecurity?',
    answers: [
      "Internet of Trains, significant for its use in modern transportation",
      "Internet of Things, significant because it expands the number of devices connected to the internet, increasing potential security vulnerabilities",
      "Intranet of Teams, significant for facilitating internal corporate communications",
      "Ideology of Transparency, significant for its philosophical impact on information sharing",
    ],
    correctAnswer: 1,
    feedback:
      "The Internet of Things refers to the growing network of physical objects that are connected to the internet, increasing the potential attack surface for cyber threats.",
  },
];

let currentQuestionIndex = 0;
let score = 0;
// this function will display the question and answers
function displayQuestion() {
  const questionObj = quizData[currentQuestionIndex];
  document.getElementById("question").textContent = questionObj.question;
  const answersUl = document.getElementById("answers");
  answersUl.innerHTML = ""; // Clear previous answers

  questionObj.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.classList.add("mb-2"); // Add spacing between options
    const radioHtml = `<input type="radio" name="answer" id="answer${index}" value="${index}">
                             <label for="answer${index}">${answer}</label>`;
    li.innerHTML = radioHtml;
    answersUl.appendChild(li);
  });
}
//this function will check if the answer is correct or not
function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    alert("Please select an answer.");
    return false;
  }
  const answerValue = parseInt(selectedAnswer.value);
  if (answerValue === quizData[currentQuestionIndex].correctAnswer) {
    score++;
    document.getElementById("feedback").textContent =
      "Correct! " + quizData[currentQuestionIndex].feedback;
  } else {
    document.getElementById("feedback").textContent =
      "Incorrect. " + quizData[currentQuestionIndex].feedback;
  }
  return true;
}

document.getElementById("submit").addEventListener("click", () => {
  if (checkAnswer()) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "inline";
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
    document.getElementById("feedback").textContent = "";
    document.getElementById("next").style.display = "none";
    document.getElementById("submit").style.display = "inline";
  } else {
    document.getElementById("quiz-container").innerHTML = `<div class="result">
                                                                  <h2>Quiz Completed!</h2>
                                                                  <p>Your score: ${score}/${quizData.length}</p>
                                                                </div>`;
  }
});

// Initial call to display the first question
displayQuestion();
