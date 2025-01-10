// src/pages/CenterDeep.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CenterDeep = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary p-8 text-center">
      <Link
        to="/"
        className="inline-block mb-4 px-4 py-2 bg-hover-bg text-text-secondary rounded-lg hover:bg-primary hover:text-text-primary transition-colors"
      >
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-6">
        CenterDeep: Dig Deeper. Think Smarter. Act Faster. 🕵️‍♂️🤖
      </h1>
      <p className="text-lg mb-8">
        At Magic Unicorn, we believe insights shouldn’t hide beneath the surface—they should be front and center.
        That’s why we created CenterDeep, the AI search engine that doesn’t just skim the surface—it dives straight
        to the core, bringing clarity where others bring clutter.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Why CenterDeep?</h2>
      <ul className="space-y-6 max-w-2xl mx-auto text-left">
        <li>
          <h3 className="text-2xl font-bold text-secondary">Think Like a Team.</h3>
          <p className="text-lg">
            It’s not just search; it’s an AI squad analyzing, organizing, and delivering actionable insights on demand.
          </p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-secondary">Search Without Limits.</h3>
          <p className="text-lg">
            From real-time web crawling to internal document mining, CenterDeep unites all your data streams into a
            single, intuitive interface.
          </p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-secondary">Answer the Unanswered.</h3>
          <p className="text-lg">
            Ask complex questions, and CenterDeep doesn’t just fetch results—it breaks them down, connects the dots,
            and hands you the blueprint.
          </p>
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mt-8 mb-4">More Than Search—It’s Strategy.</h2>
      <p className="text-lg">
        Whether you’re hunting down competitive trends, tackling tough research questions, or dreaming up your next big
        idea, CenterDeep is your AI-driven command center—ready to think fast and dig deep.
      </p>
    </div>
  );
};

export default CenterDeep;
