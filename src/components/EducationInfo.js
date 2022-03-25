import { Component } from 'react';
import PropTypes from 'prop-types';
import EditableEducationInfo from './EditableEducationInfo';
import StaticEducationInfo from './StaticEducationInfo';

export default class EducationInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			degree: props.degree,
			major: props.major,
			school: props.school,
			startDate: props.startDate,
			endDate: props.endDate,
			location: props.location,
			editable: false,
		};

		this.handleDegreeChange = this.handleDegreeChange.bind(this);
		this.handleMajorChange = this.handleMajorChange.bind(this);
		this.handleSchoolChange = this.handleSchoolChange.bind(this);
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSave = this.handleSave.bind(this)
		this.handleEditable = this.handleEditable.bind(this)
	}

	handleDegreeChange(e) {
		this.setState({
			degree: e.target.value,
		});
	}

	handleMajorChange(e) {
		this.setState({
			major: e.target.value,
		});
	}

	handleSchoolChange(e) {
		this.setState({
			school: e.target.value,
		});
	}

	handleStartDateChange(e) {
		this.setState({
			startDate: e.target.value,
		});
	}

	handleEndDateChange(e) {
		this.setState({
			endDate: e.target.value,
		});
	}

	handleLocationChange(e) {
		this.setState({
			location: e.target.value,
		});
	}

	handleEditable() {
		this.setState({
			editable: true,
		});
	}

	handleSave() {
		this.setState({
			editable: false,
		});
	}

	render() {
		const { editMode, degree, major, school, startDate, endDate, location} = this.props;
		const { editable } = this.state;
		if (editable && editMode) {
			return (
				<EditableEducationInfo
					editMode={editMode}
					degree={degree}
					major={major}
					school={school}
					startDate={startDate}
					endDate={endDate}
					location={location}
					onDegreeChange={this.handleDegreeChange}
					onMajorChange={this.handleMajorChange}
					onSchoolChange={this.handleSchoolChange}
					onStartDateChange={this.handleStartDateChange}
					onEndDateChange={this.handleEndDateChange}
					onLocationChange={this.handleLocationChange}
					onSave={this.handleSave}
				/>
			);
		} else {
			return (
				<StaticEducationInfo
					editMode={editMode}
					degree="Degree"
					major="Major"
					school="Institution"
					startDate="StartDate"
					endDate="EndDate"
					location="Location"
					onEdit={this.handleEditable}
				/>
			);
		}
	}
}


EditableEducationInfo.propTypes = {
    editMode: PropTypes.bool,
	degree: PropTypes.string, 
	major: PropTypes.string, 
	location: PropTypes.string, 
	startDate: PropTypes.string,
	endDate: PropTypes.string,
};