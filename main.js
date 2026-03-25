// Wait for all scripts (like App.js) to be fully parsed
window.addEventListener('load', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    // Make sure App exists before rendering
    if (typeof App !== 'undefined') {
      root.render(<App />);
    } else {
      console.error("App component is not defined. Check App.js for errors.");
    }
  }
});