document.addEventListener("DOMContentLoaded", function () {
  const generateQuestionsBtn = document.getElementById("generateQuestionsBtn");
  const questionsContainer = document.getElementById("questionsContainer");

  const allQuestions = [
    {
      question: "pregunta 1",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
   
  ];

  generateQuestionsBtn.addEventListener("click", function () {
    questionsContainer.innerHTML = ""; // Limpia el contenido anterior

    const selectedQuestions = getRandomQuestions(allQuestions, 10);

    selectedQuestions.forEach(function (questionData, index) {
      const questionCard = createQuestionCard(questionData, index + 1);
      questionsContainer.appendChild(questionCard);
    });
  });

  function getRandomQuestions(allQuestions, count) {
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, count);
  }

  function createQuestionCard(questionData, questionNumber) {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const questionHeader = document.createElement("h5");
    questionHeader.classList.add("card-title");
    questionHeader.textContent = `Pregunta ${questionNumber}: ${questionData.question}`;

    const optionsList = document.createElement("ul");
    optionsList.classList.add("list-group", "list-group-flush");

    questionData.options.forEach(function (option) {
      const optionItem = document.createElement("li");
      optionItem.classList.add("list-group-item");

      const optionLabel = document.createElement("label");
      optionLabel.classList.add("form-check-label");

      const optionInput = document.createElement("input");
      optionInput.classList.add("form-check-input");
      optionInput.type = "radio";
      optionInput.name = `question${questionNumber}`;
      optionInput.value = option;

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));

      optionItem.appendChild(optionLabel);
      optionsList.appendChild(optionItem);
    });

    cardBody.appendChild(questionHeader);
    cardBody.appendChild(optionsList);
    card.appendChild(cardBody);

    return card;
  }
  // ... (código anterior)

  generateQuestionsBtn.addEventListener("click", function () {
    // ... (código anterior)

    selectedQuestions.forEach(function (questionData, index) {
      const questionCard = createQuestionCard(questionData, index + 1);
      questionsContainer.appendChild(questionCard);
    });
  });

  submitAnswersBtn.addEventListener("click", function () {
    const correctAnswers = selectedQuestions.filter(
      (questionData) => questionData.userAnswer === questionData.correctAnswer
    );
    resultMessage.textContent = `Respuestas correctas: ${correctAnswers.length} de 10`;
  });

  // ... (código anterior)
});
