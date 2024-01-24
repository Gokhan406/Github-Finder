import React, { Component } from 'react'

export class Inputs extends Component {
  constructor(props){
    super(props);
    this.get_name = this.get_name.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      keyword:""
    }
  }

  get_name(event){
    event.preventDefault();

    const item_name = event.target.value;
    this.setState({keyword:item_name});
  }

  search(event){
    event.preventDefault();
    if(this.state.keyword !== ""){
      this.props.search(this.state.keyword);
      this.setState({keyword:""})
    }
  }

  render() {
    return (
        <div className='container my-3'>
            <form onSubmit={this.search}>
                <div className='input-group'>
                  <input type="text" value={this.state.keyword} className='form-control' onChange={this.get_name} name='txt_name'placeholder='Anahtar Kelime'/>
                  {this.props.users.length > 0 ? <button type='button' onClick={this.props.clear} className='btn btn-danger'>Temizle</button>:""}
                  <button type='submit' className='btn btn-primary'>Ara</button>
                </div>
            </form>
        </div>
        
    )
  }
}

export default Inputs