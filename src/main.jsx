import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

console.log('main.jsx: Starting application...');

// Create a simple error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', fontFamily: 'sans-serif' }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page or contact support if the problem persists.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main render function
const renderApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('main.jsx: Could not find root element with id "root"');
    document.body.innerHTML = `
      <div style="padding: 20px; color: red; font-family: sans-serif;">
        <h1>Error: Root element not found</h1>
        <p>Could not find an element with id="root" to mount the application.</p>
      </div>
    `;
    return;
  }

  try {
    console.log('main.jsx: Creating React root...');
    const root = createRoot(rootElement);
    
    console.log('main.jsx: Rendering App component...');
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </React.StrictMode>
    );
    console.log('main.jsx: App rendered successfully');
  } catch (error) {
    console.error('main.jsx: Fatal error rendering app:', error);
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red; font-family: sans-serif;">
        <h1>Application Error</h1>
        <p>${error.message || 'An unknown error occurred'}</p>
        <p>Please check the console for more details.</p>
      </div>
    `;
  }
};

// Start the application
renderApp();
