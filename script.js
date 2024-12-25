function fetchResults() {
    const studentId = document.getElementById('student-id').value;
  
    // Simulate fetching results
    const mockResults = {
      "12345": "Passed with A+",
      "67890": "Failed - Better luck next time",
      "11111": "Passed with B"
    };
  
    const output = document.getElementById('results-output');
    if (mockResults[studentId]) {
      output.textContent = `Result: ${mockResults[studentId]}`;
    } else {
      output.textContent = "Student ID not found. Please try again.";
    }
  }
  // Mock database of students and results
const studentResults = {
  "10000": "240",
  "20000": "0",
  "30000": "300 Well Done",
  "11111": "299",
};

// Function to fetch results
function fetchResults() {
  const studentId = document.getElementById('student-id').value; // Get input value
  const output = document.getElementById('results-output'); // Result display div

  if (studentId in studentResults) {
    output.textContent = `Result: ${studentResults[studentId]}`; // Display result
    output.style.color = "green"; // Set text color
  } else {
    output.textContent = "Student ID not found. Please try again."; // Error message
    output.style.color = "red"; // Set text color
  }
}
