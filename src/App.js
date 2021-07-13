import './App.css';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    state = {
        palindromeResult: '',
    }

    checkIfPalindrome = (text) => {
        if (text.length === 0 || text.length === 1) {
            return true;
        } else if (text.charAt(0) !== text.charAt(text.length - 1)) {
            return false;
        } else {
            return this.checkIfPalindrome(text.slice(1, text.length - 1));  // remember: the 2nd parameter of slice() is noninclusive
        }
    }

    handleChange = (e) => {
        let text = this.myRef.current.value;
        this.setState({ palindromeResult: `${text} ${this.checkIfPalindrome(text) ? 'is' : 'is not'} a palindrome` })
    }

    render() {
        return (
            <div className="App" >
                <input type='text' onChange={this.handleChange} ref={this.myRef} />
                <p>{this.state.palindromeResult}</p>
            </div>
        );
    }
}

export default App;
