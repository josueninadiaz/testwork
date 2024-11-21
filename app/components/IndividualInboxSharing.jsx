import React from 'react';

const IndividualInboxSharing = () => {
  const users = [
    { name: 'Nick Sharp', email: 'nick@attio.com', access: 'Full access' },
    { name: 'Alex Christie', email: 'alex@attio.com', access: 'Metadata only' },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Individual inbox sharing</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search user..."
          className="w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Share access</button>
      </div>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.email} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
            <div>
              <h3 className="text-lg font-medium">{user.name}</h3>
              <p className="text-gray-400 text-sm">{user.email}</p>
            </div>
            <span
              className={`px-3 py-1 text-sm rounded-full ${
                user.access === 'Full access' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'
              }`}
            >
              {user.access}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndividualInboxSharing;
