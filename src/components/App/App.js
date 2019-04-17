import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from '../../components/Display/Display'
import { setDataThunk } from '../../Thunks/setDataThunk'
import { connect } from 'react-redux'
import Loader from '../Loader/Loader'

export class App extends Component {

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = ' http://localhost:3001/api/v1/houses'
    await this.props.setData(url)
  }

  render() {
    if (this.props.houses.length) {
      return (
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to Westeros</h2>
            
          </div>
          <div className='Display-info'>
            <Display houses={this.props.houses} />
          </div>
        </div>
      );

    } else {
      return (<Loader />)
    }
  }

}

export const mapStateToProps = state => ({
  houses: state.houses,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
})

export const mapDispatchToProps = dispatch => ({
  setData: (url) => dispatch(setDataThunk(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
