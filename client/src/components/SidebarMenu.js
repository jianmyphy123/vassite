import React from 'react';
import { withRR4, Nav, NavText, NavIcon } from 'react-sidenav';

import SvgIcon from 'react-icons-kit';

import { dashboard, user, key, calendar } from 'react-icons-kit/fa';
import { weatherCloudy } from 'react-icons-kit/typicons/weatherCloudy';
import { ic_supervisor_account, ic_exit_to_app } from 'react-icons-kit/md';

const SideNav = withRR4();
const Icon20 = props => <SvgIcon size={props.size || 24} icon={props.icon} />;

const NavMain = {
    page1: { title: 'Page 1', icon: dashboard },
    page2: { title: 'Page 2', icon: weatherCloudy },
    page3: { title: 'Page 3', icon: ic_supervisor_account },
    page4: { title: 'Page 4', icon: user },
    page5: { title: 'Page 5', icon: key },
    page6: { title: 'Page 6', icon: calendar },
    page7: { title: 'Page 7', icon: ic_exit_to_app }
};

class SidebarMenu extends React.Component {

  render() {

    return (
      <div
        style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: 1000,
            display: 'inline-block',
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 10,
            paddingRight: 10,
            fontFamily: 'Roboto',
            fontSize: 16,
            width: 240,
            background: '#FFF',
            color: '#444',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
        }}
      >
        <SideNav
            highlightBgColor="#eee"
            
            highlightColor="#E91E63"
        >

          <div className="logo">
              <a href="/"> <span>Acme</span> </a>
              <a href="/" className="pull-right">
                  <i className="md md-notifications-none"></i></a>
          </div>

          {Object.keys(NavMain).map(key => {
              //dynamically created the navs
              return (
                  <Nav key={key} id={key}>
                      <NavIcon><Icon20 icon={NavMain[key].icon} /></NavIcon>
                      <NavText> {NavMain[key].title} </NavText>
                  </Nav>
              );
          })}

        </SideNav>
      </div>
    );

  }

}

export default SidebarMenu;
