import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaExclamationTriangle } from 'react-icons/fa';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      showDetails: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
      // Optionally log to an error tracking service
      // logErrorToService(error, errorInfo)
    });
  }

  toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false
    });
    
    // Call the onReset callback if provided
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div 
          className="error-boundary p-6 max-w-3xl mx-auto my-8 bg-red-50 border border-red-200 rounded-lg shadow-sm"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <FaExclamationTriangle className="h-6 w-6 text-red-600" aria-hidden="true" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-red-800">
                {this.props.fallbackTitle || 'Something went wrong'}
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{this.props.fallbackMessage || 'An unexpected error occurred. Please try again later.'}</p>
              </div>
              
              {/* Error details - hidden by default */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={this.toggleDetails}
                    className="text-sm font-medium text-red-700 hover:text-red-600 focus:outline-none focus:underline"
                    aria-expanded={this.state.showDetails}
                  >
                    {this.state.showDetails ? 'Hide details' : 'Show details'} ›
                  </button>
                  
                  {this.state.showDetails && (
                    <div className="mt-3 p-3 bg-white border border-red-200 rounded-md overflow-auto max-h-64 text-xs">
                      <h4 className="font-semibold mb-1">Error:</h4>
                      <pre className="whitespace-pre-wrap text-red-800 mb-3">
                        {this.state.error?.toString()}
                      </pre>
                      
                      <h4 className="font-semibold mb-1">Component Stack:</h4>
                      <pre className="whitespace-pre-wrap text-gray-600 text-xs overflow-auto">
                        {this.state.errorInfo?.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              )}
              
              {/* Action buttons */}
              <div className="mt-6 flex space-x-3">
                <button
                  type="button"
                  onClick={this.handleReset}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  {this.props.retryText || 'Try again'}
                </button>
                
                {this.props.onHome && (
                  <button
                    type="button"
                    onClick={this.props.onHome}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Go to home
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Render children normally if there's no error
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallbackTitle: PropTypes.string,
  fallbackMessage: PropTypes.string,
  retryText: PropTypes.string,
  onReset: PropTypes.func,
  onHome: PropTypes.func,
  // You can add more specific error handling callbacks as needed
};

export default ErrorBoundary;

// Example usage:
/*
<ErrorBoundary 
  fallbackTitle="Oops!"
  fallbackMessage="We're having trouble loading this content."
  retryText="Retry"
  onReset={() => console.log('Error boundary reset')}
  onHome={() => navigate('/')}
>
  <ComponentThatMightError />
</ErrorBoundary>

// Or wrap your entire app in App.js:
<ErrorBoundary>
  <App />
</ErrorBoundary>
*/
