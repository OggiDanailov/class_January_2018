
class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			blogList: props.blogs  
		}

	
	}

	render(){
		return(
			<div>
				<Header />
				<div className='main-container'>
					<Blogs blogy={this.state.blogList} />
				</div>
				<Sidebar />
				<Footer />
			</div>
		)
	}


}


function Header(){
	return(
		<div className='title'>
			<header>
				<h2 className='title2'>The Amazing Blog of Oggi on React</h2>
			</header>
		</div>
	)
}
		
		

function Footer(){
	var data = new Date();
	var data = data.getFullYear()
	return(
		<div className='footer'>
			<footer>
				<p>In the cold winter of {data} Oggi built this site</p> 
			</footer>
		</div>
	)
}


class Sidebar extends React.Component{
	construnctor(props){
		
		this.changeImg = this.changeImg.bind(this)	
	}


	render(){
		return(
			<div className='side-bar'>
				<div id='s' onClick={this.changeImg} className='img'></div>
				<div className='bio'><p>This is where I grew up; literally in the mountain!!!!</p></div>
			</div>
		)
	}
	changeImg(){
		document.getElementById('s').classList.add("img2")
	}
}

function Blogs(argument){
	console.log(argument)
	var blogs = argument.blogy.map(function(b, index){
		return(
			 <div key={index} className='blog-container'>
					<h2>{b.title} </h2>
					<p>{b.content} </p>
				</div>
		)
	})

	return(
		<div>
			{blogs}
		</div>
	)
}

var blogList = [
	{
		title: 'my first pointless blog',
		content: 'blah-blah-blah-blah-blah-blah-blah-blah'

	},
	{
		title: 'my second pointless blog',
		content: 'blah-blah-blah-blah-blah-blah-blah-blah'
	},
	{
		title: 'my third pointless blog',
		content: 'blah-blah-blah-blah-blah-blah-blah-blah'
	},
	{
		title: 'my fourth pointless blog',
		content: 'blah-blah-blah-blah-blah-blah-blah-blah and so and so and so≥...'
	},
	{
		title: 'my fifth pointless blog',
		content: 'blah-blah-blah-blah-blah-blah-blah-blah and so and so and so≥...'
	}
]




ReactDOM.render(
< App blogs={blogList} />,
document.getElementsByClassName('root')[0]
)