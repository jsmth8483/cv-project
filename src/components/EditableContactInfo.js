import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class EditableContactInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: props.email,
			phone: props.phone,
			location: props.location,
			linkedInLink: props.linkedInLink,
		};

		this.handlePhoneChange = this.handlePhoneChange.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handleLocationChange = this.handleLocationChange.bind(this)
		this.handleLinkedInLinkChange = this.handleLinkedInLinkChange.bind(this)

	}

	handlePhoneChange(e) {
		this.setState({
			phone: e.target.value,
		});
		this.props.onPhoneChange(e);
	}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value,
		});
		this.props.onEmailChange(e);
	}

	handleLocationChange(e) {
		this.setState({
			location: e.target.value,
		});
		this.props.onLocationChange(e);
	}

	handleLinkedInLinkChange(e) {
		this.setState({
			linkedInLink: e.target.value,
		});
		this.props.onLinkedInLinkChange(e);
	}

	render() {
		const { phone, email, location, linkedInLink } = this.state;
		return (
			<div className="contact-info info-section">
				<div className="info-header">
					<h4>Contact</h4>
					<Button text="Save" onClickButton={this.props.onSave}/>
				</div>

				<p>
					<input
						value={email}
						onChange={this.handleEmailChange}
					/>
				</p>
				<p>
					<input
						value={phone}
						onChange={this.handlePhoneChange}
					/>
				</p>
				<p>
					<input
						value={location}
						onChange={this.handleLocationChange}
					/>
				</p>
				<p>
					<input
						value={linkedInLink}
						onChange={this.handleLinkedInLinkChange}
					/>
				</p>
			</div>
		);
	}
}

EditableContactInfo.propTypes = {
    editMode: PropTypes.bool,
	phone: PropTypes.string, 
	email: PropTypes.string, 
	location: PropTypes.string, 
	linkedInLink: PropTypes.string
};
