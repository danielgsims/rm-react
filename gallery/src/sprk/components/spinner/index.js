import React from 'react';
import PropTypes from 'prop-types';

class Spinner extends React.Component {
     render () {
        if (this.props.large) {
            return <span className="sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--large"> </span>
        }

        return <span className="sprk-c-Spinner sprk-c-Spinner--circle"> </span>
    }
}

Spinner.propTypes = {
    large: PropTypes.bool
};

export default Spinner;
