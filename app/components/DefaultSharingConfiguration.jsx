import React from 'react';

const DefaultSharingConfiguration = ({ selectedOption, setSelectedOption }) => {
  const options = [
    {
      id: 'metadata',
      title: 'Metadata only',
      description: 'Only subject lines will be visible to anyone on your workspace.',
    },
    {
      id: 'subject-metadata',
      title: 'Subject line and metadata',
      description: 'We’ll share the subject, participants and timestamp with anyone in your workspace.',
    },
    {
      id: 'full-access',
      title: 'Full access',
      description: 'Everything is shared with your workspace members (including the body, subject line, attachments).',
    },
  ];

  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Default sharing configuration</h2>
      <div className="space-y-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`flex items-center p-4 border ${
              selectedOption === option.id ? 'border-blue-500 bg-blue-900' : 'border-gray-700'
            } rounded-lg`}
          >
            <input
              type="radio"
              name="sharing"
              id={option.id}
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              className="text-blue-500 focus:ring-0"
            />
            <label htmlFor={option.id} className="ml-4">
              <h3 className="text-lg font-medium">{option.title}</h3>
              <p className="text-gray-400 text-sm">{option.description}</p>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DefaultSharingConfiguration;
