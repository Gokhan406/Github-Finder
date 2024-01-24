import React, { Component } from 'react'

export class User extends Component {
    render() {
        return(
            <div className="card mb-3">
                <div className='row g-0'>
                    <div className="col-md-3">
                        <img className='img-fluid rounded-start avatar' src={this.props.user.avatar_url} alt={this.props.user.name} />
                    </div>
                    <div className='col-md-9'>
                        <div className="card-body">
                            <h3 className='card-title'>{this.props.user.login}</h3>
                            <a target='_blank' rel="noreferrer" href={this.props.user.html_url} className='btn btn-primary'>Github Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User