// src/pages/CognitiveCompanion.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CognitiveCompanion = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 bg-background text-text-primary font-sans">
      <Link
        to="/"
        className="inline-block mb-5 px-4 py-2 bg-button-bg text-button-text rounded-lg hover:bg-button-hover-bg transition-colors"
      >
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-primary mb-4">
        Cognitive Companion – Collaborate with Your Squad: AI + Human 🤖👥
      </h1>
      <p className="text-xl text-accent mb-6">“Your Personal AI Squad—Working Smarter, Together.”</p>
      <p className="text-lg mb-8">
        Turn documents into conversations, insights into actions, and ideas into reality—seamlessly combining AI
        intelligence with human creativity.
      </p>
      <h2 className="text-3xl font-semibold text-primary mb-6">Key Features</h2>
      <ul className="space-y-6">
        <li>
          <h3 className="text-2xl font-bold text-highlight">🧠 AI-Powered Knowledge Retrieval</h3>
          <ul className="list-disc list-inside text-lg">
            <li>“Answers, Not Links.”</li>
            <li>
              Find insights instantly from PDFs, spreadsheets, and even code—powered by advanced Retrieval-Augmented
              Generation (RAG).
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">👥 Collaborate with Your Squad</h3>
          <ul className="list-disc list-inside text-lg">
            <li>“Team Up with AI + Humans.”</li>
            <li>Assign tasks, share research, and brainstorm ideas with AI agents that work alongside you.</li>
          </ul>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">🔒 Privacy You Can Trust</h3>
          <ul className="list-disc list-inside text-lg">
            <li>“No Data Leaves Your Castle.”</li>
            <li>Local-first, offline-ready, and fully secure for sensitive data handling.</li>
          </ul>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">⚡ Smarter Workflows, Less Effort</h3>
          <ul className="list-disc list-inside text-lg">
            <li>“Delegate. Automate. Relax.”</li>
            <li>Automate repetitive tasks, summarize documents, and extract key insights effortlessly.</li>
          </ul>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">💬 Talk to Your Data</h3>
          <ul className="list-disc list-inside text-lg">
            <li>“Turn Files into Conversations.”</li>
            <li>Chat with documents like a pro—ask questions and get answers fast.</li>
          </ul>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">🛠️ Flexible & Scalable</h3>
          <ul className="list-disc list-inside text-lg">
            <li>“Works Where You Work.”</li>
            <li>Cross-platform compatibility for Mac, Windows, and Linux, ready for teams of all sizes.</li>
          </ul>
        </li>
      </ul>
      <h2 className="text-3xl font-semibold text-primary mt-10 mb-6">Call-to-Action (CTA)</h2>
      <p className="text-lg mb-4">🌟 “Build Your Squad—AI + Human.”</p>
      <p className="text-lg mb-4">💻 “Try Cognitive Companion Today.”</p>
      <p className="text-lg">
        Or schedule a demo to see how AI and humans can team up for your business success!
      </p>
    </div>
  );
};

export default CognitiveCompanion;
