import { Component } from 'react';
import PropTypes from 'prop-types';

const isNavigatorOnline = () => navigator.onLine || false;

export default class IsOnline extends Component {
  static propTypes = {
    OnlineComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    OfflineComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    OnlineComponent: null,
    OfflineComponent: null,
    onChange: null,
  };

  state = {
    events: ['online', 'offline', 'load'],
    isOnline: isNavigatorOnline(),
  }

  componentDidMount = () => {
    this.state.events.forEach(event => window.addEventListener(event, this.updateState));
  }

  componentWillUnmount = () => {
    this.state.events.forEach(event => window.removeEventListener(event, this.updateState));
  }

  updateState = () => {
    const isOnline = isNavigatorOnline();
    this.setState({ isOnline });
    if (this.props.onChange) this.props.onChange(isOnline);
  }

  render() {
    const { OnlineComponent, OfflineComponent } = this.props;

    return this.state.isOnline ? OnlineComponent : OfflineComponent;
  }
}
