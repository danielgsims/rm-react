import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//@todo - for Monetary, blur to format value
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.blur = this.blur.bind(this);
    }

    render() {
        const { label, error, placeholder, type, id, helperText, disabled} = this.props;
        const classes = classNames('sprk-b-TextInput', 'sprk-u-Size-100', {
            sprk-b-TextInput--error: error === true,
            sprk-b-TextInput--monetary: type === 'monetary',
        });

        return (<React.Fragment>
            <label htmlFor={id}>{label}</label>
            <input disabled={disabled} className={classes} id={id} type={type} placeholder={placeholder} />
            {helperText && <span className="sprk-b-HelperText">{helperText}</span>}
        </React.Fragment>);
    }
}

TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'monetary']),
    error: PropTypes.bool,
    id: PropTypes.string,
    helperText: PropTypes.string,
    disabled: PropTypes.bool
};


export default TextInput;
