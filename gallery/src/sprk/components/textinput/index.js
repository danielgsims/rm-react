import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
    render() {
        const { label, error, placeholder, type, id, helperText, disabled} = this.props;
        return (<React.Fragment>
            <label htmlFor={id}>{label}</label>
            <input disabled={disabled} className="sprk-b-TextInput sprk-u-Size-100" id={id} type={type} placeholder={placeholder} />
            {helperText && <span className="sprk-b-HelperText">{helperText}</span>}
        </React.Fragment>);
    }
}

TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password']),
    error: PropTypes.string,
    id: PropTypes.string,
    helperText: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool
};


export default TextInput;
