// src/pages/CommandCanvas.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CommandCanvas = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 bg-background text-text-primary font-sans">
      <Link
        to="/"
        className="inline-block mb-5 px-4 py-2 bg-button-bg text-button-text rounded-lg hover:bg-button-hover-bg transition-colors"
      >
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-primary mb-4">Command Canvas – AI-Powered Visuals</h1>
      <p className="text-xl text-accent mb-6">“Create. Edit. Inspire—All On Command.”</p>
      <h2 className="text-3xl font-semibold text-primary mb-6">Unleash AI Creativity at Your Command</h2>
      <p className="text-lg mb-8">
        From instant image generation to intelligent editing—Command Canvas brings your vision to life with AI-powered magic.
      </p>
      <h2 className="text-3xl font-semibold text-primary mb-6">Why Command Canvas?</h2>
      <p className="text-lg mb-4">🌟 The Ultimate AI Design Studio—For Everyone.</p>
      <p className="text-lg mb-8">
        Whether you’re a creator, developer, or entrepreneur, Command Canvas puts AI-driven visual tools at your fingertips. No coding? No problem. Power user? Plug into our APIs.
      </p>
      <h2 className="text-3xl font-semibold text-primary mb-6">Key Features</h2>
      <ul className="space-y-6">
        <li>
          <h3 className="text-2xl font-bold text-highlight">🖼️ AI Image Generation</h3>
          <p className="text-lg">Turn prompts into visuals instantly for ads, branding, and content creation.</p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">🛠️ Smart Editing Tools</h3>
          <p className="text-lg">Resize, retouch, upscale, and style images with AI precision.</p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">🔧 Custom APIs</h3>
          <p className="text-lg">Develop workflows, automate tasks, and batch process with backend access.</p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">⚡ Creative Automation</h3>
          <p className="text-lg">Automate repetitive tasks so you can focus on big ideas.</p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">🔒 Private & Scalable</h3>
          <p className="text-lg">Local-first deployment or cloud scalability for collaboration.</p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">💡 For All Skill Levels</h3>
          <p className="text-lg">Simple enough for beginners, powerful enough for pros.</p>
        </li>
      </ul>
      <h2 className="text-3xl font-semibold text-primary mt-10 mb-6">Who’s It For?</h2>
      <ul className="space-y-6">
        <li>
          <h3 className="text-2xl font-bold text-highlight">🎯 Marketers</h3>
          <p className="text-lg">Generate ad creatives and social media visuals in seconds.</p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">🎨 Designers</h3>
          <p className="text-lg">Create artwork, mockups, and prototypes effortlessly.</p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">⚙️ Developers</h3>
          <p className="text-lg">Build AI workflows and automate visual tasks through APIs.</p>
        </li>
        <li>
          <h3 className="text-2xl font-bold text-highlight">🏢 Businesses</h3>
          <p className="text-lg">Scale visual content creation and reduce design bottlenecks.</p>
        </li>
      </ul>
      <h2 className="text-3xl font-semibold text-primary mt-10 mb-6">Testimonials & Use Cases</h2>
      <p className="text-lg mb-6">Trusted by Visionaries. Built for Impact.</p>
      <ul className="space-y-4">
        <li className="text-lg">
          📢 “Command Canvas has saved us hours on creative design—allowing us to focus on growth.” – Marketing Team, SaaS Company
        </li>
        <li className="text-lg">
          📢 “The API access lets our developers integrate AI-generated visuals directly into our app workflow. It’s a game-changer.” – Lead Engineer, AI Startup
        </li>
        <li className="text-lg">
          📢 “The image editing tools are like Photoshop but with superpowers. Love it!” – Freelance Designer
        </li>
      </ul>
      <h2 className="text-3xl font-semibold text-primary mt-10 mb-6">Call-to-Action (CTA)</h2>
      <p className="text-lg mb-4">🌟 “Ready to Command Your Creativity?”</p>
      <p className="text-lg mb-4">💻 “Try Command Canvas Today—Free Trial Available.”</p>
      <p className="text-lg">📞 “Request a Demo.”</p>
    </div>
  );
};

export default CommandCanvas;
