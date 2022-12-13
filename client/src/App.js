import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
          ## multi-docker2
          This repo updates multi-docker1 repo to use GitHub actions instead of TravisCI

          ## Guide to Build a Multi-container App, test and Deploy Application in AWS EBS with AWS ElastiCache and AWS RDS using Github Actions

          This project pushes a multi-container application to a GitHub Repo where it is tested then the images are pushed to Docker Hub. A docker-compose file is then used to deploy the application on AWS Elastic Beanstalk service making use of AWS RDS as a database and AWS ElastiCache as an In-Memory Cache.
          </p>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
