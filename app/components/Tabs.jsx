import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => (
  <nav className="flex border-b border-gray-700">
    <button
      onClick={() => setActiveTab('general')}
      className={`px-4 py-2 text-sm font-medium ${
        activeTab === 'general' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'
      }`}
    >
      General
    </button>
    <button
      onClick={() => setActiveTab('blocklist')}
      className={`px-4 py-2 text-sm font-medium ${
        activeTab === 'blocklist' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'
      }`}
    >
      Blocklist <span className="ml-1 text-gray-500">(12)</span>
    </button>
  </nav>
);

export default Tabs;
