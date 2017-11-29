import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
} from 'semantic-ui-react';

const propTypes = {
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default class SidebarMenu extends Component {
  componentDidMount() {
    //https://www.hawatel.com/blog/handle-window-resize-in-react/
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          width="thin"
          visible={this.props.visible}
          icon="labeled"
          vertical
          inverted
        >
          <Menu.Item name="home">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item name="gamepad">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item name="camera">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

SidebarMenu.propTypes = propTypes;
