import PropTypes from 'prop-types';
import React from 'react';

class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2>{this.props.subtitle}</h2>;
    }
  }
  render() {
    return (
      <div className="titleBar">
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
      </div>
    );
  }
}
TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default TitleBar;
