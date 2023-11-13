//const { get } = require("jquery")

const header = document.querySelector(".personalityHeader");
const agentHeader = document.querySelector(".agentHeader");
const agentTitle = document.querySelector(".agentTitle");
const agentSubTitle1 = document.querySelector("#agentSubTitle1");
const agentSubTitle2 = document.querySelector("#agentSubTitle2");
const agentSubTitle3 = document.querySelector("#agentSubTitle3");
const q1 = document.querySelector(".q1");
const green = document.querySelector(".greenQuestion");
const q2A = document.querySelector(".q2A");
const q2B = document.querySelector(".q2B");
const q2C = document.querySelector(".q2C");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const demo = document.querySelector(".demographics");
const userIdSpan = document.getElementById("userId");

const attentionCheck = document.querySelector(".attentionCheck");
const correctAttentionCheck = document.querySelector(".correctAttentionCheck");
const incorrectAttentionCheck = document.querySelector(
  ".incorrectAttentionCheck"
);
const correctAttentionCheckText = document.querySelector(
  "#correctAttentionCheckText"
);
const incorrectAttentionCheckText = document.querySelector(
  "#incorrectAttentionCheckText"
);

const landingPage = document.querySelector(".landingPage");
const consentForm = document.querySelector(".consentForm");
const generalInstructions1 = document.querySelector(".generalInstructions1");
const generalInstructions2 = document.querySelector(".generalInstructions2");
const generalInstructions3 = document.querySelector(".generalInstructions3");
const introduction = document.querySelector(".introduction");
const survey = document.querySelector(".survey");
const submitPage = document.querySelector(".submitPage");
const loading = document.querySelector(".loading");
const personalAgentInstructions = document.querySelector(
  ".personalAgentInstructions"
);
const generalAgentInstructions = document.querySelector(
  ".generalAgentInstructions"
);
const controlAgentInstructions = document.querySelector(
  ".controlAgentInstructions"
);
const personalAgentInstructions2 = document.querySelector(
  ".personalAgentInstructions2"
);
const generalAgentInstructions2 = document.querySelector(
  ".generalAgentInstructions2"
);
const controlAgentInstructions2 = document.querySelector(
  ".controlAgentInstructions2"
);
//const itinerary = document.querySelector(".itinerary");
const end = document.querySelector(".end");
const followupQuestions = document.querySelector(".followupQuestions");
const followupQuestions2 = document.querySelector(".followupQuestions2");
const followupQuestions3 = document.querySelector(".followupQuestions3");
const followupQuestionsGreenScale = document.querySelector(
  ".followupQuestionsGreenScale"
);

const flight = document.getElementById("flight");
const rentalCar = document.getElementById("rentalCar");
const hotel = document.getElementById("hotel");
const dinner = document.getElementById("dinner");
const lunch = document.getElementById("lunch");
const breakfast = document.getElementById("breakfast");
const museums = document.getElementById("museums");
const markets = document.getElementById("markets");
const flamencoShows = document.getElementById("flamencoShows");
const publicTransportatonShort = document.getElementById(
  "publicTransportationShort"
);
const publicTransportationLong = document.getElementById(
  "publicTransportationLong"
);
const coffee = document.getElementById("coffee");
const bakery = document.getElementById("bakery");
const nightLife = document.getElementById("nightLife");
const bars = document.getElementById("bars");
const groceries = document.getElementById("groceries");
const souveneirs = document.getElementById("souveneirs");
const shopping = document.getElementById("shopping");
const internationalPhoneService = document.getElementById(
  "internationalPhoneService"
);
const currencyExchange = document.getElementById("currencyExchange");
const luggage = document.getElementById("luggage");
const dayTrip = document.getElementById("dayTrip");
const travelInsurance = document.getElementById("travelInsurance");
const travelPlugAdapter = document.getElementById("travelPlugAdapter");

const questionnaireText1 = document.getElementById("questionnaire1");
const questionnaireText2 = document.getElementById("questionnaire2");
const questionnaireText3 = document.getElementById("questionnaire3");

const interactivityQuestionnaire1 = document.getElementById(
  "interactivityQuestionnaire1"
);
const identificationQuestionnaire1 = document.getElementById(
  "identificationQuestionnaire1"
);
const greenQuestionnaire1 = document.getElementById("greenQuestionnaire1");

const algorithmKnowledge = document.querySelector(".algorithmKnowledge");
const algorithmAwareness = document.querySelector(".algorithmAwareness");

const uploadForm = document.getElementById("uploadForm");
const uploadButton = document.getElementById("uploadButton");
/*
uploadButton.addEventListener("click", async function () {
  const formData = new FormData(uploadForm);

  try {
    const response = await fetch(
      "https://psych-website-eight.vercel.app/api/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      // Handle a successful upload

      console.log("File uploaded successfully.");
      console.log(json);
    } else {
      // Handle an error if the upload fails
      console.error("File upload failed." + json);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
*/

const orderOfQuestions = [
  landingPage,
  consentForm,
  generalInstructions1,
  generalInstructions2,
  generalInstructions3,
  introduction,
  q1,
  green,
  q3,
  q2A,
  q2B,
  q2C,
  q4,
  demo,
  submitPage,
  loading,
];

const orderOfItinerary = [
  flight,
  rentalCar,
  hotel,
  dinner,
  lunch,
  breakfast,
  museums,
  markets,
  flamencoShows,
  publicTransportatonShort,
  publicTransportationLong,
  coffee,
  bakery,
  nightLife,
  bars,
  groceries,
  souveneirs,
  shopping,
  internationalPhoneService,
  currencyExchange,
  luggage,
  dayTrip,
  travelInsurance,
  travelPlugAdapter,
];

function randomize() {
  randomizeImages();
  randomizeQuestions();
  randomizeItineraryFeatures();
  randomizeOrderOfRec();
}

function startSurvey() {
  randomize();
  header.style.display = "block";
  nextQuestion();
}

function landingPageBtn() {
  landingPage.style.display = "none";
  consentForm.style.display = "block";
}

function consentFormBtn() {
  consentForm.style.display = "none";
  generalInstructions1.style.display = "block";
}

function generalInstructions1Btn() {
  generalInstructions1.style.display = "none";
  generalInstructions2.style.display = "block";
}

function generalInstructions2Btn() {
  generalInstructions2.style.display = "none";
  generalInstructions3.style.display = "block";
}

function generalInstructions3Btn() {
  generalInstructions3.style.display = "none";
  introduction.style.display = "block";
}
function exit() {
  tmp = [];
  location.reload();
}
const uploadCsvServer = async (csvContent) => {
  const content = { csvContent: "azxvcxzv", fileName: "test" };
  const response = await fetch("http://localhost:3001/upload", {
    method: "POST",
    body: JSON.stringify(content),
  });
  console.log(csvContent);
  const json = await response.json();
  if (response.ok) {
    return json;
  }
};

let currentInd = 0;
function nextQuestion() {
  fetch("http://127.0.0.1:5000/writefile", {
    method: "POST",
    body: "test",
  });
  orderOfQuestions.at(currentInd).style.display = "none";
  orderOfQuestions.at(currentInd + 1).style.display = "block";
  currentInd++;
  window.scroll(0, 0);
}

function lastQuestion() {
  orderOfQuestions.at(currentInd).style.display = "none";
  orderOfQuestions.at(currentInd - 1).style.display = "block";
  currentInd--;
  window.scroll(0, 0);
}

let q1Length = 0;
function question1() {
  if ($(":input:radio:checked").length < q1Length) {
    alert("At least one group is blank");
  } else {
    nextQuestion();
  }
}

function greenQuestion() {
  nextQuestion();
}

let q2Length = 0;
function question2A() {
  if ($(":input:radio:checked").length < q2Length + q1Length) {
    alert("At least one group is blank");
  } else {
    //displayRadioValue("imageOne");
    nextQuestion();
  }
}

function question2B() {
  if ($(":input:radio:checked").length < q2Length + q1Length) {
    alert("At least one group is blank");
  } else {
    //displayRadioValue("imageTwo");
    nextQuestion();
  }
}

function question2C() {
  if ($(":input:radio:checked").length < q2Length + q1Length) {
    alert("At least one group is blank");
  } else {
    //displayRadioValue("imageThree");
    nextQuestion();
  }
}

function question3() {
  nextQuestion();
}

let interestQuestionLength = 9999;
function interestQuestion() {
  if ($(":input:checkbox:checked").length > interestQuestionLength) {
    alert("Choose a maximum of 5 options");
  } else {
    nextQuestion();
  }
}

function demographicsBtn() {
  nextQuestion();
  header.style.display = "none";
}

function submitPageBtn() {
  nextQuestion();
  setTimeout(showLoadingBtn, 3000);
}

function showLoadingBtn() {
  document.getElementById("loadingBtn").removeAttribute("hidden");
  document.getElementById("loader").setAttribute("hidden", "hidden");
}

function loadingBtn() {
  endSurvey();
}

let itineraryInd = 0;
function nextItineraryPage() {
  orderOfItinerary[itineraryInd].style.display = "none";
  itineraryInd++;
  orderOfItinerary[itineraryInd].style.display = "block";
  window.scroll(0, 0);
}

function submitItinerary() {
  orderOfItinerary[itineraryInd].style.display = "none";
  agentHeader.style.display = "none";
  followupQuestions.style.display = "block";
  window.scroll(0, 0);
}

function submitFollowup1() {
  followupQuestions.style.display = "none";
  followupQuestions2.style.display = "block";
}

function submitFollowup2() {
  followupQuestions2.style.display = "none";
  followupQuestions3.style.display = "block";
}

function submitFollowup3() {
  followupQuestions3.style.display = "none";
  followupQuestionsGreenScale.style.display = "block";
}

let followupCount = 1;
function submitFollowup() {
  saveUserItineraryData();
  saveQuestionnaireData();
  clearQuestionnaireData();
  agentHeader.style.display = "none";
  if (followupCount == 3) {
    followupQuestionsGreenScale.style.display = "none";
    algorithmKnowledge.style.display = "block";
  } else if (followupCount == 1) {
    followupCount++;
    followupQuestionsGreenScale.style.display = "none";
    itineraryInd = 0;
    followupQuestionnaires[paths[order][1]][4].style.display = "block";
    randomizeItineraryFeatures();
    changeFollowupQuestionnaire();
    saveOriginalItineraryData();
  } else {
    followupCount++;
    followupQuestionsGreenScale.style.display = "none";
    itineraryInd = 0;
    followupQuestionnaires[paths[order][2]][4].style.display = "block";
    randomizeItineraryFeatures();
    changeFollowupQuestionnaire();
    saveOriginalItineraryData();
  }
}

