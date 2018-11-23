import * as React from 'react';
import './App.css';

// Model

enum Suit {
    Clubs = 1,
    Diamonds,
    Hearts,
    Spades
}

const suits: Array<Suit> = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];

enum Value {
    Two = 2, Three, Four, Five, Six, Seven,
    Eight, Nine, Ten, Jack, Queen, King, Ace
}

const values: Array<Value> = [Value.Two, Value.Three, Value.Four, Value.Five, Value.Six, Value.Seven,
Value.Eight, Value.Nine, Value.Ten, Value.Jack, Value.Queen, Value.King, Value.Ace];

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

        return `${strVal.get(this.value)}${strSuit.get(this.suit)}`;
    }

    equals(other: Card): boolean {
        return this.value === other.value && this.suit === other.suit;
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

function ResultPanel(props: any) {
    let classSuffix: string;
    let message: string = "";
    if (props.result === undefined) {
        classSuffix = "none";
    } else {
        let result: boolean = props.result;
        classSuffix = result ? "true" : "false";
        message = result ? "Correct!" : "Incorrect. No worries. Try again!";
    }

    return (
        <div className={"App-result-" + classSuffix}>{message}</div>
    );
}

type AppState = {
    card1: Card,
    card2: Card,
    answer?: number,
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props)
        this.state = this.resetState();
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick(val: number) {
        console.log(val)
        this.setState({ ...this.state, answer: val });
    }

    private resetState(): AppState {
        let card1 = new Card(values[Math.floor(Math.random() * 13)], suits[Math.floor(Math.random() * 4)]);
        let card2 = new Card(values[Math.floor(Math.random() * 13)], suits[Math.floor(Math.random() * 4)]);
        while (card1.equals(card2)) {
            card2 = new Card(values[Math.floor(Math.random() * 13)], suits[Math.floor(Math.random() * 4)]);
        }
        return { card1: card1, card2: card2, answer: undefined };
    }

    public render() {
        let hand = new StartingHand(this.state.card1.value, this.state.card2.value, this.state.card1.suit === this.state.card2.suit)

        // show the result if there's an answer
        let result;
        if (this.state.answer !== undefined) {
            let correct = getSklanskyValue(hand);
            result = this.state.answer === correct;
        }

        return (
            <div className="App">
                <header>
                    <h1 className="App-title">Learn Your Sklansky Table</h1>
                </header>
                <div>
                    <img src={`/svgs/${this.state.card1.toString()}.svg`} />
                    <img src={`/svgs/${this.state.card2.toString()}.svg`} />
                </div>
                <div>
                    Slansky rank: {getSklanskyValue(hand)}
                </div>
                <AnswerPanel onClickHandler={this.handleClick} />
                <ResultPanel result={result} />
            </div>
        );
    }
}

export default App;
