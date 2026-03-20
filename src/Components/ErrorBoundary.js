import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-400 mb-6 max-w-md">
              We're sorry for the inconvenience. Please try refreshing the page or go back to the home page.
            </p>
            <div className="bg-red-900 bg-opacity-20 border border-red-500 rounded p-4 mb-6 text-left">
              <p className="text-sm text-gray-300 break-all">
                {this.state.error?.toString()}
              </p>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