let followupQuestionnaires = [
  [
    "Please answer the following questions about your experiences using your <strong>personal travel agent.</strong> Your answer to these questions will help us provide useful recommendations to future users.",
    "Note: The personal travel agent is the digital program that was designed to make recommendations based on your personality.",
    "During the experiment, the process of developing and then using my personal travel agent…",
    "Personal Travel Agent Instructions",
    personalAgentInstructions,
    "Below is your <strong>personalized travel itinerary</strong>. <i>Smart Traveler</i> has identified the top four options for flights, rental cars, hotels, restaurants, shopping, activities, and more, for your trip.",
    "The selection that is <strong>highlighted</strong> represents the selections that Smart Traveler recommends based on your personality assessment. In other words, the highlighted selection is the option Smart Traveler predicts <strong><i>you</i></strong> are most likely to enjoy.",
    "Please indicate whether you will choose to maintain the selection made by your <strong>personal travel agent</strong>, or click on an alternative option if you would prefer to make a different selection.",
    personalAgentInstructions2,
    "Personal",
    "my personal travel agent",
    "Think about your experience while using the <strong>personal travel agent</strong>. The personal travel agent is the version of Smart Traveler that was designed to make recommendations based on <strong><u>your personal assessment.</u></strong>",
  ],
  [
    "Please answer the following questions about your experiences using the <strong>general travel agent.</strong> Your answer to these questions will help us provide useful recommendations to future users.",
    "Note: The general travel agent is the digital program that was designed to make recommendations based on former participants' personalities.",
    "During the experiment, the process of developing and then using the general travel agent…",
    "General Travel Agent Instructions",
    generalAgentInstructions,
    "Below is the <strong>general travel itinerary</strong>. <i>Smart Traveler</i> has identified the top four options for flights, rental cars, hotels, restaurants, shopping, activities, and more, for your trip.",
    "The selection that is highlighted represents the selections that <i>Smart Traveler</i> recommends based on previous users' personality assessments. In other words, the highlighted selection is the option Smart Traveler predicts <strong></i>previous users</i></strong> are most likely to enjoy.",
    "Please indicate whether you will choose to maintain the selection made by the <strong>general travel agent</strong>, or click on an alternative option if you would prefer to make a different selection.",
    generalAgentInstructions2,
    "General",
    "the general travel agent",
    "Think about your experience while using the <strong>general travel agent</strong>. The general travel agent is the version of Smart Traveler that was designed to make recommendations based on <strong><u>previous users' personal assessments.</u></strong>",
  ],
  [
    "Please answer the following questions about your experiences using the <strong>unprogrammed travel agent.</strong> Your answer to these questions will help us provide useful recommendations to future users.",
    "Note: The unprogrammed travel agent is the digital program that makes generic recommendations.",
    "During the experiment, the process of developing and then using the unprogrammed travel agent...",
    "Unprogrammed Travel Agent Instructions",
    controlAgentInstructions,
    "Below is the <strong>unprogrammed travel itinerary</strong>. Smart Traveler has identified the top four options for flights, rental cars, hotels, restaurants, shopping, activities, and more, for your trip.",
    "The selection that is highlighted was randomly selected by Smart Traveler. In other words, the highlighted selection is not related to any personal assessments.",
    "Please indicate whether you will choose to maintain the selection made by the <strong>unprogrammed travel agent</strong>, or click on an alternative option if you would prefer to make a different selection.",
    controlAgentInstructions2,
    "Control",
    "the unprogrammed travel agent",
    "Think about your experience while using the <strong>unprogrammed travel agent</strong>. The unprogrammed travel agent is the version of Smart Traveler that was designed to make recommendations <strong><u>at random.</u></strong> ",
  ],
];
// 0->P, 1->G, 2->C
/*
1. P->G->C
2. P->C->G
3. G->P->C
4. G->C->P
5. C->G->P
6. C->P->G
*/
let paths = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 1, 0],
  [2, 0, 1],
];
let order = -1;
let curAgent = "";
function randomizeOrderOfRec() {
  order = Math.floor(Math.random() * 6); //  instead of random it should be userid % 6
  questionnaireText1.innerHTML = followupQuestionnaires[paths[order][0]][0];
  questionnaireText2.innerHTML = followupQuestionnaires[paths[order][0]][1];
  questionnaireText3.innerHTML = followupQuestionnaires[paths[order][0]][2];
  agentTitle.innerHTML = followupQuestionnaires[paths[order][0]][3];
  agentSubTitle1.innerHTML = followupQuestionnaires[paths[order][0]][5];
  agentSubTitle2.innerHTML = followupQuestionnaires[paths[order][0]][6];
  agentSubTitle3.innerHTML = followupQuestionnaires[paths[order][0]][7];
  curAgent = followupQuestionnaires[paths[order][0]][9];
  correctAttentionCheckText.innerHTML =
    "Correct! You will be using the " +
    curAgent +
    " Travel Agent to answer this next set of questions.";
  incorrectAttentionCheckText.innerHTML =
    "Incorrect! You will be using the " +
    curAgent +
    " Travel Agent to answer this next set of questions.";

  var elements = document.getElementsByClassName("questionnaireQuestions");

  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = elements[i].innerHTML.replace(
      "my personal travel agent",
      followupQuestionnaires[paths[order][0]][10]
    );
    elements[i].innerHTML = elements[i].innerHTML.replace(
      "the general travel agent",
      followupQuestionnaires[paths[order][0]][10]
    );
    elements[i].innerHTML = elements[i].innerHTML.replace(
      "the control travel agent",
      followupQuestionnaires[paths[order][0]][10]
    );
  }
  interactivityQuestionnaire1.innerHTML =
    followupQuestionnaires[paths[order][0]][11];
  identificationQuestionnaire1.innerHTML =
    followupQuestionnaires[paths[order][0]][11];
  greenQuestionnaire1.innerHTML = followupQuestionnaires[paths[order][0]][11];
}

let questionnaireCount = 1;
function changeFollowupQuestionnaire() {
  if (questionnaireCount == 1) {
    questionnaireText1.innerHTML = followupQuestionnaires[paths[order][1]][0];
    questionnaireText2.innerHTML = followupQuestionnaires[paths[order][1]][1];
    questionnaireText3.innerHTML = followupQuestionnaires[paths[order][1]][2];
    agentTitle.innerHTML = followupQuestionnaires[paths[order][1]][3];
    agentSubTitle1.innerHTML = followupQuestionnaires[paths[order][1]][5];
    agentSubTitle2.innerHTML = followupQuestionnaires[paths[order][1]][6];
    agentSubTitle3.innerHTML = followupQuestionnaires[paths[order][1]][7];
    followupQuestionnaires[paths[order][1]][4].style.display = "block";
    curAgent = followupQuestionnaires[paths[order][1]][9];
    correctAttentionCheckText.innerHTML =
      "Correct! You will be using the " +
      curAgent +
      " Travel Agent to answer this next set of questions.";
    incorrectAttentionCheckText.innerHTML =
      "Incorrect! You will be using the " +
      curAgent +
      " Travel Agent to answer this next set of questions.";
    var elements = document.getElementsByClassName("questionnaireQuestions");

    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = elements[i].innerHTML.replace(
        "my personal travel agent",
        followupQuestionnaires[paths[order][1]][10]
      );
      elements[i].innerHTML = elements[i].innerHTML.replace(
        "the general travel agent",
        followupQuestionnaires[paths[order][1]][10]
      );
      elements[i].innerHTML = elements[i].innerHTML.replace(
        "the control travel agent",
        followupQuestionnaires[paths[order][1]][10]
      );
    }

    interactivityQuestionnaire1.innerHTML =
      followupQuestionnaires[paths[order][1]][11];
    identificationQuestionnaire1.innerHTML =
      followupQuestionnaires[paths[order][1]][11];
    greenQuestionnaire1.innerHTML = followupQuestionnaires[paths[order][1]][11];
    questionnaireCount++;
  } else if (questionnaireCount == 2) {
    questionnaireText1.innerHTML = followupQuestionnaires[paths[order][2]][0];
    questionnaireText2.innerHTML = followupQuestionnaires[paths[order][2]][1];
    questionnaireText3.innerHTML = followupQuestionnaires[paths[order][2]][2];
    agentTitle.innerHTML = followupQuestionnaires[paths[order][2]][3];
    agentSubTitle1.innerHTML = followupQuestionnaires[paths[order][2]][5];
    agentSubTitle2.innerHTML = followupQuestionnaires[paths[order][2]][6];
    agentSubTitle3.innerHTML = followupQuestionnaires[paths[order][2]][7];
    followupQuestionnaires[paths[order][2]][4].style.display = "block";
    curAgent = followupQuestionnaires[paths[order][2]][9];
    correctAttentionCheckText.innerHTML =
      "Correct! You will be using the " +
      curAgent +
      " Travel Agent to answer this next set of questions.";
    incorrectAttentionCheckText.innerHTML =
      "Incorrect! You will be using the " +
      curAgent +
      " Travel Agent to answer this next set of questions.";
    var elements = document.getElementsByClassName("questionnaireQuestions");

    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = elements[i].innerHTML.replace(
        "my personal travel agent",
        followupQuestionnaires[paths[order][2]][10]
      );
      elements[i].innerHTML = elements[i].innerHTML.replace(
        "the general travel agent",
        followupQuestionnaires[paths[order][2]][10]
      );
      elements[i].innerHTML = elements[i].innerHTML.replace(
        "the control travel agent",
        followupQuestionnaires[paths[order][2]][10]
      );
    }

    interactivityQuestionnaire1.innerHTML =
      followupQuestionnaires[paths[order][2]][11];
    identificationQuestionnaire1.innerHTML =
      followupQuestionnaires[paths[order][2]][11];
    greenQuestionnaire1.innerHTML = followupQuestionnaires[paths[order][2]][11];
  }
}

function algorithmKnowledgeBtn() {
  algorithmKnowledge.style.display = "none";
  algorithmAwareness.style.display = "block";
  window.scroll(0, 0);
}

function algorithmAwarenessBtn() {
  algorithmAwareness.style.display = "none";
  end.style.display = "block";
  window.scroll(0, 0);
  tmp.push(
    getRadioValue(
      "Algorithms recognize that results, such as search results, are incomplete and automatically correct them"
    )
  );
  tmp.push(
    getRadioValue(
      "Algorithms can develop themselves in a completely different direction from that for which they were created"
    )
  );
  tmp.push(
    getRadioValue("I can influence algorithms with my internet usage behavior")
  );
  tmp.push(
    getRadioValue(
      "The database used by an algorithm is not decisive in determining its quality"
    )
  );
  tmp.push(
    getRadioValue(
      "When searching for a job online, job offers displayed may vary from person to person despite the same search entry"
    )
  );
  tmp.push(
    getRadioValue(
      "The use of algorithms, which deliver personalized content, can mean that the content you find is mostly consistent with your pre-existing opinions"
    )
  );
  tmp.push(getRadioValue("Algorithms are able to think like human beings"));
  tmp.push(
    getRadioValue("Algorithms are independent of government censorship")
  );
  tmp.push(getRadioValue("Algorithms present both chances and risks"));
  tmp.push(
    getRadioValue(
      "For some media companies, content that is repeated regularly (e.g., traffic reports) is already written by algorithms"
    )
  );
  tmp.push(getRadioValue("Humans are never involved when algorithms are used"));
  tmp.push(getRadioValue("Smart speaker (e.g., Alexa)"));
  tmp.push(getRadioValue("Smart TV"));
  tmp.push(
    getRadioValue(
      "Wearable computing devices such as activity trackers and heart rate monitors"
    )
  );
  tmp.push(
    getRadioValue(
      "Internet browsers (e.g., Internet Explorer, Firefox, Google Chrome)"
    )
  );
  tmp.push(getRadioValue("Electronic payment (credit and debit card)"));
  tmp.push(getRadioValue("Cell phone towers"));
  tmp.push(getRadioValue("Computer games"));
  tmp.push(getRadioValue("FM radios"));
  tmp.push(getRadioValue("To create weather forecasts"));
  tmp.push(getRadioValue("To make product recommendations"));
  tmp.push(getRadioValue("To create financial news (stock markets)"));
  tmp.push(getRadioValue("To personalize advertisements"));
  saveCsv();
}

