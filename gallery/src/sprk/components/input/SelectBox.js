import React from 'react';
import PropTypes from 'prop-types';

class SelectBox extends React.Component {
    render() {
        return (<React.Fragment>
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <select id={this.props.id}>
                { Object.entries(this.props.options).map(([k,v]) => <option value={k}>{v}</option>)}
            </select>
        </React.Fragment>);
    }
}
export default SelectBox;
