// TODO: Fetch data from the PostgreSQL database( to be implemented later)
function fetchGradeData () {
  // This functionwill query the PostgreSQL database and return gradedata
  console.log("Fetching grade data...");
}

// TODO: Populate the table with grade data
function populateGradebook(data) {
    // This function will take the fetched grade data and populate the table
     console.log("Populating gradbook with data:", data);
}

// TODO REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
//END REMOVE