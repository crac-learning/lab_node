
export interface ErrorBoundaryProps {
    children: JSX.Element;
  }
  
  export interface ErrorBoundaryState {
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
  }