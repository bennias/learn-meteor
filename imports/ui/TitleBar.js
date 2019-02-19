import PropTypes from 'prop-types';
import React from 'react';

class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2 className="titleBar__subtitle">{this.props.subtitle}</h2>;
    }
  }
  render() {
    return (
      <div className="titleBar">
        <h1 className="titleBar__title">{this.props.title}</h1>
        {this.renderSubtitle()}
      </div>
    );
  }
}
TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TitleBar;
