import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Inputs from "./components/Inputs";

import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)
    this.Search = this.Search.bind(this);
    this.ClearItems = this.ClearItems.bind(this);
  
    this.state = {
      loading:false,
      users:[],
      error:false
    }
  }

  Search(item_name){
    let url = "https://api.github.com/search/users?q=" + item_name;

    this.setState({loading:true});

    setTimeout(() => {
      fetch(url)
      .then(response => response.json())
      .then(data => this.setState({users:data.items , loading:false}))
    },1000)
    if(this.state.users.length === 0){
      this.setState({error:true})
    }
  }

  ClearItems(){
    this.setState({users:"",error:false})
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Inputs search={this.Search} clear={this.ClearItems} users={this.state.users}/>
        <div className="container mt-3">
          <UserList users={this.state.users} loading={this.state.loading} error={this.state.error}/>
        </div>
      </div>
    );
  }
}

export default App