import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

export interface LayoutProps {
  children: React.ReactNode;
  history?: any;
  location?: any;
}

const _Layout: React.SFC<LayoutProps> = ({
  children
}) => {
  return (
    <div className="container">
      <header>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">Pizza Builder</a>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default withRouter(connect<{}, {}, LayoutProps & RouteComponentProps>(null)(_Layout));

