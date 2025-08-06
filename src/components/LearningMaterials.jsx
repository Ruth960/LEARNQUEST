import { useState } from 'react';

const materials = {
  "High School Notes": {
    "Form 1": ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History"],
    "Form 2": ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History"],
    "Form 3": ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History"],
    "Form 4": ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History"],
  },
  "Revision materials": {
    "KCSE": ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History"],
    "KCPE": ["Mathematics", "Science", "English", "Social Studies"],
  },
  "Lower Primary": {
    "Grade 1": ["Mathematics", "English", "Kiswahili", "Environmental Activities"],
    "Grade 2": ["Mathematics", "English", "Kiswahili", "Environmental Activities"],
    "Grade 3": ["Mathematics", "English", "Kiswahili", "Environmental Activities"],
  },
  "Upper Primary": {
    "Grade 4": ["Mathematics", "English", "Kiswahili", "Science and Technology", "Social Studies"],
    "Grade 5": ["Mathematics", "English", "Kiswahili", "Science and Technology", "Social Studies"],
    "Grade 6": ["Mathematics", "English", "Kiswahili", "Science and Technology", "Social Studies"],
  },
  "Junior High School": {
    "Grade 7": ["Mathematics", "Integrated Science", "English", "Kiswahili", "Social Studies"],
    "Grade 8": ["Mathematics", "Integrated Science", "English", "Kiswahili", "Social Studies"],
    "Grade 9": ["Mathematics", "Integrated Science", "English", "Kiswahili", "Social Studies"],
  },
};

const CustomSelect = ({ options, selectedOption, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left mb-4 md:mb-0 md:mr-4">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || placeholder}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function LearningMaterial() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    setSelectedSubject(null);
  };

  const subCategories = selectedCategory ? Object.keys(materials[selectedCategory]) : [];
  const subjects = selectedCategory && selectedSubCategory ? materials[selectedCategory][selectedSubCategory] : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-center mb-8">
        {Object.keys(materials).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm font-medium rounded-md mr-4 mb-4 ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex flex-wrap items-center">
            <CustomSelect
              options={subCategories}
              selectedOption={selectedSubCategory}
              onSelect={setSelectedSubCategory}
              placeholder={`Select ${selectedCategory.split(' ')[0]} Level`}
            />
            {selectedSubCategory && (
              <CustomSelect
                options={subjects}
                selectedOption={selectedSubject}
                onSelect={setSelectedSubject}
                placeholder="Select Subject"
              />
            )}
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <input
                type="search"
                className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search for materials..."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
