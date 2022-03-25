import { Component } from "react";
import PropTypes from 'prop-types';


export default class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClickButton}>{this.props.text}</button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
	onClickButton: PropTypes.func,
};
