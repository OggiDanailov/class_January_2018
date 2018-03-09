
class Message extends React.Component{
	constructor(props){
		super(props)
		this.text = props.text
		this.state = {
			name: 'something'
		}

		this.changeName = this.changeName.bind(this)
	}

	render(){
		return( 
			<div>
			<div onClick={this.changeName}>{this.props.text}</div>	
			<div>{this.state.name}</div>
			<Name />
			</div>
		)
	}

	changeName(){
		this.setState({
			name: 'whatever'
		})
	}
}

class Name extends React.Component{
	constructor(){
		super()
		this.state = {
			name: '',
			lastName: ''
		}
		this.insertName = this.insertName.bind(this)
		this.updateName = this.updateName.bind(this)
	}

	render(){
		return <div>
					<input type='text' onChange={this.insertName} />
					<input onClick={this.updateName} type='submit' />
					<div>My Name is {this.state.lastName} </div>
				</div>
	}
	insertName(e){
		this.setState({
			name: e.target.value
		})
	}

	updateName(){
		this.setState({
			lastName: this.state.name
		})
	}

	
}




ReactDOM.render(
	<Message text="whatever I found to me and my people" />,
	document.getElementById('react')
	)




