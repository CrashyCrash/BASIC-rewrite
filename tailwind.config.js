// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors (optional)
        background: '#0f172a', // Example background color
        'card-bg': '#1e293b', // Slightly lighter blue for cards
        'text-primary': '#e2e8f0', // Example text color
        'text-secondary': '#94a3b8', // Gray for secondary text
        'border-color': '#334155', // Border color
        primary: '#4A90E2', // Example primary color
        secondary: '#7ED321', // Green for secondary actions
        accent: '#7ED321', // Example accent color
        highlight: '#F5A623', // Example highlight color
        'button-bg': '#e0e0e0', // Example button background
        'button-text': '#000', // Example button text
        'button-hover-bg': '#d1d1d1', // Example button hover background
      },
    },
  },
  plugins: [],
};
