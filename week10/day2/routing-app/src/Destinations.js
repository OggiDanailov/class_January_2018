import React, { Component } from 'react';
import axios from 'axios';


class Destinations extends React.Component{
	constructor(){
		super()
		this.state = {
			destinations: []
		}		
	}

	componentWillMount(){
		axios.get("/destinations").then(function(response){
			this.setState({
				destinations: response.data
			})
		}.bind(this))
		
	}

	render(){
		let destinations = this.state.destinations.map(function(d){
			return( <div>
						<img src={d.img_url} width='300px' height='300px' />
						<div>{d.name}</div>
						<div>{d.description}</div>

					</div>
				)
		})

		return <div>{destinations}</div>
	}

}


export default Destinations