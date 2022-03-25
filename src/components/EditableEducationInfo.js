import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class EditableEducationInfo extends Component {
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
	}

    handleDegreeChange(e) {
		this.setState({
			degree: e.target.value,
		});
        this.props.onDegreeChange(e);
	}

	handleMajorChange(e) {
		this.setState({
			major: e.target.value,
		});
        this.props.onMajorChange(e);
	}

	handleSchoolChange(e) {
		this.setState({
			school: e.target.value,
		});
        this.props.onSchoolChange(e);
	}

	handleStartDateChange(e) {
		this.setState({
			startDate: e.target.value,
		});
        this.props.onStartDateChange(e);
	}

	handleEndDateChange(e) {
		this.setState({
			endDate: e.target.value,
		});
        this.props.onEndDateChange(e);
	}

	handleLocationChange(e) {
		this.setState({
			location: e.target.value,
		});
        this.props.onLocationChange(e);
	}

	render() {
		const { degree, major, school, startDate, endDate, location, editable } =
			this.state;
		return (
			<div className="education-info info-section">
				<div className="info-header">
                     <h4>Education</h4>
                     <Button text="Save" onClickButton={this.props.onSave}/>
                </div>
				<p>
					<input value={degree} onChange={this.handleDegreeChange} />
				</p>
				<p>
					<input value={major} onChange={this.handleMajorChange} />
				</p>
				<p>
					<input value={school} onChange={this.handleSchoolChange} />
				</p>
				<p>
					<input value={startDate} onChange={this.handleStartDateChange} /> -{' '}
					<input value={endDate} onChange={this.handleEndDateChange} />
				</p>
				<p>
					<input value={location} onChange={this.handleLocationChange} />
				</p>
			</div>
		);
	}
}


EditableEducationInfo.propTypes = {
    editMode: PropTypes.bool,
	degree: PropTypes.string, 
	major: PropTypes.string, 
	location: PropTypes.string, 
	startDate: PropTypes.string,
	endDate: PropTypes.string,
    onSave: PropTypes.func
};
