import * as React from 'react';

const Spinner: React.SFC = () => {
  return (
    <div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>
  </div>
  );
}

export default Spinner;