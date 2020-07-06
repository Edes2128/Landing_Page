import React from 'react';
import NavBar from './components/navbar';
import {Switch,Route} from 'react-router-dom'
import Website from './components/pages/website';
import Marketing from './components/pages/marketing';
import Aplikacion from './components/pages/aplikacion';

function App() {
  return (
    <div>
      <header className="App-header">
        <div className="logo"><a href="/"><img src="4.jpg" alt=""/></a></div>
        <div className="links">
        <a className="a-link" href="https://www.instagram.com/develop_your_brand/" target="_blank"><i className="fa fa-instagram"></i></a>
        <a className="a-link" href="https://www.facebook.com/Code-IT-shpk-1922218121419737" target="_blank"><i className="fa fa-facebook"></i></a>
        <a className="a-link" href="https://www.linkedin.com/in/codeit-develop-your-brand-b9267a189/" target="_blank"><i className="fa fa-linkedin"></i></a>
        </div>
      </header>

      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Website}/>
          <Route exact path="/marketing" component={Marketing}/>
          <Route exact path="/aplikacion" component={Aplikacion} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
