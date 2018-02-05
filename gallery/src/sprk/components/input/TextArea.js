import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
    render() {
        return (<React.Fragment>
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <textarea className="sprk-b-TextInput sprk-u-Size-100" id={this.props.id}></textarea>
        </React.Fragment>);
    }
}

TextArea.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
};


export default TextArea;