function randomHighlight(group) {
  let rand = Math.floor(Math.random() * 4);
  let inputHtml = document.getElementsByName(group)[rand].innerHTML;
  document.getElementsByName(group)[rand].innerHTML =
    "<span class='highlight'>" + inputHtml + "</span>";
}

function randomSelectRadio(group) {
  let rand = Math.floor(Math.random() * 4);
  let button = document.getElementsByName(group + "Btn")[rand];
  button.checked = true;
  let suggs = document.getElementsByClassName(group + "Suggested");
  if (suggs) {
    for (let i = 0; i < suggs.length; i++) {
      if (i == rand) {
        suggs[i].textContent = "Recommended";
      } else {
        suggs[i].textContent = "";
      }
    }
  }
}

let csv_arr = [
  [
    "Date",
    "Subject Number",
    "rugged delicate",
    "excited calm",
    "uncomfortable comfortable",
    "dominating submissive",
    "thrifty indulgent",
    "pleasant unpleasant",
    "contemporary noncomtemporary",
    "organized unorganized",
    "rational emotional",
    "youthful mature",
    "formal informal",
    "orthodox liberal",
    "complex simple",
    "colorless colorful",
    "modest vain",
    "Which of the hotels do you prefer?",
    "Where would you like to spend an afternoon?",
    "Which restaurant settings would you enjoy?",
    "What is your preferred type of vacation?",
    "What is your budget for this trip?",
    "Activities: Outdoor Activities",
    "Activities: Cultural experiences",
    "Activities: Relaxation",
    "Activities: Adventure",
    "Activities: Sports",
    "Activities: History and Heritage",
    "Activities: Food and Wine",
    "Activities: Nightlife and Entertainment",
    "Activities: Shopping",
    "Activities: Volunteer tourism",
    "What is your preferred accomodation type?",
    "What is your preferred level of activity?",
    "How important is cultural immersion to you when traveling?",
    "Do you prefer traveling to well known tourist destinations or off-the-beaten-path?",
    "What is your preferred mode of communication while traveling?",
    "How comfortable are you when traveling to destinations with different language or cultural barriers?",
    "What are your preferred types of cuisine when traveling?",
    "How important is relaxation and downtime to you when traveling?",
    "Interest: Adventure Travel",
    "Interest: Art & Design",
    "Interest: Arts & Crafts",
    "Interest: Beauty & Grooming",
    "Interest: Books",
    "Interest: Cameras",
    "Interest: Camping",
    "Interest: Computers",
    "Interest: Cooking",
    "Interest: DIY",
    "Interest: Dogs",
    "Interest: Electronics",
    "Interest: Fall Fashion",
    "Interest: Fashion Accessories",
    "Interest: Fitness",
    "Interest: Food & Drink",
    "Interest: Fun & Hobbies",
    "Interest: Gift Ideas",
    "Interest: Health & Wellness",
    "Interest: Healthy Food",
    "Interest: Hiking",
    "Interest: Home & Garden",
    "Interest: Home Decor",
    "Interest: Home Improvement",
    "Interest: Interior Design",
    "Interest: Kids & Parenting",
    "Interest: Kitchens",
    "Interest: Makeup",
    "Interest: Men's Fashion",
    "Interest: Movies & TV",
    "Interest: Music",
    "Interest: Outdoor Activities",
    "Interest: Outdoors",
    "Interest: Pet Care",
    "Interest: Pets & Animals",
    "Interest: Photography",
    "Interest: Recipes",
    "Interest: Shoes",
    "Interest: Skin Care",
    "Interest: Sports",
    "Interest: Strange Finds",
    "Interest: Style & Fashion",
    "Interest: Technology",
    "Interest: Toys & Games",
    "Interest: Travel",
    "Interest: Women's Accessories",
    "Interest: Women's Fashion",
    "It is important to me that the products I use do not harm the environment.",
    "I consider the potential environmental impact of my actions when making many of my decisions.",
    "My purchase habits are affected by my concern for our environment.",
    "I am concerned about wasting the resources of our planet.",
    "I would describe myself as environmentally responsible.",
    "I am willing to be inconvenienced in order to take actions that are more environmentally friendly.",
    "Gender Identity: Female",
    "Gender Identity: Male",
    "Gender Identity: Genderqueer gender non-binary or gender-fluid",
    "Gender Identity: Transgender Female",
    "Gender Identity: Transgender Male",
    "Gender Identity: Prefer Not to Answer",
    "Gender Identity: Other",
    "Household Pre-tax Income",
    "Rung that best represents where you think you stand on the ladder.",
    "Highest Degree or level of school you have completed",
    "Political Issues",
    "Economic Issues",
    "Social Issues",
    "Age",
    "Race: American Indian or Alaska Native",
    "Race: Asian",
    "Race: Black or African American",
    "Race: Hispanic Latino or Spanish",
    "Race: Middle Eastern or Arab",
    "Race: Native Hawaiian or other Pacific Islander",
    "Race: White",
    "Race: Other",
    "Which best describes the area in which you currently live",
    "Internet access at home",
    "How often do you use the Internet to look up information about people things or ideas?",
    "How often do you use a computer for electronic communication",
    "Agent 1 - Original: Flight",
    "Eco-Friendly Option",
    "Agent 1 - User: Flight",
    "Agent 1 - Original: Rental Car",
    "Eco-Friendly Option",
    "Agent 1 - User: Rental Car",
    "Agent 1 - Original: Hotel",
    "Eco-Friendly Option",
    "Agent 1 - User: Hotel",
    "Agent 1 - Original: Dinner",
    "Eco-Friendly Option",
    "Agent 1 - User: Dinner",
    "Agent 1 - Original: Lunch",
    "Eco-Friendly Option",
    "Agent 1 - User: Lunch",
    "Agent 1 - Original: Breakfast",
    "Eco-Friendly Option",
    "Agent 1 - User: Breakfast",
    "Agent 1 - Original: Top Sights 1",
    "Eco-Friendly Option",
    "Agent 1 - User: Top Sights 1",
    "Agent 1 - Original: Top Sights 2",
    "Eco-Friendly Option",
    "Agent 1 - User: Top Sights 2",
    "Agent 1 - Original: Top Experiences 1",
    "Eco-Friendly Option",
    "Agent 1 - User: Top Experiences 1",
    "Agent 1 - Original: Public Transportation (Short)",
    "Eco-Friendly Option",
    "Agent 1 - User: Public Transportation (Short)",
    "Agent 1 - Original: Public Transportation (Long)",
    "Eco-Friendly Option",
    "Agent 1 - User: Public Transportation (Long)",
    "Agent 1 - Original: Coffee",
    "Eco-Friendly Option",
    "Agent 1 - User: Coffee",
    "Agent 1 - Original: Bakery",
    "Eco-Friendly Option",
    "Agent 1 - User: Bakery",
    "Agent 1 - Original: Night Life",
    "Eco-Friendly Option",
    "Agent 1 - User: Night Life",
    "Agent 1 - Original: Bars",
    "Eco-Friendly Option",
    "Agent 1 - User: Bars",
    "Agent 1 - Original: Groceries",
    "Eco-Friendly Option",
    "Agent 1 - User: Groceries",
    "Agent 1 - Original: Souveneirs",
    "Eco-Friendly Option",
    "Agent 1 - User: Souveneirs",
    "Agent 1 - Original: Shopping",
    "Eco-Friendly Option",
    "Agent 1 - User: Shopping",
    "Agent 1 - Original: International Phone Exchange",
    "Eco-Friendly Option",
    "Agent 1 - User: International Phone Exchange",
    "Agent 1 - Original: Currency Exchange",
    "Eco-Friendly Option",
    "Agent 1 - User: Currency Exchange",
    "Agent 1 - Original: Luggage",
    "Eco-Friendly Option",
    "Agent 1 - User: Luggage",
    "Agent 1 - Original: Day Trip",
    "Eco-Friendly Option",
    "Agent 1 - User: Day Trip",
    "Agent 1 - Original: Travel Insurance",
    "Eco-Friendly Option",
    "Agent 1 - User: Travel Insurance",
    "Agent 1 - Original: Travel Plug Adapter",
    "Eco-Friendly Option",
    "Agent 1 - User: Travel Plug Adapter",
    "Attention Check 1",
    "Agent 1: Allowed me to choose what kind of information I was getting",
    "Agent 1: Let me be in charge of getting what I wanted",
    "Agent 1: Took account of my responses to the personality assessment",
    "Agent 1: Didn't make me wait too long to get a recommendation",
    "Agent 1: Gave me the sense of being watched out for",
    "Agent 1: Felt like someone was helping me",
    "Agent 1: Felt like someone understood me",
    "Agent 1: Made me feel listened to",
    "Agent 1: Using this agent would enhance my effectiveness of choosing the best travel option",
    "Agent 1: Using this agent would make it easier for me to choose the best travel option",
    "Agent 1: Using this agent would enable me to choose a travel option more quickly",
    "Agent 1: Using this agent for my travel choices would increase my productivity",
    "Agent 1: Using this agent would improve my travel choice performance",
    "Agent 1: This agent would be useful for me to utilize while choosing travel options",
    "Agent 1: I feel this travel agent reflects who I am.",
    "Agent 1: I can identify with this agent.",
    "Agent 1: I feel a personal connection to this agent.",
    "Agent 1: I can use this agent to communicate who I am to other people.",
    "Agent 1: I think this agent could help me become the type of person I want to be.",
    "Agent 1: I consider this agent to be “me” (it reflects who I consider myself to be or the way that I want to present myself to others).",
    "Agent 1: I feel this agent suits me well.",
    "Agent 1: It is important to me that the products I use do not harm the environment.",
    "Agent 1: I consider the potential environmental impact of my actions when making many of my decisions.",
    "Agent 1: Using my personal travel agent would enable me to choose a travel option more quickly",
    "Agent 1: I am concerned about wasting the resources of our planet.",
    "Agent 1: I would describe myself as environmentally responsible.",
    "Agent 1: I am willing to be inconvenienced in order to take actions that are more environmentally friendly.",
    "Agent 2 - Original: Flight",
    "Eco-Friendly Option",
    "Agent 2 - User: Flight",
    "Agent 2 - Original: Rental Car",
    "Eco-Friendly Option",
    "Agent 2 - User: Rental Car",
    "Agent 2 - Original: Hotel",
    "Eco-Friendly Option",
    "Agent 2 - User: Hotel",
    "Agent 2 - Original: Dinner",
    "Eco-Friendly Option",
    "Agent 2 - User: Dinner",
    "Agent 2 - Original: Lunch",
    "Eco-Friendly Option",
    "Agent 2 - User: Lunch",
    "Agent 2 - Original: Breakfast",
    "Eco-Friendly Option",
    "Agent 2 - User: Breakfast",
    "Agent 2 - Original: Top Sights 1",
    "Eco-Friendly Option",
    "Agent 2 - User: Top Sights 1",
    "Agent 2 - Original: Top Sights 2",
    "Eco-Friendly Option",
    "Agent 2 - User: Top Sights 2",
    "Agent 2 - Original: Top Experiences 1",
    "Eco-Friendly Option",
    "Agent 2 - User: Top Experiences 1",
    "Agent 2 - Original: Public Transportation (Short)",
    "Eco-Friendly Option",
    "Agent 2 - User: Public Transportation (Short)",
    "Agent 2 - Original: Public Transportation (Long)",
    "Eco-Friendly Option",
    "Agent 2 - User: Public Transportation (Long)",
    "Agent 2 - Original: Coffee",
    "Eco-Friendly Option",
    "Agent 2 - User: Coffee",
    "Agent 2 - Original: Bakery",
    "Eco-Friendly Option",
    "Agent 2 - User: Bakery",
    "Agent 2 - Original: Night Life",
    "Eco-Friendly Option",
    "Agent 2 - User: Night Life",
    "Agent 2 - Original: Bars",
    "Eco-Friendly Option",
    "Agent 2 - User: Bars",
    "Agent 2 - Original: Groceries",
    "Eco-Friendly Option",
    "Agent 2 - User: Groceries",
    "Agent 2 - Original: Souveneirs",
    "Eco-Friendly Option",
    "Agent 2 - User: Souveneirs",
    "Agent 2 - Original: Shopping",
    "Eco-Friendly Option",
    "Agent 2 - User: Shopping",
    "Agent 2 - Original: International Phone Exchange",
    "Eco-Friendly Option",
    "Agent 2 - User: International Phone Exchange",
    "Agent 2 - Original: Currency Exchange",
    "Eco-Friendly Option",
    "Agent 2 - User: Currency Exchange",
    "Agent 2 - Original: Luggage",
    "Eco-Friendly Option",
    "Agent 2 - User: Luggage",
    "Agent 2 - Original: Day Trip",
    "Eco-Friendly Option",
    "Agent 2 - User: Day Trip",
    "Agent 2 - Original: Travel Insurance",
    "Eco-Friendly Option",
    "Agent 2 - User: Travel Insurance",
    "Agent 2 - Original: Travel Plug Adapter",
    "Eco-Friendly Option",
    "Agent 2 - User: Travel Plug Adapter",
    "Attention Check 2",
    "Agent 2: Allowed me to choose what kind of information I was getting",
    "Agent 2: Let me be in charge of getting what I wanted",
    "Agent 2: Took account of my responses to the personality assessment",
    "Agent 2: Didn't make me wait too long to get a recommendation",
    "Agent 2: Gave me the sense of being watched out for",
    "Agent 2: Felt like someone was helping me",
    "Agent 2: Felt like someone understood me",
    "Agent 2: Made me feel listened to",
    "Agent 2: Using this agent would enhance my effectiveness of choosing the best travel option",
    "Agent 2: Using this agent would make it easier for me to choose the best travel option",
    "Agent 2: Using this agent would enable me to choose a travel option more quickly",
    "Agent 2: Using this agent for my travel choices would increase my productivity",
    "Agent 2: Using this agent would improve my travel choice performance",
    "Agent 2: This agent would be useful for me to utilize while choosing travel options",
    "Agent 2: I feel this travel agent reflects who I am.",
    "Agent 2: I can identify with this agent.",
    "Agent 2: I feel a personal connection to this agent.",
    "Agent 2: I can use this agent to communicate who I am to other people.",
    "Agent 2: I think this agent could help me become the type of person I want to be.",
    "Agent 2: I consider this agent to be “me” (it reflects who I consider myself to be or the way that I want to present myself to others).",
    "Agent 2: I feel this agent suits me well.",
    "Agent 2: It is important to me that the products I use do not harm the environment.",
    "Agent 2: I consider the potential environmental impact of my actions when making many of my decisions.",
    "Agent 2: Using my personal travel agent would enable me to choose a travel option more quickly",
    "Agent 2: I am concerned about wasting the resources of our planet.",
    "Agent 2: I would describe myself as environmentally responsible.",
    "Agent 2: I am willing to be inconvenienced in order to take actions that are more environmentally friendly.",
    "Agent 3 - Original: Flight",
    "Eco-Friendly Option",
    "Agent 3 - User: Flight",
    "Agent 3 - Original: Rental Car",
    "Eco-Friendly Option",
    "Agent 3 - User: Rental Car",
    "Agent 3 - Original: Hotel",
    "Eco-Friendly Option",
    "Agent 3 - User: Hotel",
    "Agent 3 - Original: Dinner",
    "Eco-Friendly Option",
    "Agent 3 - User: Dinner",
    "Agent 3 - Original: Lunch",
    "Eco-Friendly Option",
    "Agent 3 - User: Lunch",
    "Agent 3 - Original: Breakfast",
    "Eco-Friendly Option",
    "Agent 3 - User: Breakfast",
    "Agent 3 - Original: Top Sights 1",
    "Eco-Friendly Option",
    "Agent 3 - User: Top Sights 1",
    "Agent 3 - Original: Top Sights 2",
    "Eco-Friendly Option",
    "Agent 3 - User: Top Sights 2",
    "Agent 3 - Original: Top Experiences 1",
    "Eco-Friendly Option",
    "Agent 3 - User: Top Experiences 1",
    "Agent 3 - Original: Public Transportation (Short)",
    "Eco-Friendly Option",
    "Agent 3 - User: Public Transportation (Short)",
    "Agent 3 - Original: Public Transportation (Long)",
    "Eco-Friendly Option",
    "Agent 3 - User: Public Transportation (Long)",
    "Agent 3 - Original: Coffee",
    "Eco-Friendly Option",
    "Agent 3 - User: Coffee",
    "Agent 3 - Original: Bakery",
    "Eco-Friendly Option",
    "Agent 3 - User: Bakery",
    "Agent 3 - Original: Night Life",
    "Eco-Friendly Option",
    "Agent 3 - User: Night Life",
    "Agent 3 - Original: Bars",
    "Eco-Friendly Option",
    "Agent 3 - User: Bars",
    "Agent 3 - Original: Groceries",
    "Eco-Friendly Option",
    "Agent 3 - User: Groceries",
    "Agent 3 - Original: Souveneirs",
    "Eco-Friendly Option",
    "Agent 3 - User: Souveneirs",
    "Agent 3 - Original: Shopping",
    "Eco-Friendly Option",
    "Agent 3 - User: Shopping",
    "Agent 3 - Original: International Phone Exchange",
    "Eco-Friendly Option",
    "Agent 3 - User: International Phone Exchange",
    "Agent 3 - Original: Currency Exchange",
    "Eco-Friendly Option",
    "Agent 3 - User: Currency Exchange",
    "Agent 3 - Original: Luggage",
    "Eco-Friendly Option",
    "Agent 3 - User: Luggage",
    "Agent 3 - Original: Day Trip",
    "Eco-Friendly Option",
    "Agent 3 - User: Day Trip",
    "Agent 3 - Original: Travel Insurance",
    "Eco-Friendly Option",
    "Agent 3 - User: Travel Insurance",
    "Agent 3 - Original: Travel Plug Adapter",
    "Eco-Friendly Option",
    "Agent 3 - User: Travel Plug Adapter",
    "Attention Check 3",
    "Agent 3: Allowed me to choose what kind of information I was getting",
    "Agent 3: Let me be in charge of getting what I wanted",
    "Agent 3: Took account of my responses to the personality assessment",
    "Agent 3: Didn't make me wait too long to get a recommendation",
    "Agent 3: Gave me the sense of being watched out for",
    "Agent 3: Felt like someone was helping me",
    "Agent 3: Felt like someone understood me",
    "Agent 3: Made me feel listened to",
    "Agent 3: Using this agent would enhance my effectiveness of choosing the best travel option",
    "Agent 3: Using this agent would make it easier for me to choose the best travel option",
    "Agent 3: Using this agent would enable me to choose a travel option more quickly",
    "Agent 3: Using this agent for my travel choices would increase my productivity",
    "Agent 3: Using this agent would improve my travel choice performance",
    "Agent 3: This agent would be useful for me to utilize while choosing travel options",
    "Agent 3: I feel this travel agent reflects who I am.",
    "Agent 3: I can identify with this agent.",
    "Agent 3: I feel a personal connection to this agent.",
    "Agent 3: I can use this agent to communicate who I am to other people.",
    "Agent 3: I think this agent could help me become the type of person I want to be.",
    "Agent 3: I consider this agent to be “me” (it reflects who I consider myself to be or the way that I want to present myself to others).",
    "Agent 3: I feel this agent suits me well.",
    "Agent 3: It is important to me that the products I use do not harm the environment.",
    "Agent 3: I consider the potential environmental impact of my actions when making many of my decisions.",
    "Agent 3: Using my personal travel agent would enable me to choose a travel option more quickly",
    "Agent 3: I am concerned about wasting the resources of our planet.",
    "Agent 3: I would describe myself as environmentally responsible.",
    "Agent 3: I am willing to be inconvenienced in order to take actions that are more environmentally friendly.",
    "Algorithms recognize that results such as search results are incomplete and automatically correct them",
    "Algorithms can develop themselves in a completely different direction from that for which they were created",
    "I can influence algorithms with my internet usage behavior",
    "The database used by an algorithm is not decisive in determining its quality",
    "When searching for a job online job offers displayed may vary from person to person despite the same search entry",
    "The use of algorithms which deliver personalized content can mean that the content you find is mostly consistent with your pre-existing opinions",
    "Algorithms are able to think like human beings",
    "Algorithms are independent of government censorship",
    "Algorithms present both chances and risks",
    "For some media companies content that is repeated regularly (e.g. traffic reports) is already written by algorithms",
    "Humans are never involved when algorithms are used",
    "Smart speaker (e.g. Alexa)",
    "Smart TV",
    "Wearable computing devices such as activity trackers and heart rate monitors",
    "Internet browsers (e.g. Internet Explorer Firefox Google Chrome)",
    "Electronic payment (credit and debit card)",
    "Cell phone towers",
    "Computer games",
    "FM radios",
    "To create weather forecasts",
    "To make product recommendations",
    "To create financial news (stock markets)",
    "To personalize advertisements",
    "Order of Agents",
    "Time Elapsed",
  ],
];

