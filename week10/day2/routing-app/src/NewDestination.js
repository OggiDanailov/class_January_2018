import React, { Component } from 'react';
import axios from 'axios';

class NewDestination extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: "",
			description: "",
			img_url: ""
		}

		this.createName = this.createName.bind(this)
		this.createDescription = this.createDescription.bind(this)
		this.createImage = this.createImage.bind(this)
		this.createDestination = this.createDestination.bind(this)
	}


	render(){
		return (
			<div>
				Name<input type='text' onChange={this.createName} />
				<br />
				Description<input type='text' onChange={this.createDescription} />
				<br />
				Images<input type='text' onChange={this.createImage} />
				<br />
				<input type='submit' onClick={this.createDestination} />
			</div>
		)
	}
	createName(event){
		this.setState({
			name: event.target.value
		})
	}

	createDescription(event){
		this.setState({
			description: event.target.value
		})
	}

	createImage(event){
		this.setState({
			img_url: event.target.value
		})
	}

	createDestination(){
		axios.post("/destinations", {
				name: this.state.name,
				description: this.state.description,
				img_url: this.state.img_url
		}).then(function(response) {
			console.log(response.data)
			// this.props.updateDestinations(response.data)
		}.bind(this))
	
	}
	

}


export default NewDestination