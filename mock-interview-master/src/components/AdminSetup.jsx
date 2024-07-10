import React, { useState } from "react";
import axios from 'axios';
import api from '../api';

const AdminSetup = () => {
  const [languages, setLanguages] = useState([""]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");

  const handleAddLanguage = () => {
    setLanguages([...languages, ""]);
  };

  const handleLanguageChange = (index, value) => {
    const newLanguages = languages.map((lang, i) =>
      i === index ? value : lang
    );
    setLanguages(newLanguages);
  };

  const handleGenerateClick = async () => {
    if (
      languages.some((lang) => !lang) ||
      !selectedDifficulty ||
      !selectedRole ||
      !selectedDateTime
    ) {
      alert("Please fill all fields.");
      return;
    }

    const requestBody = {
      role: selectedRole,
      difficulty: selectedDifficulty,
      language: languages.join(', '),
      deadline: selectedDateTime,
    };

    try {
      const response = await api.post('details/create', requestBody);
      console.log(response.data);
      alert('Interview detail created successfully');
      clearFields();
    } catch (error) {
      console.error('Error creating interview detail:', error);
      alert('Failed to create interview detail');
    }
  };

  const clearFields = async () => {
    setLanguages([""]);
      setSelectedDifficulty("");
      setSelectedRole("");
      setSelectedDateTime("");
  };

  return (
    <div className="rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <div className="bg-blue-500 text-white rounded-t-lg p-6 mb-6">
        <h2 className="text-3xl font-bold text-center">Admin Setup</h2>
      </div>
      <div className="bg-white rounded-b-lg p-6">
        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2 text-lg">
            Languages
          </label>
          {languages.map((language, index) => (
            <div className="flex items-center mb-3" key={index}>
              <input
                type="text"
                className="form-input mt-1 block w-full p-2 rounded-lg shadow-sm text-gray-800 border border-gray-300"
                value={language}
                onChange={(e) => handleLanguageChange(index, e.target.value)}
              />
              {index === languages.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddLanguage}
                  className="ml-3 bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600"
                >
                  +
                </button>
              )}
            </div>
          ))}
          <div className="mt-3">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Entered Languages:
            </h3>
            <ul className="list-disc pl-5 text-gray-800">
              {languages
                .filter((lang) => lang)
                .map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2 text-lg">
            Select Difficulty Level
          </label>
          <select
            className="form-select mt-1 block w-full p-2 rounded-lg shadow-sm text-gray-800 border border-gray-300"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">Level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Mixed Levels">All</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2 text-lg">
            Select Role
          </label>
          <select
            className="form-select mt-1 block w-full p-2 rounded-lg shadow-sm text-gray-800 border border-gray-300"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">Role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2 text-lg">
            Select Date and Time
          </label>
          <input
            type="datetime-local"
            className="form-input mt-1 block w-full p-2 rounded-lg shadow-sm text-gray-800 border border-gray-300"
            value={selectedDateTime}
            onChange={(e) => setSelectedDateTime(e.target.value)}
          />
        </div>
        <button
          onClick={handleGenerateClick}
          className="bg-blue-500 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-600"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default AdminSetup;
