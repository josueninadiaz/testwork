import React from 'react';

const Header = () => (
  <header className="flex items-center justify-between mb-6">
    <div>
      <h1 className="text-2xl font-semibold">julian@attio.com</h1>
      <p className="text-gray-400">
        Update your inbox permissions and settings.{' '}
        <a href="#" className="text-blue-500 underline">Learn more</a>
      </p>
    </div>
    <span className="px-3 py-1 text-sm bg-green-600 text-white rounded-full">In Sync</span>
  </header>
);

export default Header;
