import React from 'react';
import { ThemeProvider } from "styled-components";
import Router from './structure/Router';
import color_theme from './config/color_theme';
import 'antd/dist/antd.css';
import axios from 'axios';

class App extends React.Component {
 
  state = {
      fakeData: [],
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(res => this.setState({
        fakeData: res.data
      }));
  }

  delItem = (id) => {
    this.setState({
      fakeData: [...this.state.fakeData.filter( fakeData => fakeData.id !== id)]
    });
  }

  addItem = (name, code) => {
    const lastItem = this.state.fakeData.slice(-1)[0].id;
    const newData = {
      id: lastItem + 1,
      name: name,
      address: {
        suite: 'Suite 123',
        zipcode: code,
      }
    }

    if( name !== '' && code !== ''){
      this.setState({
        fakeData: [...this.state.fakeData, newData]
      });
    }
  }

  addUser = (name, suite, email, website) => {
    const lastItem = this.state.fakeData.slice(-1)[0].id;
    const newData = {
      id: lastItem + 1,
      name: name,
      address: {
        suite: suite,
        zipcode: '000-000'
      },
      email: email,
      website: website
    }

    if( name !== '' && suite !== '' && email !== '' && website !== ''){
      this.setState({
        fakeData: [...this.state.fakeData, newData]
      });
    }
  }

  render() {
    
    return (
      <div className="App">
        <ThemeProvider theme={color_theme}>
          <Router delItem={this.delItem} addItem={this.addItem} addUser={this.addUser} fakeData={this.state.fakeData}/>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;