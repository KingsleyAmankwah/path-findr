// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON data in request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define the available fields and their scores
const fields = {
  Engineering: 0,
  BusinessAnalysis: 0,
  Medicine: 0,
  Art: 0,
  SocialSciences: 0,
  Humanities: 0,
  InformationTechnology: 0,
  NotSure: 0,
};

// Function to calculate the top three fields
function calculateTopFields(surveyResponse) {
    const surveyFields = { ...fields };
  
    // Step 1: Count the responses
    for (const question in surveyResponse) {
      const selectedField = surveyResponse[question];
      if (surveyFields[selectedField] !== undefined) {
        surveyFields[selectedField] += 1;
      }
    }
  
    // Step 2: Sort the fields by counts in descending order
    const sortedFields = Object.keys(surveyFields).sort((a, b) => surveyFields[b] - surveyFields[a]);
  
    // Step 3: Handle "Not Sure"
    if (sortedFields[0] === 'Not Sure') {
      // If "Not Sure" is the highest count, randomize the order
      const notSureIndex = sortedFields.indexOf('Not Sure');
      if (notSureIndex !== 0) {
        // Swap "Not Sure" with the first element
        [sortedFields[0], sortedFields[notSureIndex]] = [sortedFields[notSureIndex], sortedFields[0]];
      }
    }
  
    // Step 4: Determine the top three fields
    const topThreeFields = sortedFields.slice(0, 3);
  
    return topThreeFields;
  }
  

  

// Route for taking the survey
app.get('/take-survey', (req, res) => {
  // An HTML form to display the survey questions
  const surveyForm = `
  <form action="/submit-survey" method="POST">
  <p>1. Which of these subjects do you enjoy the most in school?</p>
  <input type="radio" name="surveyResponse[q1]" value="Engineering"> Physics<br>
  <input type="radio" name="surveyResponse[q1]" value="Business Analysis"> Business Studies<br>
  <input type="radio" name="surveyResponse[q1]" value="Medicine"> Biology<br>
  <input type="radio" name="surveyResponse[q1]" value="Art"> Visual Arts<br>
  <input type="radio" name="surveyResponse[q1]" value="SocialSciences"> Social Studies<br>
  <input type="radio" name="surveyResponse[q1]" value="Humanities"> Literature<br>
  <input type="radio" name="surveyResponse[q1]" value="Information Technology"> ICT or Elective IT<br>
  <input type="radio" name="surveyResponse[q1]" value="NotSure"> Not Sure<br>

  <p>2. Which of these skills do you think you excel at?</p>
  <input type="radio" name="surveyResponse[q2]" value="Engineering"> Problem-solving<br>
  <input type="radio" name="surveyResponse[q2]" value="Business Analysis"> Strategic thinking<br>
  <input type="radio" name="surveyResponse[q2]" value="Medicine"> Empathy and understanding<br>
  <input type="radio" name="surveyResponse[q2]" value="Art"> Creativity and imagination<br>
  <input type="radio" name="surveyResponse[q2]" value="Social Sciences"> Critical thinking<br>
  <input type="radio" name="surveyResponse[q2]" value="Humanities"> Communication and expression<br>
  <input type="radio" name="surveyResponse[q2]" value="Information Technology"> Technical skills<br>
  <input type="radio" name="surveyResponse[q2]" value="NotSure"> Not Sure<br>

  <p>3. What kind of work environment do you prefer?</p>
  <input type="radio" name="surveyResponse[q3]" value="Engineering"> Structured and predictable<br>
  <input type="radio" name="surveyResponse[q3]" value="BusinessAnalysis"> Corporate and strategic<br>
  <input type="radio" name="surveyResponse[q3]" value="Medicine"> Helping and healing<br>
  <input type="radio" name="surveyResponse[q3]" value="Art"> Creative and free-form<br>
  <input type="radio" name="surveyResponse[q3]" value="SocialSciences"> Research-oriented<br>
  <input type="radio" name="surveyResponse[q3]" value="Humanities"> Collaborative and expressive<br>
  <input type="radio" name="surveyResponse[q3]" value="InformationTechnology"> Tech-oriented and innovative<br>
  <input type="radio" name="surveyResponse[q3]" value="NotSure"> Not Sure<br>

  <p>4. Which of these skills do you think you excel at?</p>
  <input type="radio" name="surveyResponse[q4]" value="Engineering"> Problem-solving<br>
  <input type="radio" name="surveyResponse[q4]" value="BusinessAnalysis"> Strategic thinking<br>
  <input type="radio" name="surveyResponse[q4]" value="Medicine"> Empathy and understanding<br>
  <input type="radio" name="surveyResponse[q4]" value="Art"> Creativity and imagination<br>
  <input type="radio" name="surveyResponse[q4]" value="SocialSciences"> Critical thinking<br>
  <input type="radio" name="surveyResponse[q4]" value="Humanities"> Communication and expression<br>
  <input type="radio" name="surveyResponse[q4]" value="InformationTechnology"> Technical skills<br>
  <input type="radio" name="surveyResponse[q4]" value="NotSure"> Not Sure<br>

  <p>5. What kind of work environment do you prefer?</p>
  <input type="radio" name="surveyResponse[q5]" value="Engineering"> Structured and predictable<br>
  <input type="radio" name="surveyResponse[q5]" value="BusinessAnalysis"> Corporate and strategic<br>
  <input type="radio" name="surveyResponse[q5]" value="Medicine"> Helping and healing<br>
  <input type="radio" name="surveyResponse[q5]" value="Art"> Creative and free-form<br>
  <input type="radio" name="surveyResponse[q5]" value="SocialSciences"> Research-oriented<br>
  <input type="radio" name="surveyResponse[q5]" value="Humanities"> Collaborative and expressive<br>
  <input type="radio" name="surveyResponse[q5]" value="InformationTechnology"> Tech-oriented and innovative<br>
  <input type="radio" name="surveyResponse[q5]" value="NotSure"> Not Sure<br>
  <input type="submit" value="Submit Survey">
  </form>
  `;

  // Send the survey form to the user
  res.send(surveyForm);
});

// Route for submitting the survey
app.post('/submit-survey', async (req, res) => {
  try {
    const surveyResponse = req.body;

    // Calculate the top fields based on the survey response
    const topFields = calculateTopFields(surveyResponse);

    // Display the survey result and let the user choose a field
    const resultHTML = `
    <p>Your top fields based on the survey:</p>
    <ol>
      ${topFields.map((field) => `<li>${field}</li>`).join('')}
    </ol>
    <form action="/select-field" method="POST">
      <p>Select the field you are interested in:</p>
      <select name="selectedField">
        ${topFields.map((field) => `<option value="${field}">${field}</option>`).join('')}
      </select>
      <input type="submit" value="Select Field">
    </form>
    `;

    res.status(200).send(resultHTML);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for handling the user's selected field
app.post('/select-field', (req, res) => {
  const selectedField = req.body.selectedField;

  // Handle the selected field, you can send it to the Java backend if needed
  // Send selectedField to the Java backend...

  res.status(200).send(`You have selected the field: ${selectedField}`);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
 
});
