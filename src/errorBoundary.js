import React from 'react';
import Typography from '@material-ui/core/Typography'
import { logError } from './actions/errorLog';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
      logError(error, errorInfo)
        .then(() => console.log('error logged'))
        .catch((e) => console.log('failed to log', e))
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <Typography variant='h2' color='secondary'>Something went wrong.</Typography>;
      }

      return this.props.children;
    }
  }

  export default ErrorBoundary;
