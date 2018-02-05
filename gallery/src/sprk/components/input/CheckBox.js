import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
    render() {
        return <div className="sprk-b-SelectionContainer">
            <input id={this.props.id} type="checkbox" aria-labelledby={this.props.ariaLabeledBy} />
                <label htmlFor={this.props.id} className="sprk-b-Label--inline sprk-u-mls">{this.props.label}</label>
        </div>
    }
}

Checkbox.propTypes = {
    ariaLabeledBy: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string
};

export default Checkbox;