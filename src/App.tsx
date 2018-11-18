import * as React from 'react';
import './App.css';

enum Suit {
    Clubs = 1,
    Diamonds,
    Hearts,
    Spades
}

enum Value {
    One, Two, Three, Four, Five, Six, Seven,
    Eight, Nine, Ten, Jack, Queen, King, Ace
}

interface


class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header>
                    <h1 className="App-title">Learn Your Sklansky Table</h1>
                </header>
            </div>
        );
    }
}

export default App;
