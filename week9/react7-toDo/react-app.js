// smart component vs dumb components - class vs. function
// Warning: each key in child in an array ... error; we need to pass key and index in the map function

class ToDoListApp extends React.Component{
		constructor(props){
			super(props);
			this.state = {
				mySchedule: props.todoList 
			}
		}

	render(){
		// console.log(this.state.mySchedule)
		return(
			<div>
		 		<h1>My ToDo list App</h1>
		 		<NewToDo name={this.state.updateTodos } />
		 		<MyList list={this.state.mySchedule} />
		 		
			</div>
		)
	}
	updateTodos(newName, newPriority){
		let newSchedule=this.state.mySchedule;
		newSchedule.push({newName: newName, priority: newPriority})
		this.setState({
			mySchedule: newSchedule
		})
	}

}

class NewToDo extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			newName: '',
			newPriority: ''
		}

		this.updateContent = this.updateContent.bind(this)
		this.updatePriority = this.updatePriority.bind(this)
		this.addToList = this.addToList.bind(this)
	}

	render(){
		return(
			<div>
				<input onChange={this.updateContent} type='text' placeholder='content' />
				

				<select onChange={this.updatePriority}>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
				<br />
				<br />
				<button onClick={this.addToList}>Button</button>
				<br />
				<br />
			</div>
		)
	}

	updateContent(e){
		this.setState({
			newName: e.target.value
		})
	}

	updatePriority(e){
		this.setState({
			newPriority: e.target.value
		})

	}

	addToList(){ 
		this.props.NewToDo(this.state.newName, this .state.newPriority)
	}

}



function MyList(props){

	var list = props.list.map(function(item, index){
		return <div key={index} className={item.priority}>{item.name}</div>
				
	})
	return( 
		<div>
			<div>{list}</div>
		</div>	
		)

}

var listing = [
	{
		name: 'Going to work',
		priority: 'low'
	},
	{
		name: "going to the NY office party",
		priority: 'high'
	},
	{
		name: 'getting a new dog',
		priority: 'medium'
	},
	{
		name: 'paying my taxes',
		priority: 'ow'
	}
]


ReactDOM.render(
<ToDoListApp todoList={listing} />,
document.getElementById('root')	
)