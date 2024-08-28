import React from 'react';
import FormSection from './FormSection';

const ResumeForm = ({ formData, handleChange, addField }) => {
  return (
    <form className="bg-custom-light p-5 rounded-md shadow-md">
      <h2 className="text-custom-teal mb-4 font-black text-xl">Resume Builder</h2>

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
      />

      {formData.experience.map((exp, index) => (
        <div key={index}>
          <FormSection
            label={`Job Title ${index + 1}`}
            value={exp.title}
            onChange={(e) => handleChange(e, index, 'experience', 'title')}
            name={`job-title-${index}`}
          />
          <FormSection
            label={`Company ${index + 1}`}
            value={exp.company}
            onChange={(e) => handleChange(e, index, 'experience', 'company')}
            name={`company-${index}`}
          />
          <FormSection
            label={`Duration ${index + 1}`}
            value={exp.duration}
            onChange={(e) => handleChange(e, index, 'experience', 'duration')}
            name={`duration-${index}`}
          />
          <FormSection
            label={`Description ${index + 1}`}
            value={exp.description}
            onChange={(e) => handleChange(e, index, 'experience', 'description')}
            name={`description-${index}`}
            textarea
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addField('experience')}
        className="mt-2 bg-custom-teal text-custom-dark px-4 py-2 rounded-md shadow-sm hover:bg-custom-gray"
      >
        Add Experience
      </button>

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
        className="mt-2 bg-custom-teal text-custom-dark px-4 py-2 rounded-md shadow-sm hover:bg-custom-gray"
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
        className="mt-2 bg-custom-teal text-custom-dark px-4 py-2 rounded-md shadow-sm hover:bg-custom-gray"
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