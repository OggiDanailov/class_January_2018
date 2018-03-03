// Write two methods that render two inputs -  one for Post title Post content



class Post extends React.Component{
	constructor(){
		super()
		this.state = {
			title: '',
			content: "",
			latestPost: {
				title: '',
				content: ''
			}
		}

		this.updateTitle = this.updateTitle.bind(this);
		this.updateContent = this.updateContent.bind(this);
		this.updateLatestPost = this.updateLatestPost.bind(this);
	}

	render(){
		return <div>
					<div>Title: {this.state.title}</div>
					<div>Content: {this.state.content}</div>

					
					Title: <input onChange={this.updateTitle} value={this.state.title}  />
					<br />
					<br />
					Content: <input onChange={this.updateContent} value={this.state.content}  />
					<br />
					<br />
					<button onClick={this.updateLatestPost}>Post latest</button>
					<hr />
					<h2> Latest Post Title:</h2>
					<div> {this.state.latestPost.title} </div>
					<h2> Latest Post Content:</h2>
					<div> {this.state.latestPost.content} </div>
				</div>
	}

	updateLatestPost(){
		this.setState({
			latestPost: {title: this.state.title, content: this.state.content},
			title: '',
			content: ""			
		})
	}

	updateTitle(e){
		this.setState({title: e.target.value })
	}

	updateContent(e){
		this.setState({content: e.target.value })
	}
		
		

}




ReactDOM.render(
<Post />,
document.getElementById('main-app')	
	)