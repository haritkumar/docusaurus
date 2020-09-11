import React from 'react';

class ApiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.state = {
      todo: []
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  
  mySubmitHandler(e){ 
    e.preventDefault();
    const postid = e.target.elements.postid.value;
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/'+postid+'/comments';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          todo: data
        })
      });
  }
 

  

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h5>Enter todo ID</h5>
        <input id="postid" type="text" autoFocus />
        
        <input type='submit' value="Get TODO"/>
        {this.state.todo.map((user,index) => <p> {index+1}. {user.name}</p>)}
      </form>
      
    );
  }
}
export default ApiComponent;
