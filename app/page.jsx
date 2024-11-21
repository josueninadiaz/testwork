'use client';

import React, { useState } from 'react';
import { UserIcon, EnvelopeIcon, CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid';

const InboxSharingConfiguration = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [selectedOption, setSelectedOption] = useState('full-access');

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="px-8 py-4 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold">julian@attio.com</h1>
            <p className="text-sm text-gray-400">
              Update your inbox permissions and settings.{' '}
              <a href="#" className="text-blue-400 underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400 text-sm">In Sync</span>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <nav className="px-8 py-4">
        <div className="flex space-x-6 text-sm">
          <button
            className={`pb-2 ${activeTab === 'general' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button
            className={`pb-2 ${activeTab === 'blocklist' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}
            onClick={() => setActiveTab('blocklist')}
          >
            Blocklist <span className="bg-gray-700 px-2 py-1 text-xs rounded-full">12</span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="px-8 py-6">
        {activeTab === 'general' && (
          <>
            {/* Default Sharing Configuration */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Default sharing configuration</h2>
              <div className="space-y-4">
                <div
                  className={`flex items-center justify-between px-4 py-3 border rounded-lg ${
                    selectedOption === 'metadata-only' ? 'border-blue-500 bg-gray-800' : 'border-gray-700'
                  }`}
                  onClick={() => setSelectedOption('metadata-only')}
                >
                  <div className="flex items-center space-x-4">
                    <EnvelopeIcon className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="font-medium">Metadata only</p>
                      <p className="text-sm text-gray-400">
                        Only subject lines will be visible to anyone on your workspace.
                      </p>
                    </div>
                  </div>
                  {selectedOption === 'metadata-only' && <CheckCircleIcon className="w-6 h-6 text-blue-500" />}
                </div>
                <div
                  className={`flex items-center justify-between px-4 py-3 border rounded-lg ${
                    selectedOption === 'subject-line' ? 'border-blue-500 bg-gray-800' : 'border-gray-700'
                  }`}
                  onClick={() => setSelectedOption('subject-line')}
                >
                  <div className="flex items-center space-x-4">
                    <EnvelopeIcon className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="font-medium">Subject line and metadata</p>
                      <p className="text-sm text-gray-400">
                        We&apos;ll share the subject, participants, and timestamp with anyone in your workspace.
                      </p>
                    </div>
                  </div>
                  {selectedOption === 'subject-line' && <CheckCircleIcon className="w-6 h-6 text-blue-500" />}
                </div>
                <div
                  className={`flex items-center justify-between px-4 py-3 border rounded-lg ${
                    selectedOption === 'full-access' ? 'border-blue-500 bg-gray-800' : 'border-gray-700'
                  }`}
                  onClick={() => setSelectedOption('full-access')}
                >
                  <div className="flex items-center space-x-4">
                    <EnvelopeIcon className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="font-medium">
                        Full access{' '}
                        <span className="bg-yellow-500 text-black px-2 py-0.5 text-xs rounded">Plus</span>
                      </p>
                      <p className="text-sm text-gray-400">
                        Everything is shared with your workspace members (including the body, subject line, and attachments).
                      </p>
                    </div>
                  </div>
                  {selectedOption === 'full-access' && <CheckCircleIcon className="w-6 h-6 text-blue-500" />}
                </div>
              </div>
            </section>

            {/* Individual Inbox Sharing */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Individual inbox sharing</h2>
              <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <UserIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-sm">Jeremy Enderson</span>
                  </div>
                  <select
                    className="bg-gray-700 text-sm text-gray-400 px-2 py-1 rounded"
                    value="full-access"
                    onChange={() => {}}
                  >
                    <option value="full-access">Full access</option>
                    <option value="metadata-only">Metadata only</option>
                  </select>
                </div>
                <button className="bg-blue-500 text-sm text-white px-4 py-2 rounded flex items-center space-x-2">
                  <PlusCircleIcon className="w-5 h-5" />
                  <span>Share access</span>
                </button>
              </div>
            </section>
          </>
        )}
        {activeTab === 'blocklist' && <p className="mt-6 text-gray-400">Blocklist content here.</p>}
      </main>
    </div>
  );
};

export default InboxSharingConfiguration;
