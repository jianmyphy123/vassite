import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SidebarMenu from './SidebarMenu';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
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
            <Route path="/page3" component={Page3}/>
            <Route path="/page4" component={Page4}/>
            <Route path="/page5" component={Page5}/>
            <Route path="/page6" component={Page6}/>
            <Route path="/page7" component={Page7}/>
            <Route path="/newstream" component={NewStream}/>
          </Switch>
        </div>
      </Router>


    );
  }

}

export default App;
