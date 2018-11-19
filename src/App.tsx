import * as React from 'react';
import './App.css';

// Model

enum Suit {
    Clubs = 1,
    Diamonds,
    Hearts,
    Spades
}

enum Value {
    Two = 2, Three, Four, Five, Six, Seven,
    Eight, Nine, Ten, Jack, Queen, King, Ace
}

class Card {
    value: Value;
    suit: Suit;
    constructor(v: Value, s: Suit) {
        this.value = v;
        this.suit = s;
    }
    toString(): string {
        const strVal = new Map<number, string>([
            [Value.Two, "2"],
            [Value.Three, "3"],
            [Value.Four, "4"],
            [Value.Five, "5"],
            [Value.Six, "6"],
            [Value.Seven, "7"],
            [Value.Eight, "8"],
            [Value.Nine, "9"],
            [Value.Ten, "10"],
            [Value.Jack, "J"],
            [Value.Queen, "Q"],
            [Value.King, "K"],
            [Value.Ace, "A"],
        ]);

        const strSuit = new Map<number, string>([
            [Suit.Clubs, "C"],
            [Suit.Diamonds, "D"],
            [Suit.Hearts, "H"],
            [Suit.Spades, "S"],
        ]);

        return strVal[this.value] + strSuit[this.suit];
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

    equals(sh: StartingHand): boolean {
        if (this.suited !== sh.suited) {
            return false;
        }

        let thisLower = this.value1
        let thisUpper = this.value2
        let shLower = sh.value1
        let shUpper = sh.value2

        if (thisLower > thisUpper) {
            [thisLower, thisUpper] = [thisUpper, thisLower]
        }
        if (shLower > shUpper) {
            [shLower, shUpper] = [shUpper, shLower]
        }

        return thisLower === shLower && thisUpper === shUpper;
    }
}

// encode the Sklansky table (https://en.wikipedia.org/wiki/Texas_hold_%27em_starting_hands)
const SklanskyTable = {
    1: [
        new StartingHand(Value.Ace, Value.Ace, false),
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
        new StartingHand(Value.Ace, Value.Ten, true),
        new StartingHand(Value.King, Value.Jack, true),
        new StartingHand(Value.Queen, Value.Jack, true),
        new StartingHand(Value.Jack, Value.Ten, true),
        new StartingHand(Value.Ace, Value.Queen, false),
    ],
    4: [
        new StartingHand(Value.Eight, Value.Eight, false),
        new StartingHand(Value.King, Value.Ten, true),
        new StartingHand(Value.Queen, Value.Ten, true),
        new StartingHand(Value.Jack, Value.Nine, true),
        new StartingHand(Value.Ten, Value.Nine, true),
        new StartingHand(Value.Nine, Value.Eight, true),
        new StartingHand(Value.Ace, Value.Jack, false),
        new StartingHand(Value.King, Value.Queen, false),
    ],
    5: [
        new StartingHand(Value.Seven, Value.Seven, false),

        // fill in the rest of the suited aces
        new StartingHand(Value.Ace, Value.Nine, true),
        new StartingHand(Value.Ace, Value.Eight, true),
        new StartingHand(Value.Ace, Value.Seven, true),
        new StartingHand(Value.Ace, Value.Six, true),
        new StartingHand(Value.Ace, Value.Five, true),
        new StartingHand(Value.Ace, Value.Four, true),
        new StartingHand(Value.Ace, Value.Three, true),
        new StartingHand(Value.Ace, Value.Two, true),

        new StartingHand(Value.Queen, Value.Nine, true),
        new StartingHand(Value.Ten, Value.Eight, true),
        new StartingHand(Value.Nine, Value.Seven, true),
        new StartingHand(Value.Eight, Value.Seven, true),
        new StartingHand(Value.Seven, Value.Six, true),
        new StartingHand(Value.King, Value.Jack, false),
        new StartingHand(Value.Queen, Value.Jack, false),
        new StartingHand(Value.Jack, Value.Ten, false),


        new StartingHand(Value.Six, Value.Five, true), // TODO: double check this. where does this belong?
    ],
    6: [
        new StartingHand(Value.Six, Value.Six, false),
        new StartingHand(Value.Five, Value.Five, true),
        new StartingHand(Value.King, Value.Nine, true),
        new StartingHand(Value.Jack, Value.Eight, true),
        new StartingHand(Value.Eight, Value.Six, true),
        new StartingHand(Value.Seven, Value.Five, true),
        new StartingHand(Value.Five, Value.Four, true),
        new StartingHand(Value.Ace, Value.Ten, false),
        new StartingHand(Value.King, Value.Ten, false),
        new StartingHand(Value.Queen, Value.Ten, false),
    ],
    7: [
        new StartingHand(Value.Four, Value.Four, false),
        new StartingHand(Value.Three, Value.Three, false),
        new StartingHand(Value.Two, Value.Two, false),

        // fill in the rest of the suited kings
        new StartingHand(Value.King, Value.Eight, true),
        new StartingHand(Value.King, Value.Seven, true),
        new StartingHand(Value.King, Value.Six, true),
        new StartingHand(Value.King, Value.Five, true),
        new StartingHand(Value.King, Value.Four, true),
        new StartingHand(Value.King, Value.Three, true),
        new StartingHand(Value.King, Value.Two, true),

        new StartingHand(Value.Queen, Value.Eight, true),
        new StartingHand(Value.Ten, Value.Seven, true),
        new StartingHand(Value.Six, Value.Four, true),
        new StartingHand(Value.Five, Value.Three, true),
        new StartingHand(Value.Four, Value.Three, true),
        new StartingHand(Value.Jack, Value.Nine, false),
        new StartingHand(Value.Ten, Value.Nine, false),
        new StartingHand(Value.Nine, Value.Eight, false),
    ],
    8: [
        new StartingHand(Value.Jack, Value.Seven, true),
        new StartingHand(Value.Nine, Value.Six, true),
        new StartingHand(Value.Eight, Value.Five, true),
        new StartingHand(Value.Seven, Value.Four, true),
        new StartingHand(Value.Four, Value.Two, true),
        new StartingHand(Value.Three, Value.Two, true),
        new StartingHand(Value.Ace, Value.Nine, false),
        new StartingHand(Value.King, Value.Nine, false),
        new StartingHand(Value.Queen, Value.Nine, false),
        new StartingHand(Value.Jack, Value.Eight, false),
        new StartingHand(Value.Ten, Value.Eight, false),
        new StartingHand(Value.Eight, Value.Seven, false),
        new StartingHand(Value.Seven, Value.Six, false),
        new StartingHand(Value.Six, Value.Five, false),
        new StartingHand(Value.Five, Value.Four, false),
    ]
}

// getSklanskyValue takes a starting hand and returns the Sklansky rank
// from 1 to 8, or -1 if it is unplayable.
function getSklanskyValue(hand: StartingHand): number {
    let rank: number;
    for (rank = 1; rank < 9; rank++) {
        let hands = SklanskyTable[rank]
        let h: number;
        for (h = 0; h < hands.length; h++) {
            if (hand.equals(hands[h])) {
                return rank;
            }
        }
    }
    return -1;
}

// Views

function AnswerPanel(props: any) {
    return (
        <div>
            <button onClick={() => { props.onClickHandler(1) }}>1</button>
            <button onClick={() => { props.onClickHandler(2) }}>2</button>
            <button onClick={() => { props.onClickHandler(3) }}>3</button>
            <button onClick={() => { props.onClickHandler(4) }}>4</button>
            <button onClick={() => { props.onClickHandler(5) }}>5</button>
            <button onClick={() => { props.onClickHandler(6) }}>6</button>
            <button onClick={() => { props.onClickHandler(7) }}>7</button>
            <button onClick={() => { props.onClickHandler(8) }}>8</button>
            <button onClick={() => { props.onClickHandler(-1) }}>never</button>
        </div>
    );
}

class App extends React.Component {
    private handleClick(val: number) {
        console.log(val)
    }

    public render() {
        return (
            <div className="App">
                <header>
                    <h1 className="App-title">Learn Your Sklansky Table</h1>
                </header>
                <div>
                    TODO: fill in cards + {new Card(Value.Ace, Suit.Clubs).toString()}
                </div>
                <div>
                    Test: Slansky rank of AA: + {getSklanskyValue(new StartingHand(Value.Ace, Value.King, false))}
                </div>
                <AnswerPanel onClickHandler={this.handleClick} />
            </div>
        );
    }
}

export default App;
