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
	}

	render(){
		return <div>{this.text}</div>	
	}
}


ReactDOM.render(
	<Message text="whatever I found to me and my people" />,
	document.getElementById('react')
	)