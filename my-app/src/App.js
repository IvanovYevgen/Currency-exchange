import React from 'react';
import './App.css';


import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="site">
        <Header />

        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/about" component={About} />
              </Switch>
            </Router>
          </main>
        </div>


        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">Free Online Currency Converter
        Convert My Money is a simple currency converter that allows you to quickly check the latest currency exchange rates. Upon exit the app saves the currencies you've selected. With more than 160 currencies and hourly updated conversion rates, Convert My Money is becoming a popular and proven choice when converting foreign currencies.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
          </div>
        </div>

        <Footer />
      </div >

    );
  }
}


export default App;
