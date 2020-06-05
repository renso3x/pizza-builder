import * as React from 'react';

const Home:React.SFC = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome to Pizza Builder!</h1>
      <hr className="my-4" />
      <a className="btn btn-primary btn-lg" href="/choose-size" role="button">Let's Build</a>
    </div>
  );
}

export default Home;