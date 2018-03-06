// class Hello extends React.Component {

// 	constructor(){
// 		super()
// 	}

// 	render(){
// 		return <div>Hello </div>
// 	}

// }


// ReactDOM.render(
// 	<Hello />,
// 	document.getElementById('react')
// 	)


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
			</div>
		)
	}

	changeName(){
		this.setState({
			name: 'whatever'
		})
	}
}


ReactDOM.render(
	<Message text="whatever I found to me and my people" />,
	document.getElementById('react')
	)