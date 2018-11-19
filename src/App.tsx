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

class Card {
    value: Value;
    suit: Suit;
    constructor(v: Value, s: Suit) {
        this.value = v;
        this.suit = s;
    }
    toString() {
        return "TODO: implement"
    }
}

class StartingHand {
    value1: Value;
    value2: Value;
    suited: boolean;
    constructor(v1: Value, v2: Value, suited: boolean) {
        this.value1 = v1;
        this.value2 = v2;
        this.suited = suited;
    }
}

// encode the Sklansky table (http://pokermistery.com/starting-hands-chart)
const SklanskyTable = {
    1: [
        new StartingHand(Value.Ace, Value.King, false),
        new StartingHand(Value.King, Value.King, false),
        new StartingHand(Value.Queen, Value.Queen, false),
        new StartingHand(Value.Jack, Value.Jack, false),
        new StartingHand(Value.Ace, Value.King, true)],
    2: [
        new StartingHand(Value.Ten, Value.Ten, false),
        new StartingHand(Value.Ace, Value.Queen, true),
        new StartingHand(Value.Ace, Value.Jack, true),
        new StartingHand(Value.King, Value.Queen, true),
        new StartingHand(Value.Ace, Value.King, false),
    ],
    3: [
        new StartingHand(Value.Nine, Value.Nine, false),
        new StartingHand(Value.Jack, Value.Ten, true),
        new StartingHand(Value.Queen, Value.Jack, true),
        new StartingHand(Value.King, Value.Jack, true),
        new StartingHand(Value.Ace, Value.Ten, true),
        new StartingHand(Value.Ace, Value.Queen, false),
    ],
    4: [
        new StartingHand(Value.Ten, Value.Nine, true),
        new StartingHand(Value.King, Value.Queen, false),
        new StartingHand(Value.Eight, Value.Eight, false),
        new StartingHand(Value.Queen, Value.Ten, true),
        new StartingHand(Value.Nine, Value.Eight, true),
        new StartingHand(Value.Jack, Value.Nine, true),
        new StartingHand(Value.Ace, Value.Jack, false),
        new StartingHand(Value.King, Value.Ten, true),
    ],
    5: [
        new StartingHand(Value.Seven, Value.Seven, false),
        new StartingHand(Value.Eight, Value.Seven, true),
        new StartingHand(Value.Queen, Value.Nine, true),
        new StartingHand(Value.Ten, Value.Eight, true),                        
        new StartingHand(Value.King, Value.Jack, false),
        new StartingHand(Value.Queen, Value.Jack, false),
        new StartingHand(Value.Jack, Value.Ten, false),
        new StartingHand(Value.Seven, Value.Six, true),                                                
        new StartingHand(Value.Nine, Value.Seven, true),                                                

        // fill in the rest of the suited aces
        new StartingHand(Value.Ace, Value.Nine, true),                                                
        new StartingHand(Value.Ace, Value.Eight, true),                                                
        new StartingHand(Value.Ace, Value.Seven, true),                                                
        new StartingHand(Value.Ace, Value.Six, true),                                                
        new StartingHand(Value.Ace, Value.Five, true),                                                                        
        new StartingHand(Value.Ace, Value.Four, true),                                                                        
        new StartingHand(Value.Ace, Value.Three, true),                                                                        
        new StartingHand(Value.Ace, Value.Two, true),                                                                        
 
        new StartingHand(Value.Six, Value.Five, true),                                                
    ],
    6: [
        new StartingHand(Value.Six, Value.Six, false),
        new StartingHand(Value.Ace, Value.Ten, false),
        new StartingHand(Value.Five, Value.Five, true),
        new StartingHand(Value.Eight, Value.Six, true),
        new StartingHand(Value.King, Value.Ten, false),
        new StartingHand(Value.Queen, Value.Ten, false),
        new StartingHand(Value.Five, Value.Four, true),
        new StartingHand(Value.King, Value.Nine, true),
        new StartingHand(Value.Jack, Value.Eight, true),
        new StartingHand(Value.Seven, Value.Five, true),
    ],
    7: [
        new StartingHand(Value.Four, Value.Four, false),
        new StartingHand(Value.Jack, Value.Nine, false),
        new StartingHand(Value.Six, Value.Four, true),
        new StartingHand(Value.Ten, Value.Nine, false),
        new StartingHand(Value.Five, Value.Three, true),
        new StartingHand(Value.Three, Value.Three, false),
        new StartingHand(Value.Nine, Value.Eight, false),
        new StartingHand(Value.Four, Value.Three, true),
        new StartingHand(Value.Two, Value.Two, false),
        
        // fill in the rest of the suited kings
        new StartingHand(Value.King, Value.Nine, true),
        new StartingHand(Value.King, Value.Eight, true),
        new StartingHand(Value.King, Value.Seven, true),
        new StartingHand(Value.King, Value.Six, true),
        new StartingHand(Value.King, Value.Five, true),
        new StartingHand(Value.King, Value.Four, true),
        new StartingHand(Value.King, Value.Three, true),
        new StartingHand(Value.King, Value.Two, true),

        new StartingHand(Value.Ten, Value.Seven, true),
        new StartingHand(Value.Queen, Value.Eight, true),
    ],
    8: [
        new StartingHand(Value.Eight, Value.Seven, false),
        new StartingHand(Value.Ace, Value.Nine, false),
        new StartingHand(Value.Queen, Value.Nine, false),
        new StartingHand(Value.Seven, Value.Six, false),
        new StartingHand(Value.Four, Value.Two, true),
        new StartingHand(Value.Three, Value.Two, true),
        new StartingHand(Value.Nine, Value.Six, true),
        new StartingHand(Value.Eight, Value.Five, true),
        new StartingHand(Value.Five, Value.Eight, false),
        new StartingHand(Value.Jack, Value.Seven, true),
        new StartingHand(Value.Six, Value.Five, false),
        new StartingHand(Value.Five, Value.Four, false),
        new StartingHand(Value.Seven, Value.Four, true),
        new StartingHand(Value.King, Value.Nine, false),
        new StartingHand(Value.Ten, Value.Eight, false),
    ]
}

function getSklanskyValue(hand: StartingHand): number {
    return -1;
}



class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header>
                    <h1 className="App-title">Learn Your Sklansky Table</h1>
                </header>
                <div>
                    TODO: fill in cards + {new Card(Value.One, Suit.Clubs).toString()}
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default App;
