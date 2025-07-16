function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
  }
  document.getElementById('downloadCvBtn').addEventListener('click', function() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your PDF file
    const pdfUrl = 'https://drive.google.com/file/d/14NmfyrZZXB_qqr44ScFEIrBjM4q5YVOf/view?usp=sharing';

    // Open the PDF in a new tab/window
    window.open(pdfUrl, '_blank');
  });

  document.getElementById('linkedinBtn').addEventListener('click', function() {
    // Replace 'YOUR_LINKEDIN_URL' with your actual LinkedIn profile URL
    const linkedinUrl = 'https://www.linkedin.com/in/pragati-shah-92867725b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
    window.open(linkedinUrl, '_blank');
  });
  document.getElementById('githubBtn').addEventListener('click', function() {
    // Replace 'YOUR_GITHUB_URL' with your actual GitHub profile URL
    const githubUrl = 'https://github.com/pragati642';
    window.open(githubUrl, '_blank');
  });