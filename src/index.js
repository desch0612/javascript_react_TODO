import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date:new Date()};
    }

    componentDidMount() {
        this.ticker = setInterval(() => this.tick(), 1000);
    }

    componentWillMount() {
        clearInterval(this.ticker)
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    render(){
        return(
          <div>
              <h1>Aktuelle Uhrzeit: {this.state.date.toLocaleTimeString()}</h1>
          </div>
        );
    }
}

root.render(
    <Clock/>,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
