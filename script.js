document.getElementById('new-job-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const location = document.getElementById('location').value;

    const jobList = document.getElementById('job-listings');
    
    const newJob = document.createElement('div');
    newJob.classList.add('job');
    
    const jobTitle = document.createElement('h3');
    jobTitle.textContent = title;
    newJob.appendChild(jobTitle);
    
    const jobLocation = document.createElement('p');
    jobLocation.textContent = 'Location: ' + location;
    newJob.appendChild(jobLocation);
    
    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply Now';
    newJob.appendChild(applyButton);
    
    jobList.appendChild(newJob);

    document.getElementById('new-job-form').reset();
});
