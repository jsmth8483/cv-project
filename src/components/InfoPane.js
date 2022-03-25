import { Component } from 'react';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';

export default class InfoPane extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="info-pane">
				<ContactInfo
					editMode={this.props.editMode}
					email="email@email.com"
					phone="###-###-####"
					location="City, State"
					linkedInLink="#"
				/>
				<EducationInfo editMode={this.props.editMode} degree="Degree"
					major="Major"
					school="Institution"
					startDate="StartDate"
					endDate="EndDate"
					location="Location" />
			</div>
		);
	}
}
