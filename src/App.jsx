import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    education: '',
    experience: [{ title: '', company: '', duration: '', description: '' }],
    projects: [{ title: '', description: '' }],
    achievements: [''],
    skills: ''
  });

  const handleChange = (e, index, field, subField) => {
    const { name, value } = e.target;
    if (field) {
      const updatedField = [...formData[field]];
      if (subField) {
        updatedField[index][subField] = value;
      } else {
        updatedField[index] = value;
      }
      setFormData({ ...formData, [field]: updatedField });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addField = (field) => {
    const newField = field === 'experience' || field === 'projects' 
      ? { title: '', description: '' } 
      : ''; // Add an empty string for achievements
    setFormData({ ...formData, [field]: [...formData[field], newField] });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full">
        <ResumeForm
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          addField={addField}
        />
        <ResumePreview formData={formData} />
      </div>
    </div>
  );
}

export default App;