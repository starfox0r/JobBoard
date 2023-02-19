// Get a reference to the job listings section in the HTML file
const jobListingsSection = document.querySelector("#job-listings ul");

// Fetch the job data from a JSON file
fetch("jobs.json")
  .then((response) => response.json())
  .then((jobs) => {
    // Loop through each job in the job data
    jobs.forEach((job) => {
      // Create a new list item element to hold the job listing
      const jobListing = document.createElement("li");
      jobListing.classList.add("job-listing");

      // Create the HTML markup for the job listing
      const jobListingMarkup = `
        <h3>${job.title}</h3>
        <p>${job.company} - ${job.location}</p>
        <p>${job.description}</p>
        <a href="${job.url}" target="_blank">Learn more</a>
      `;

      // Add the HTML markup to the job listing element
      jobListing.innerHTML = jobListingMarkup;

      // Add the job listing element to the job listings section in the HTML file
      jobListingsSection.appendChild(jobListing);
    });
  })
  .catch((error) => console.error(error));
