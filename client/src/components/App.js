import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SidebarMenu from './SidebarMenu';
import Page1 from './Page1';
import Page2 from './Page2';
import NewStream from './NewStream';

class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <SidebarMenu />
          <Switch>
            <Route exact path="/" component={Page1}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
            <Route path="/newstream" component={NewStream}/>
          </Switch>
        </div>
      </Router>


    );
  }

}

export default App;
