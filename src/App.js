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

  render() {
    
    return (
      <div className="App">
        <ThemeProvider theme={color_theme}>
          <Router fakeData={this.state.fakeData}/>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;