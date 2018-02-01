import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from '../spinner/index';

class Button extends React.Component {
    render () {
        const {children, type, spinner, disabled, smallScreen, onClick } = this.props;
       const classes = classNames('sprk-c-Button', {
            'sprk-c-Button--primary': type === 'primary',
            'sprk-c-Button--secondary': type === 'secondary',
            'sprk-c-Button--removal': type === 'removal',
            'sprk-c-Button--tertiary': type === 'tertiary',
            'is-Disabled': disabled === true,
            'sprk-c-Button--full@sm': smallScreen === true
        });

        return <button className={classes} onClick={onClick}>
            { spinner ? <Spinner/> : children}
        </button>
    }
}

Button.propTypes = {
    children: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'removal', 'disabled']),
    spinner: PropTypes.bool,
    smallScreen: PropTypes.bool,
    disabled: PropTypes.bool,
};


export default Button;