function endSurvey() {
  orderOfQuestions.at(currentInd).style.display = "none";
  followupQuestionnaires[paths[order][0]][4].style.display = "block";
  savePersonalityData();
  saveOriginalItineraryData();
}

let tmp = [];
function savePersonalityData() {
  let id = 0;
  tmp.push(id);
  tmp.push(getRadioValue("one"));
  tmp.push(getRadioValue("two"));
  tmp.push(getRadioValue("three"));
  tmp.push(getRadioValue("four"));
  tmp.push(getRadioValue("five"));
  tmp.push(getRadioValue("six"));
  tmp.push(getRadioValue("seven"));
  // deleted question 8
  tmp.push(getRadioValue("nine"));
  tmp.push(getRadioValue("ten"));
  tmp.push(getRadioValue("eleven"));
  tmp.push(getRadioValue("twelve"));
  tmp.push(getRadioValue("thirteen"));
  tmp.push(getRadioValue("fourteen"));
  tmp.push(getRadioValue("fifteen"));
  tmp.push(getRadioValue("sixteen"));

  tmp.push(getRadioValue("imageOne"));
  tmp.push(getRadioValue("imageTwo"));
  tmp.push(getRadioValue("imageThree"));
  tmp.push(getRadioValue("preferredVacation"));
  tmp.push(getRadioValue("budget"));

  tmp.push(getCheckboxValue("Outdoor activities"));
  tmp.push(getCheckboxValue("Cultural experiences"));
  tmp.push(getCheckboxValue("Relaxation"));
  tmp.push(getCheckboxValue("Adventure"));
  tmp.push(getCheckboxValue("Sports"));
  tmp.push(getCheckboxValue("History and heritage"));
  tmp.push(getCheckboxValue("Food and wine"));
  tmp.push(getCheckboxValue("Nightlife and entertainment"));
  tmp.push(getCheckboxValue("Shopping"));
  tmp.push(getCheckboxValue("Volunteer tourism"));
  tmp.push(getRadioValue("accomodation"));
  tmp.push(getRadioValue("activitylevel"));
  tmp.push(getRadioValue("culture"));
  tmp.push(getRadioValue("path"));
  tmp.push(getRadioValue("communication"));
  tmp.push(getRadioValue("language"));
  tmp.push(getRadioValue("cuisine"));
  tmp.push(getRadioValue("relaxation"));

  tmp.push(getCheckboxValue("adventuretravel"));
  tmp.push(getCheckboxValue("art&design"));
  tmp.push(getCheckboxValue("arts&crafts"));
  tmp.push(getCheckboxValue("beauty&grooming"));
  tmp.push(getCheckboxValue("books"));
  tmp.push(getCheckboxValue("cameras"));
  tmp.push(getCheckboxValue("camping"));
  tmp.push(getCheckboxValue("computers"));
  tmp.push(getCheckboxValue("cooking"));
  tmp.push(getCheckboxValue("diy"));
  tmp.push(getCheckboxValue("dogs"));
  tmp.push(getCheckboxValue("electronics"));
  tmp.push(getCheckboxValue("fallfashion"));
  tmp.push(getCheckboxValue("fashionaccessories"));
  tmp.push(getCheckboxValue("fitness"));
  tmp.push(getCheckboxValue("food&drink"));
  tmp.push(getCheckboxValue("fun&hobbies"));
  tmp.push(getCheckboxValue("giftideas"));
  tmp.push(getCheckboxValue("health&wellness"));
  tmp.push(getCheckboxValue("healthyfood"));
  tmp.push(getCheckboxValue("hiking"));
  tmp.push(getCheckboxValue("home&garden"));
  tmp.push(getCheckboxValue("homedecor"));
  tmp.push(getCheckboxValue("homeimprovement"));
  tmp.push(getCheckboxValue("interiordesign"));
  tmp.push(getCheckboxValue("kids&parenting"));
  tmp.push(getCheckboxValue("kitchens"));
  tmp.push(getCheckboxValue("makeup"));
  tmp.push(getCheckboxValue("mensfashion"));
  tmp.push(getCheckboxValue("movies&tv"));
  tmp.push(getCheckboxValue("music"));
  tmp.push(getCheckboxValue("outdooractivities"));
  tmp.push(getCheckboxValue("outdoors"));
  tmp.push(getCheckboxValue("petcare"));
  tmp.push(getCheckboxValue("pets&animals"));
  tmp.push(getCheckboxValue("photography"));
  tmp.push(getCheckboxValue("recipes"));
  tmp.push(getCheckboxValue("shoes"));
  tmp.push(getCheckboxValue("skincare"));
  tmp.push(getCheckboxValue("sport"));
  tmp.push(getCheckboxValue("strangefinds"));
  tmp.push(getCheckboxValue("style&fashion"));
  tmp.push(getCheckboxValue("technology"));
  tmp.push(getCheckboxValue("toys&games"));
  tmp.push(getCheckboxValue("travel"));
  tmp.push(getCheckboxValue("womensaccessories"));
  tmp.push(getCheckboxValue("womensfashion"));
  tmp.push(getRadioValue("products"));
  tmp.push(getRadioValue("environDecis"));
  tmp.push(getRadioValue("purchaseEviron"));
  tmp.push(getRadioValue("resources"));
  tmp.push(getRadioValue("environResp"));
  tmp.push(getRadioValue("inconvenience"));
  tmp.push(getCheckboxValue("female"));
  tmp.push(getCheckboxValue("male"));
  tmp.push(getCheckboxValue("Genderqueer, gender non-binary, or gender fluid"));
  tmp.push(getCheckboxValue("Transgender Female"));
  tmp.push(getCheckboxValue("Transgender Male"));
  tmp.push(getCheckboxValue("Prefer not to answer"));
  tmp.push(document.forms["demo"]["gender"].value);
  tmp.push(document.forms["demo"]["income"].value);
  tmp.push(getRadioValue("ladder"));
  tmp.push(getRadioValue("degree"));
  tmp.push(getRadioValue("political"));
  tmp.push(getRadioValue("economic"));
  tmp.push(getRadioValue("social"));
  tmp.push(document.forms["demo"]["age"].value);
  tmp.push(getCheckboxValue("American Indian or Alaska Native"));
  tmp.push(getCheckboxValue("Asian"));
  tmp.push(getCheckboxValue("Black or African American"));
  tmp.push(getCheckboxValue("Hispanic, Latino, or Spanish"));
  tmp.push(getCheckboxValue("Middle Eastern or Arab"));
  tmp.push(getCheckboxValue("Native Hawaiian or other Pacific Islander"));
  tmp.push(getCheckboxValue("White"));
  tmp.push(document.forms["demo"]["raceBtn8"].value);
  tmp.push(getRadioValue("residenceArea"));
  tmp.push(getRadioValue("internetAccess"));
  tmp.push(getRadioValue("internetLookup"));
  tmp.push(getRadioValue("eCommunicationUse"));
  // can just manually go through every button to get values and append to an array
}
function getEcoFriendly(name) {
  let texts = document.getElementsByName(name);
  for (var i = 0, length = texts.length; i < length; i++) {
    if (texts[i].style.opacity == 1) {
      return i;
    }
  }
  return " ";
}
// store the randomly generated option and the user selected option
function saveOriginalItineraryData() {
  tmp.push(getRadioValue("flightBtn"));
  tmp.push(getEcoFriendly("flightEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("rentalCarBtn"));
  tmp.push(getEcoFriendly("rentalCarEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("hotelBtn"));
  tmp.push(getEcoFriendly("hotelEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("dinnerBtn"));
  tmp.push(getEcoFriendly("dinnerEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("lunchBtn"));
  tmp.push(getEcoFriendly("lunchEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("breakfastBtn"));
  tmp.push(getEcoFriendly("breakfastEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("museumsBtn"));
  tmp.push(getEcoFriendly("museumsEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("marketsBtn"));
  tmp.push(getEcoFriendly("marketsEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("flamencoShowsBtn"));
  tmp.push(getEcoFriendly("flamencoShowsEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("publicTransportationShortBtn"));
  tmp.push(getEcoFriendly("publicTransportationShortEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("publicTransportationLongBtn"));
  tmp.push(getEcoFriendly("publicTransportationLongEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("coffeeBtn"));
  tmp.push(getEcoFriendly("coffeeEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("bakeryBtn"));
  tmp.push(getEcoFriendly("bakeryEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("nightLifeBtn"));
  tmp.push(getEcoFriendly("nightLifeEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("barsBtn"));
  tmp.push(getEcoFriendly("barsEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("groceriesBtn"));
  tmp.push(getEcoFriendly("groceriesEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("souveneirsBtn"));
  tmp.push(getEcoFriendly("souveneirsEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("shoppingBtn"));
  tmp.push(getEcoFriendly("shoppingEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("internationalPhoneServiceBtn"));
  tmp.push(getEcoFriendly("internationalPhoneServiceEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("currencyExchangeBtn"));
  tmp.push(getEcoFriendly("currencyExchangeEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("luggageBtn"));
  tmp.push(getEcoFriendly("luggageEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("dayTripBtn"));
  tmp.push(getEcoFriendly("dayTripEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("travelInsuranceBtn"));
  tmp.push(getEcoFriendly("travelInsuranceEcoLogo"));
  tmp.push("");
  tmp.push(getRadioValue("travelPlugAdapterBtn"));
  tmp.push(getEcoFriendly("travelPlugAdapterEcoLogo"));
  tmp.push("");
}

function saveUserItineraryData() {
  let len = tmp.length;
  let arr = [
    "flight",
    "rentalCar",
    "hotel",
    "dinner",
    "lunch",
    "breakfast",
    "museums",
    "markets",
    "flamencoShows",
    "publicTransportationShort",
    "publicTransportationLong",
    "coffee",
    "bakery",
    "nightLife",
    "bars",
    "groceries",
    "souveneirs",
    "shopping",
    "internationalPhoneService",
    "currencyExchange",
    "luggage",
    "dayTrip",
    "travelInsurance",
    "travelPlugAdapter",
  ];
  let num = arr.length; // number of itinerary questions
  for (let i = 0; i < num; i++) {
    tmp[len - 3 * num + (3 * i + 1)] = getRadioValue(arr[i] + "Btn");
  }
}

function saveQuestionnaireData() {
  tmp.push(
    getRadioValue("Allowed me to choose what kind of information I was getting")
  );
  tmp.push(getRadioValue("Let me be in charge of getting what I wanted"));
  tmp.push(
    getRadioValue("Took account of my responses to the personality assessment")
  );
  tmp.push(
    getRadioValue("Didn't make me wait too long to get a recommendation")
  );
  tmp.push(getRadioValue("Gave me the sense of being watched out for"));
  tmp.push(getRadioValue("Felt like someone was helping me"));
  tmp.push(getRadioValue("Felt like someone understood me"));
  tmp.push(getRadioValue("Made me feel listened to"));
  tmp.push(
    getRadioValue(
      "would enhance my effectiveness of choosing the best travel option"
    )
  );
  tmp.push(
    getRadioValue(
      "would make it easier for me to choose the best travel option"
    )
  );
  tmp.push(
    getRadioValue("would enable me to choose a travel option more quickly")
  );
  tmp.push(getRadioValue("would increase my productivity"));
  tmp.push(getRadioValue("would improve my travel choice performance"));
  tmp.push(
    getRadioValue(
      "would be useful for me to utilize while choosing travel options"
    )
  );
  tmp.push(getRadioValue("reflects who I am"));
  tmp.push(getRadioValue("I can identify with my agent"));
  tmp.push(getRadioValue("I feel a personal connection to my agent"));
  tmp.push(
    getRadioValue("I can use my agent to communicate who I am to other people")
  );
  tmp.push(
    getRadioValue(
      "I think my agent could help me become the type of person I want to be"
    )
  );
  tmp.push(getRadioValue("I consider my agent to be me"));
  tmp.push(getRadioValue("My agent suits me well."));
  tmp.push(
    getRadioValue(
      "It is important to me that the products I use do not harm the environment."
    )
  );
  tmp.push(
    getRadioValue(
      "I consider the potential environmental impact of my actions when making many of my decisions."
    )
  );
  tmp.push(
    getRadioValue(
      "My purchase habits are affected by my concern for our environment."
    )
  );
  tmp.push(
    getRadioValue("I am concerned about wasting the resources of our planet.")
  );
  tmp.push(
    getRadioValue("I would describe myself as environmentally responsible.")
  );
  tmp.push(
    getRadioValue(
      "I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
    )
  );
}

function saveCsv() {
  let csvContent = "";
  tmp.push(order + 1);
  tmp.push(endTimer());
  csv_arr.push(tmp);
  csv_arr.forEach((row) => {
    csvContent += row.join(",") + "\n";
  });
  //uploadCsvServer(csvContent);
  /*
  fetch("http://127.0.0.1:5000/writefile", {
    method: "POST",
    body: csvContent,
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
    });
    */
  fetch("http://127.0.0.1:5000/writefile", {
    method: "POST",
    body: csvContent,
  });
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  const objUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", objUrl);
  link.setAttribute("download", "data/File.csv");
  link.textContent = "Click to Download";
  end.append(link);
  //link.click();
}

const uploadCsvFileServer = async () => {
  console.log("yes");
  let csvFile = document.getElementById("fileInput");
  const formData = new FormData();
  formData.append("file", csvFile); // Assuming csvFile is a File or Blob object
  const response = await fetch("http://localhost:3001/upload", {
    method: "POST",
    body: formData,
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  // Handle the response in case of an error
};

function isNumber(x) {
  if (isNaN(x)) {
    return false;
  }
  return true;
}

function getRadioValue(name) {
  let radios = document.getElementsByName(name);
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio
      return radios[i].value;

      // only one radio can be logically checked, don't check the rest
      break;
    }
  }
  return "Empty";
}

function getCheckboxValue(name) {
  let checkboxes = document.getElementsByName(name);
  if (checkboxes[0].checked) {
    return 1;
  }
  return 0;
}

function clearRadioData(name) {
  let radios = document.getElementsByName(name);
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio
      return (radios[i].checked = false);
    }
  }
  return;
}

function clearQuestionnaireData() {
  clearRadioData("Allowed me to choose what kind of information I was getting");
  clearRadioData("Let me be in charge of getting what I wanted");
  clearRadioData("Took account of my responses to the personality assessment");
  clearRadioData("Didn't make me wait too long to get a recommendation");
  clearRadioData("Gave me the sense of being watched out for");
  clearRadioData("Felt like someone was helping me");
  clearRadioData("Felt like someone understood me");
  clearRadioData("Made me feel listened to");
  clearRadioData("attentionCheck");
  clearRadioData(
    "would enhance my effectiveness of choosing the best travel option"
  );
  clearRadioData(
    "would make it easier for me to choose the best travel option"
  );
  clearRadioData("would enable me to choose a travel option more quickly");
  clearRadioData("would increase my productivity");
  clearRadioData("would improve my travel choice performance");
  clearRadioData(
    "would be useful for me to utilize while choosing travel options"
  );
  clearRadioData("reflects who I am");
  clearRadioData("I can identify with my agent");
  clearRadioData("I feel a personal connection to my agent");
  clearRadioData("I can use my agent to communicate who I am to other people");
  clearRadioData(
    "I think my agent could help me become the type of person I want to be"
  );
  clearRadioData("I consider my agent to be me");
  clearRadioData("My agent suits me well.");
  clearRadioData(
    "It is important to me that the products I use do not harm the environment."
  );
  clearRadioData(
    "I consider the potential environmental impact of my actions when making many of my decisions."
  );
  clearRadioData(
    "My purchase habits are affected by my concern for our environment."
  );
  clearRadioData("I am concerned about wasting the resources of our planet.");
  clearRadioData("I would describe myself as environmentally responsible.");
  clearRadioData(
    "I am willing to be inconvenienced in order to take actions that are more environmentally friendly."
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function randomizeImages() {
  let tmp = [
    "City.jpg",
    "Horses.png",
    "Orlando.jpeg",
    "Snowy.jpeg",
    "Tropical.jpeg",
  ];
  shuffle(tmp);
  document.getElementById("imageAOne").src = "Photos/Hotels/" + tmp[0];
  document.getElementById("imageATwo").src = "Photos/Hotels/" + tmp[1];
  document.getElementById("imageAThree").src = "Photos/Hotels/" + tmp[2];
  document.getElementById("imageAFour").src = "Photos/Hotels/" + tmp[3];
  document.getElementById("imageAFive").src = "Photos/Hotels/" + tmp[4];
  document.getElementById("imageAOneBtn").value = tmp[0].substring(
    0,
    tmp[0].indexOf(".")
  );
  document.getElementById("imageATwoBtn").value = tmp[1].substring(
    0,
    tmp[1].indexOf(".")
  );
  document.getElementById("imageAThreeBtn").value = tmp[2].substring(
    0,
    tmp[2].indexOf(".")
  );
  document.getElementById("imageAFourBtn").value = tmp[3].substring(
    0,
    tmp[3].indexOf(".")
  );
  document.getElementById("imageAFiveBtn").value = tmp[4].substring(
    0,
    tmp[4].indexOf(".")
  );

  let tmp1 = [
    "Beach.jpeg",
    "cathedral.jpg",
    "City.jpeg",
    "Mountains.jpeg",
    "Museum.jpeg",
  ];
  shuffle(tmp1);
  document.getElementById("imageBOne").src = "Photos/Afternoon/" + tmp1[0];
  document.getElementById("imageBTwo").src = "Photos/Afternoon/" + tmp1[1];
  document.getElementById("imageBThree").src = "Photos/Afternoon/" + tmp1[2];
  document.getElementById("imageBFour").src = "Photos/Afternoon/" + tmp1[3];
  document.getElementById("imageBFive").src = "Photos/Afternoon/" + tmp1[4];
  document.getElementById("imageBOneBtn").value = tmp1[0].substring(
    0,
    tmp1[0].indexOf(".")
  );
  document.getElementById("imageBTwoBtn").value = tmp1[1].substring(
    0,
    tmp1[1].indexOf(".")
  );
  document.getElementById("imageBThreeBtn").value = tmp1[2].substring(
    0,
    tmp1[2].indexOf(".")
  );
  document.getElementById("imageBFourBtn").value = tmp1[3].substring(
    0,
    tmp1[3].indexOf(".")
  );
  document.getElementById("imageBFiveBtn").value = tmp1[4].substring(
    0,
    tmp1[4].indexOf(".")
  );

  let tmp2 = [
    "Cozy.jpg",
    "Red.jpeg",
    "SportsBar.jpg",
    "Sunset.jpg",
    "Tacos.jpg",
  ];
  shuffle(tmp1);
  document.getElementById("imageCOne").src = "Photos/Restaurants/" + tmp2[0];
  document.getElementById("imageCTwo").src = "Photos/Restaurants/" + tmp2[1];
  document.getElementById("imageCThree").src = "Photos/Restaurants/" + tmp2[2];
  document.getElementById("imageCFour").src = "Photos/Restaurants/" + tmp2[3];
  document.getElementById("imageCFive").src = "Photos/Restaurants/" + tmp2[4];
  document.getElementById("imageCOneBtn").value = tmp2[0].substring(
    0,
    tmp2[0].indexOf(".")
  );
  document.getElementById("imageCTwoBtn").value = tmp2[1].substring(
    0,
    tmp2[1].indexOf(".")
  );
  document.getElementById("imageCThreeBtn").value = tmp2[2].substring(
    0,
    tmp2[2].indexOf(".")
  );
  document.getElementById("imageCFourBtn").value = tmp2[3].substring(
    0,
    tmp2[3].indexOf(".")
  );
  document.getElementById("imageCFiveBtn").value = tmp2[4].substring(
    0,
    tmp2[4].indexOf(".")
  );
}

function randomizeQuestions() {
  let vacationTypeText = [
    [
      "Adventure: ",
      "Activities such as hiking, skiing, or whitewater rafting.",
    ],
    ["Beach: ", "Relaxing on the sand, swimming, and enjoying water sports."],
    [
      "City Break: ",
      "Exploring urban areas, visiting museums and galleries, and dining in local restaurants.",
    ],
    [
      "Cultural: ",
      "Learning about different cultures, visiting historical sites and monuments, and experiencing local traditions.",
    ],
    [
      "Family: ",
      "Activities suitable for all ages, such as theme parks, water parks, or camping.",
    ],
    [
      "Luxury: ",
      "Staying in upscale hotels, indulging in spa treatments, and enjoying high-end dining.",
    ],
    [
      "Romantic: ",
      "Experiencing romantic activities such as fine dining, sunset walks, and couples' massages.",
    ],
    [
      "Rural: ",
      "Enjoying the countryside, hiking or biking, and staying in small towns or bed and breakfasts.",
    ],
  ];
  shuffle(vacationTypeText);

  for (let i = 1; i <= 8; i++) {
    let tmp = document.getElementsByName("preferredVacation" + i);
    tmp[0].innerHTML =
      "<strong>" +
      vacationTypeText[i - 1][0] +
      "</strong>" +
      vacationTypeText[i - 1][1];
    //tmp[1].innerHTML = vacationTypeText[i - 1][1];
    document.getElementById("preferredVacationBtn" + i).value =
      vacationTypeText[i - 1][0].substring(
        0,
        vacationTypeText[i - 1][0].indexOf(":")
      );
  }

  let activitiesText = [
    [
      "Outdoor activities: ",
      "hiking, biking, skiing, swimming, and other outdoor activities.",
    ],
    [
      "Cultural experiences: ",
      "Visiting museums, attending concerts, theater shows or festivals.",
    ],
    [
      "Relaxation: ",
      "Lounging on the beach, enjoying a spa day, and leisurely sightseeing.",
    ],
    [
      "Adventure: ",
      "Bungee jumping, zip-lining, rock climbing, and other thrilling activities.",
    ],
    [
      "Sports: ",
      "Golfing, surfing, skiing, tennis, and other sports activities.",
    ],
    [
      "History and heritage: ",
      "Visiting historical sites, monuments, and landmarks.",
    ],
    [
      "Food and wine: ",
      "Tasting local cuisine, visiting wineries or breweries, and cooking classes.",
    ],
    [
      "Nightlife and entertainment: ",
      "Exploring bars, clubs, and other entertainment venues.",
    ],
    [
      "Shopping: ",
      "Visiting markets, malls, and boutiques, and buying souvenirs.",
    ],
    [
      "Volunteer tourism: ",
      "Participating in volunteer activities such as teaching or conservation work.",
    ],
  ];
  shuffle(activitiesText);
  for (let i = 1; i <= 10; i++) {
    let tmp = document.getElementsByName("outdooractivities" + i);
    tmp[0].innerHTML =
      "<strong>" +
      activitiesText[i - 1][0] +
      "</strong>" +
      activitiesText[i - 1][1];
    //tmp[1].innerHTML = activitiesText[i - 1][1];
    document.getElementById("outdooractivitiesBtn" + i).name = activitiesText[
      i - 1
    ][0].substring(0, activitiesText[i - 1][0].indexOf(":"));
  }

  let accomodationText = [
    "Hotel",
    "Resort",
    "Airbnb",
    "Vacation Rental",
    "Camping",
  ];
  shuffle(accomodationText);
  for (let i = 1; i <= 5; i++) {
    let tmp = document.getElementById("accomodation" + i);
    tmp.innerHTML = accomodationText[i - 1];
    tmp = document.getElementById("accomodationBtn" + i);
    tmp.value = accomodationText[i - 1];
  }

  let communicationText = [
    "Phone",
    "Email",
    "Social media",
    "Messaging apps",
    "Mail",
  ];
  shuffle(communicationText);
  for (let i = 1; i <= 5; i++) {
    let tmp = document.getElementById("communication" + i);
    tmp.innerHTML = communicationText[i - 1];
    tmp = document.getElementById("communicationBtn" + i);
    tmp.value = communicationText[i - 1];
  }

  let cuisineText = [
    [
      "Local cuisine: ",
      "I prefer to try the traditional dishes and local specialties of the destination I'm visiting.",
    ],
    [
      "Western cuisine: ",
      "I prefer familiar dishes and foods that are similar to what I eat at home.",
    ],
    [
      "Vegetarian/vegan cuisine: ",
      "I prefer plant-based dishes and seek out vegetarian/vegan options when traveling.",
    ],
    ["Seafood cuisine: ", "I love fresh seafood and seafood-based dishes."],
    [
      "Fusion cuisine: ",
      "I enjoy trying unique combinations of different cuisines and flavors.",
    ],
    [
      "Street food: ",
      "I prefer to try local foods from street vendors and food markets.",
    ],
  ];
  shuffle(cuisineText);
  for (let i = 1; i <= 6; i++) {
    let tmp = document.getElementsByName("cuisine" + i);
    tmp[0].innerHTML =
      "<strong>" + cuisineText[i - 1][0] + "</strong>" + cuisineText[i - 1][1];
    //tmp[1].innerHTML = cuisineText[i - 1][1];
    document.getElementById("cuisineBtn" + i).value = cuisineText[
      i - 1
    ][0].substring(0, cuisineText[i - 1][0].indexOf(":"));
  }
}

// for testing values
function displayRadioValue(buttonName) {
  var ele = document.getElementsByName(buttonName);

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) alert(ele[i].value);
  }
}

function showEcoLogo(name) {
  let tmp = Math.floor(Math.random() * 4);
  for (let i = 0; i < 4; i++) {
    document.getElementsByName(name)[i].style.opacity = 0;
  }
  document.getElementsByName(name)[tmp].style.opacity = 1;
}

// not used
function showCheckBox(name) {
  let tmp = Math.floor(Math.random() * 4);
  document.getElementsByName(name)[tmp].src =
    "Photos/Itinerary/checked checkbox.jpg";
}

// not used
function randomizeItineraryDescription(name) {
  let phrase1 = ["Red", "Yellow", "Blue", "Green"];
  let phrase2 = ["Ball", "Square", "Block", "Oval"];
  let phrase3 = ["Boy", "Girl", "Dad", "Mom"];
  shuffle(phrase1);
  shuffle(phrase2);
  shuffle(phrase3);
  for (let i = 0; i < 4; i++) {
    let desc = "";
    desc += phrase1[0];
    desc += phrase2[0];
    desc += phrase3[0];
    phrase1.shift();
    phrase2.shift();
    phrase3.shift();
    document.getElementsByName(name)[i].innerHTML = desc;
  }
}

// not used
function randomizeReview(name) {
  let phrase1 = ["Red", "Yellow", "Blue", "Green"];
  let phrase2 = ["Ball", "Square", "Block", "Oval"];
  let phrase3 = ["Boy", "Girl", "Dad", "Mom"];
  shuffle(phrase1);
  shuffle(phrase2);
  shuffle(phrase3);
  for (let i = 0; i < 4; i++) {
    let desc = "Top Review: ";
    desc += phrase1[0];
    desc += phrase2[0];
    desc += phrase3[0];
    phrase1.shift();
    phrase2.shift();
    phrase3.shift();
    document.getElementsByName(name)[i].innerHTML = desc;
  }
}

// not used
function randomizeItineraryQuestions(className) {
  recommendation = $("." + className);

  for (var i = 0; i < recommendation.length; i++) {
    var target = Math.floor(Math.random() * recommendation.length - 1) + 1;
    var target2 = Math.floor(Math.random() * recommendation.length - 1) + 1;
    recommendation.eq(target).before(recommendation.eq(target2));
  }
}

let features = {
  flight: [
    [
      "Title",
      ["Emirates", "United Airlines", "Air France", "Turkish Airlines"],
    ],
    ["Stop", ["1 stop", "1 stop", "2 stops", "2 stops"]],
    ["Price", ["$$$", "$$", "$$$", "$$"]],
    [
      "Flights",
      [
        "17h 03m\nSBA-MAD\n22h 08m\nMAD-SBA",
        "17h 03m\nSBA-MAD\n19h 21m\nMAD-SBA",
        "18h 35m\nSBA-MAD\n22h 08m\nMAD-SBA",
        "18h 35m\nSBA-MAD\n19h 21m\nMAD-SBA",
      ],
    ],
  ],
  rentalCar: [
    ["Title", ["Firefly", "Recordgo", "Enterprise", "Alamo"]],
    [
      "Type",
      [
        "Fiat 500 or similar Mini",
        "Toyota Corolla or similar Economy",
        "Toyota Corolla or similar Economy",
        "Fiat 500 or similar Mini",
      ],
    ],
    ["Seats", ["4", "5", "4", "5"]],
    ["Price", ["$", "$$", "$", "$$"]],
  ],
  hotel: [
    [
      "Title",
      [
        "The Prinicipal Madrid Hotel",
        "NH Collection Madrid Abascal Hotel",
        "Madrid Marriott Auditorium",
        "Eurostars Madrid Tower",
      ],
    ],
    ["Stars", ["4.7", "4.8", "4.9", "4.8"]],
    ["Free Wifi", ["Yes", "Yes", "No", "No"]],
    ["Price", ["$$$", "$$", "$$$", "$$"]],
  ],
  dinner: [
    [
      "Title",
      ["El Social", "Dos Cielos Madrid", "Taberna El Sur", "CEBO Madrid"],
    ],
    [
      "Description",
      [
        "Global flavors",
        "Rustic former stables",
        "Buzzing, colorful spot",
        "Strikingly designed space",
      ],
    ],
    ["Price", ["$$", "$$", "$", "$$$"]],
    ["Stars", ["4.9", "4.9", "5.0", "5.0"]],
  ],
  lunch: [
    ["Title", ["Moratin", "Hielo y Cabron", "La Rollerie", "Juana La Loca"]],
    [
      "Description",
      [
        "Renowned bistro & wine bar",
        "Hotel bar & restaurant",
        "Spanish fusion",
        "Farm-to-table local fare",
      ],
    ],
    ["Price", ["$$", "$", "$$", "$"]],
    ["Stars", ["4.9", "4.7", "4.7", "4.8"]],
  ],
  breakfast: [
    [
      "Title",
      ["Carmencita Brunch", "Zenith Brunch", "Normada Cafe", "Coco House"],
    ],
    [
      "Description",
      [
        "Gluten-free brunch favorites",
        "Chill, brick-lined space",
        "Laid-back choice",
        "Vegan shakes and snacks",
      ],
    ],
    ["Price", ["$$", "$", "$$", "$$"]],
    ["Stars", ["4.9", "4.8", "4.8", "4.7"]],
  ],
  museums: [
    [
      "Title",
      [
        "Museo Nacional del Prado",
        "Museo Nacional Centro de Arte Reina Sofía",
        "Museo Nacional Thyssen-Bornemisza",
        "Museo Sorolla",
      ],
    ],
    [
      "Description",
      [
        "World-class European art collection",
        "One of the world’s largest museums dedicated to modern art",
        "Pieces from the likes of Dalí, El Greco, Monet, Picasso, and Rembrandt",
        "The most important museum in the world for European painting",
      ],
    ],
    ["Suggested duration", ["4h00m", "2h00m", "3h00m", "3h00m"]],
    ["Price", ["$$", "$", "$$$", "$"]],
  ],
  markets: [
    [
      "Title",
      [
        "Mercado Ildefonso",
        "Mercado San Miguel",
        "Mercado de la Paz",
        "Mercado San Antón",
      ],
    ],
    [
      "Description",
      [
        "Food market by day, youth hotspot by night",
        "Covered market offering local food",
        "Known for its seafood, fresh produce, and meats from local merchants",
        "Very modern food market situated in Madrid’s most vibrant neighbourhood",
      ],
    ],
    ["Suggested duration", ["2h00m", "1h00m", "2h00m", "1h30m"]],
    ["Price", ["$$", "$$", "$", "$"]],
  ],
  flamencoShows: [
    [
      "Title",
      [
        "Tablao Flamenco 1911",
        "Cardamomo",
        "Casa Patas",
        "Corral de la Morería",
      ],
    ],
    [
      "Description",
      [
        "This legendary flamenco performance will leave you speechless with the careful decoration including Andalusian murals, wooden arches, and polychrome tiles",
        "In this performance, artists are capable of generating a brutal and wild energy that connects with the audience and is different in each of the sessions",
        "More than thirty years of work and dedication guarantee the quality of the flamenco show",
        "Each week a different show with new artists, who keep the flame of flamenco alive and promote the cult of this art",
      ],
    ],
    [
      "Top Review",
      [
        "Such an iconic experience our family will never forget",
        "Great way to understand the city, an unforgettable performance.",
        "Made me want to start taking Flamenco lessons! A truly memorable performance",
        "So fun and relaxing, the absolute perfect summer activity",
      ],
    ],
    ["Price", ["$$$", "$$$", "$$", "$$"]],
  ],
  publicTransportationShort: [
    ["Title", ["Taxi", "CiudadBici", "Bolt", "MotoRental"]],
    ["Duration", ["0h15m", "0h30m", "0h20m", "0h10m"]],
    ["Stars", ["3.9", "3.5", "3.4", "3.6"]],
    ["Price", ["$", "$$", "$", "$$"]],
  ],
  publicTransportationLong: [
    ["Title", ["Madrid Autobus", "Eurail", "M Tram", "Madrid Metro"]],
    ["Business", ["Medium", "Busy", "Busy", "Not Busy"]],
    ["Duration", ["0h45m", "0h25m", "0h30m", "0h25m"]],
    ["Price", ["$", "$$", "$$", "$"]],
  ],
  coffee: [
    [
      "Title",
      [
        "Casa Mina",
        "La Malloquina",
        "Café de la Luz",
        "Antigua Pasteleria del Pozo",
      ],
    ],
    [
      "Description",
      [
        "Best coffee in Madrid",
        "Madrid's oldest family-owned coffee shop",
        "Infinite variety of coffee combinations",
        "Farm-to-table coffee shop",
      ],
    ],
    ["Stars", ["4.8", "4.6", "4.7", "4.9"]],
    ["Price", ["$", "$$", "$", "$$"]],
  ],
  bakery: [
    ["Title", ["Santa Eulalia", "El Riojano", "La Duquesita", "Antigua"]],
    [
      "Description",
      [
        "Modern cafe-bakery",
        "Ornate 19th-century bakery",
        "Cakes & desserts to eat in or take away",
        "Artisanal cakes & Spanish pastries",
      ],
    ],
    ["Stars", ["4.8", "4.5", "4.6", "4.7"]],
    ["Price", ["$", "$$", "$", "$$"]],
  ],
  nightLife: [
    ["Title", ["Club Masaña", "Cazador", "Bendito", "Cibeles Night Club"]],
    [
      "Description",
      [
        "Madrid's newest club",
        "Dance bar offering karaoke",
        "Rooftop bar",
        "Celebrity hot-spot",
      ],
    ],
    ["DJ", ["Chris Collins", "Juan Pena", "Lucas Silva", "Calvin Harris"]],
    ["Hours", ["10pm-8am", "9pm-5am", "8pm-3am", "90pm-9am"]],
  ],
  bars: [
    [
      "Title",
      [
        "Eden de Huertes",
        "Pub La Via Lactea",
        "La Fontana de Oro",
        "Ficus Bar",
      ],
    ],
    [
      "Description",
      [
        "Funky retro coctails",
        "Upbeat lounge offering drinks",
        "Historic tavern",
        "Fashionable locale serving cocktails",
      ],
    ],
    ["Stars", ["4.7", "4.8", "4.9", "4.8"]],
    ["Price", ["$$", "$$", "$", "$"]],
  ],
  groceries: [
    ["Title", ["El Mercado Principal", "Juemarca", "Carrefour", "Mercadona"]],
    [
      "Description",
      [
        "Local farmers' market",
        "Convenience store",
        "European chain",
        "Oldest grocery store in Spain",
      ],
    ],
    ["Size", ["Large", "Medium", "Small", "Medium"]],
    ["Price", ["$$", "$", "$", "$$"]],
  ],
  souveneirs: [
    [
      "Title",
      ["Souveneirs Madrid", "El Local", "Souveneirs El Angel", "Adios Madrid"],
    ],
    ["Stars", ["4.8", "4.7", "4.6", "4.7"]],
    ["Distance from Center", ["0.4mi", "0.2mi", "0.3mi", "0.1mi"]],
    ["Price", ["$$", "$$", "$", "$"]],
  ],
  shopping: [
    ["Title", ["Ekseption 2", "COLCOL", "Vintology", "La Integral"]],
    ["Stars", ["4.9", "4.8", "4.7", "4.8"]],
    [
      "Description",
      [
        "High quality designer items",
        "Charming craft boutique",
        "20th century second-hand store",
        "One of a kind merchandise",
      ],
    ],
    ["Price", ["$$$", "$$", "$$", "$"]],
  ],
  internationalPhoneService: [
    ["Title", ["Arialo", "TIM", "Vodafone", "Yoigo"]],
    [
      "Description",
      [
        "E-SIM via App",
        "Installable Card",
        "Installable Card",
        "Installable Card",
      ],
    ],
    ["Reach", ["Spain only", "All of EU", "Spain only", "All of EU"]],
    ["Data", ["5GB daily", "Unlimited Data", "10GB daily", "5GB daily"]],
  ],
  currencyExchange: [
    [
      "Title",
      ["Eurostar", "Santander", "Banco Bilbao Vizcaya Argentaria", "CitiBank"],
    ],
    [
      "Fee",
      ["International Card Fee", "No Fee", "International Card Fee", "No Fee"],
    ],
    ["Availability", ["All of EU", "All of EU", "Spain only", "International"]],
    ["Stars", ["4.6", "4.5", "4.5", "4.4"]],
  ],
  luggage: [
    ["Title", ["July", "Tumi", "Monos", "Aleon"]],
    ["Shipping", ["2-day", "4-5 days", "4-5 days", "2-day"]],
    ["Price", ["$$", "$$", "$", "$$$"]],
    [
      "Top Review",
      [
        "This is exactly what I wanted; the perfect size to take on airplanes (and cruises) that can either be rolled or used as a backpack.",
        "Great quality bag, excellent space allocation within the multiple zippers. Feels robust but not too heavy.",
        "This set is such good quality for such an amazing price, it can't be beat. It really feels like it will last us many years to come amd i can't wait to use it on our next trip!",
        "It’s lightweight, excellent to maneuver around. With all the added extras, no need to worry about battery life when you have Portable charger inside the case.",
      ],
    ],
  ],
  dayTrip: [
    ["Title", ["Toledo", "Avila", "Cuenca", "Segovia"]],
    ["Price", ["$$$", "$$", "$$$", "$$"]],
    ["Distance", ["50mi", "100mi", "75mi", "40mi"]],
    ["Suggested Duration", ["15h00m", "8h00m", "12h00m", "10h00m"]],
  ],
  travelInsurance: [
    [
      "Title",
      ["Allianz Travel", "American Express", "InsureMy Trip", "Squaremouth"],
    ],
    ["Price", ["$$", "$", "$$", "$"]],
    ["Coverage", ["Complete", "Hotel & flight", "Hotel & flight", "Complete"]],
    ["Stars", ["4.2", "4.3", "4.1", "4.2"]],
  ],
  travelPlugAdapter: [
    ["Title", ["Basics European Power", "E-blue Adapter", "TESSAN", "Vintar"]],
    ["Price", ["$", "$", "$$", "$$"]],
    [
      "Top Review",
      [
        "This was very helpful for our trip to France. You can charge more than one device at the time",
        "Just bought this and promptly took it overseas and used it in Finland and Croatia. Terrific size, ease, use. Fantastic product",
        "Works as expected. A little bulky to pack due to prongs but not much can be done about that.",
        "This adaptor has been a lifesaver for all of our trips, it works absolutely everywhere",
      ],
    ],
    [
      "Shipping",
      [
        "2 business days",
        "4-5 business days",
        "4-5 business days",
        "2 business days",
      ],
    ],
  ],
};
function randomizeItineraryFeatures() {
  for (let className in features) {
    if (className in features) {
      //randomize features[className] three features
      let btn = className + "Btn";
      let title = className + "Title";
      let feat1 = className + "Feature1";
      let feat2 = className + "Feature2";
      let feat3 = className + "Feature3";
      for (let i = 0; i < 4; i++) {
        shuffle(features[className][i][1]);
      }
      for (let i = 0; i < 4; i++) {
        document.getElementsByName(btn)[i].value = i; // use features[className][0][1][i] to get the titles
        document.getElementsByName(title)[i].innerHTML =
          features[className][0][1][i];
        document.getElementsByName(feat1)[i].innerHTML =
          features[className][1][0] + ": " + features[className][1][1][i];
        document.getElementsByName(feat2)[i].innerHTML =
          features[className][2][0] + ": " + features[className][2][1][i];
        document.getElementsByName(feat3)[i].innerHTML =
          features[className][3][0] + ": " + features[className][3][1][i];
      }
    }
    randomSelectRadio(className);
    showEcoLogo(className + "EcoLogo");
  }
}

function instructionsBtn1() {
  personalAgentInstructions.style.display = "none";
  generalAgentInstructions.style.display = "none";
  controlAgentInstructions.style.display = "none";
  followupQuestionnaires[paths[order][followupCount - 1]][8].style.display =
    "block";
}

function instructionsBtn() {
  personalAgentInstructions2.style.display = "none";
  generalAgentInstructions2.style.display = "none";
  controlAgentInstructions2.style.display = "none";
  attentionCheck.style.display = "block";
  window.scroll(0, 0);
}

function attentionCheckBtn() {
  let selectedValue = getRadioValue("attentionCheck");

  if (selectedValue == "Empty" || selectedValue == null) {
    alert("Please select an option");
  } else if (curAgent == selectedValue) {
    attentionCheck.style.display = "none";
    correctAttentionCheck.style.display = "block";
    tmp.push("Correct");
  } else {
    attentionCheck.style.display = "none";
    incorrectAttentionCheck.style.display = "block";
    tmp.push("Wrong");
  }
}

function attentionCheckBtn2() {
  agentHeader.style.display = "block";
  flight.style.display = "block";
  correctAttentionCheck.style.display = "none";
  incorrectAttentionCheck.style.display = "none";
}

const test = async () => {
  const response = await fetch("http://localhost:4000/api/data/");
  const json = await response.json();

  if (response.ok) {
    userIdSpan.textContent = json[0].totalUsers;
    return json;
  }
};

let data = null;
const getData = async () => {
  const response = await fetch("http://localhost:4000/api/data/");
  const json = await response.json();

  if (response.ok) {
    data = json;
    console.log(json);
    return json;
  }
};

const updatePaths = async (path) => {
  const response = await fetch("http://localhost:4000/api/data/" + path, {
    method: "POST",
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
};

const updateUsers = async () => {
  const response = await fetch("http://localhost:4000/api/data/", {
    method: "POST",
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
};

let start = null;
function startTimer() {
  start = Date.now();
  date = new Date(start).toDateString();
  tmp.push(date);
}

let timeElapsed = null;
function endTimer() {
  timeElapsed = Date.now() - start;
  return msToTime(timeElapsed);
}

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
