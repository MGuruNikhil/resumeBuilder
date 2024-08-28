import React from 'react';
import html2pdf from 'html2pdf.js';

const ResumePreview = ({ formData }) => {
  const handleDownloadPDF = () => {
    const element = document.getElementById('resumePreview');
    const opt = {
      margin: 0.5,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Clone the element to manipulate it without affecting the original
    const clonedElement = element.cloneNode(true);

    // Remove empty sections
    const sections = clonedElement.querySelectorAll('.section');
    sections.forEach((section) => {
      if (!section.textContent.trim()) {
        section.remove();
      }
    });

    html2pdf().set(opt).from(clonedElement).save();
  };

  return (
    <div className="p-5 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
      <div id="resumePreview" className="border p-4" style={{ backgroundColor: 'white' }}>
        <style>
          {`
            #resumePreview {
              font-family: Arial, sans-serif;
              color: #333;
              padding: 20px; /* Added padding */
              background-color: white; /* Ensure background is white */
            }
            #resumePreview h1 {
              font-size: 24px;
              margin-bottom: 10px;
              color: #1E3A8A; /* Blue color */
            }
            #resumePreview h3 {
              font-size: 18px;
              margin-top: 20px;
              margin-bottom: 10px;
              border-bottom: 1px solid #ddd;
              padding-bottom: 5px;
              color: #1E3A8A; /* Blue color */
            }
            #resumePreview h4 {
              font-size: 16px;
              margin-top: 10px;
              margin-bottom: 5px;
              font-weight: bold; /* Bold text */
            }
            #resumePreview p {
              margin: 5px 0;
            }
            #resumePreview .section {
              margin-bottom: 20px;
              page-break-inside: avoid; /* Avoid page break inside sections */
            }
            #resumePreview .contact-info {
              margin-bottom: 20px;
              page-break-inside: avoid; /* Avoid page break inside contact info */
            }
            #resumePreview .contact-info p {
              margin: 2px 0;
            }
          `}
        </style>
        <div className="contact-info">
          <h1>{formData.fullName}</h1>
          <p>{formData.email}</p>
          <p>{formData.mobileNumber}</p>
        </div>
        {formData.education && (
          <div className="section">
            <h3>Education</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{formData.education}</p>
          </div>
        )}
        {formData.experience.length > 0 && formData.experience[0].title && (
          <div className="section">
            <h3>Work Experience</h3>
            {formData.experience.map((exp, index) => (
              <div key={index}>
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        {formData.projects.length > 0 && formData.projects[0].title && (
          <div className="section">
            <h3>Projects</h3>
            {formData.projects.map((project, index) => (
              <div key={index}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
        {formData.achievements.length > 0 && formData.achievements[0] && (
          <div className="section">
            <h3>Achievements</h3>
            {formData.achievements.map((achievement, index) => (
              <p key={index}>{achievement}</p>
            ))}
          </div>
        )}
        {formData.skills && (
          <div className="section">
            <h3>Skills</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{formData.skills}</p>
          </div>
        )}
      </div>
      <button
        onClick={handleDownloadPDF}
        className="mt-4 bg-custom-teal text-custom-light px-4 py-2 rounded-md shadow-sm hover:bg-custom-gray"
      >
        Download PDF
      </button>
    </div>
  );
};

export default ResumePreview;