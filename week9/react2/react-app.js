class Message extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			text: this.props.text
		}
		this.changeMessage = this.changeMessage.bind(this)
	}

	render(){
		return <div>
					<div className='message'>{this.state.text}</div>
					<input onChange={this.changeMessage} type='text' value={this.state.text} />
				</div>
	}

	changeMessage(event){
		this.setState({text: event.target.value})
	} 


}


ReactDOM.render(
	<Message />,
	document.getElementById("react")
)
