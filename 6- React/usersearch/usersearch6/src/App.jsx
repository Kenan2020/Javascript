import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Users from './components/users/Users.jsx';
import Search from "./components/users/Search.jsx"
import Alert from "./components/layout/Alert.jsx"
import About from "./components/layout/About.jsx"
import axios from "axios"


class App extends Component {//sub and super
  //having one state for our all react application
  state = {
    users: [],
    loading: false,
    alert : null
  }
  
  searchText = async text =>{
    this.setState({loading : true})
    const APIKey = process.env.REACT_APP_CLIENT_ID
    const APISecret = process.env.REACT_APP_CLIENT_SECRET
    console.log(APIKey);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${APIKey}&client_secret=${APISecret}`)
    this.setState({users : res.data})
    console.log(this.state.users);
    this.setState({users: res.data.items, loading : false})
  }
  clearUsers = ()=>{
    this.setState({users:[], loading: false})

  }
  setAlert = (msg, type) =>{
    this.setState({alert : {msg, type }})
    setTimeout(() => {
      this.setState({alert : null})
      
    }, 5000);
  }
  removeAlert = ()=>{
    this.setState({alert : null})
  }
  
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Alert alert = {this.state.alert} removeAlert = {this.removeAlert} />
        <Switch>
          <Route  exact path="/" render={props => 
          <Fragment>
            <Search searchValue={this.searchText} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert}/>
            <Users loading = {this.state.loading} users = {this.state.users}/>
          </Fragment>
          } />
          <Route path="/about" component={About} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
