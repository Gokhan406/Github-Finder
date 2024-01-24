import React, { Component } from 'react'
import User from './User'
import Loading from './Loading';

export class UserList extends Component {
  render() {
    if(this.props.loading){
      return <Loading/>
    }
    else{
      if(this.props.users.length > 0){
        return this.props.users.map((user,index) => <User user={user} key={index}/>)
      }
      else if((!this.props.users.length > 0)&& (this.props.error === true)){
        return <p>Sonuç Bulunamadı</p>
      }
    }
  }
}

export default UserList