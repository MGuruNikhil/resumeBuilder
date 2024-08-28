import React from 'react';
import FormSection from './FormSection';

const ResumeForm = ({ formData, handleChange, addField }) => {
  return (
    <form className="space-y-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Resume Builder</h2>

      <FormSection
        label="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        name="fullName"
      />

      <FormSection
        label="Email"
        value={formData.email}
        onChange={handleChange}
        name="email"
      />

      <FormSection
        label="Mobile Number"
        value={formData.mobileNumber}
        onChange={handleChange}
        name="mobileNumber"
      />

      <FormSection
        label="Education"
        value={formData.education}
        onChange={handleChange}
        name="education"
        textarea
      />

      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      {formData.experience.map((exp, index) => (
        <div key={index}>
          <FormSection
            label={`Job Title ${index + 1}`}
            value={exp.title}
            onChange={(e) => handleChange(e, index, 'experience', 'title')}
            name={`experience-title-${index}`}
          />
          <FormSection
            label={`Company ${index + 1}`}
            value={exp.company}
            onChange={(e) => handleChange(e, index, 'experience', 'company')}
            name={`experience-company-${index}`}
          />
          <FormSection
            label={`Duration ${index + 1}`}
            value={exp.duration}
            onChange={(e) => handleChange(e, index, 'experience', 'duration')}
            name={`experience-duration-${index}`}
          />
          <FormSection
            label={`Description ${index + 1}`}
            value={exp.description}
            onChange={(e) => handleChange(e, index, 'experience', 'description')}
            name={`experience-description-${index}`}
            textarea
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addField('experience')}
        className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-600"
      >
        Add Experience
      </button>

      <h2 className="text-xl font-bold mb-4">Projects</h2>
      {formData.projects.map((project, index) => (
        <div key={index}>
          <FormSection
            label={`Project Title ${index + 1}`}
            value={project.title}
            onChange={(e) => handleChange(e, index, 'projects', 'title')}
            name={`project-title-${index}`}
          />
          <FormSection
            label={`Description ${index + 1}`}
            value={project.description}
            onChange={(e) => handleChange(e, index, 'projects', 'description')}
            name={`project-description-${index}`}
            textarea
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addField('projects')}
        className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-600"
      >
        Add Project
      </button>

      <h2 className="text-xl font-bold mb-4">Achievements</h2>
      {formData.achievements.map((achievement, index) => (
        <FormSection
          key={index}
          label={`Achievement ${index + 1}`}
          value={achievement}
          onChange={(e) => handleChange(e, index, 'achievements')}
          name={`achievement-${index}`}
          textarea
        />
      ))}
      <button
        type="button"
        onClick={() => addField('achievements')}
        className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-600"
      >
        Add Achievement
      </button>

      <FormSection
        label="Skills"
        value={formData.skills}
        onChange={handleChange}
        name="skills"
        textarea
      />
    </form>
  );
};

export default ResumeForm;