import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from '../spinner/index';

class Button extends React.Component {
    render () {
        const {children, type, spinner, disabled, smallScreen, onClick, href } = this.props;
       const classes = classNames('sprk-c-Button', {
            'sprk-c-Button--primary': type === 'primary',
            'sprk-c-Button--secondary': type === 'secondary',
            'sprk-c-Button--removal': type === 'removal',
            'sprk-c-Button--tertiary': type === 'tertiary',
            'is-Disabled': disabled === true,
            'sprk-c-Button--full@sm': smallScreen === true
        });

       const content = spinner ? <Spinner/> : children;

       if (href) {
          return <a href={href} onClick={onClick} className={classes}>{content}</a>;
       }

        return <button className={classes} onClick={onClick}> {content} </button>;
    }
}

Button.propTypes = {
    children: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'removal', 'disabled']),
    spinner: PropTypes.bool,
    smallScreen: PropTypes.bool,
    disabled: PropTypes.bool,
    href: PropTypes.string
};


export default Button;
