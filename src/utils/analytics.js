import ReactGA from 'react-ga4';

// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Initialize Google Analytics
const initGA = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    // Track pageview
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }
};

// Track page views
const trackPageView = (page) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: "pageview", page });
  }
};

// Track events
const trackEvent = (category, action, label, value) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};

export { initGA, trackPageView, trackEvent };
