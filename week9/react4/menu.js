class Menu extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return(
			<div className='side-menu'>
				<ul>	
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>

				</ul>
			</div>
		)
	}
}




class Hamburger extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return(
			<div onClick={this.renderMenu}>Hamburger</div>	
		)
	}


	renderMenu(){
		ReactDOM.render(
		<Menu />,
		document.getElementsByClassName('menu')[0]
		)
	 }
}

ReactDOM.render(
	<Hamburger />,
	document.getElementsByClassName('hamburger')[0]
)
















