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
    let selected: Set<number> = props.selected;
    return (
        <div>
            <div className="App-answer-select">
                <button onClick={() => { props.onClickHandler(1) }} disabled={!selected.has(1)}>1</button>
                <div><input type="checkbox" checked={selected.has(1)} onChange={() => { props.onChangeHandler(1) }} /></div>
            </div>
            <div className="App-answer-select" >
                <button onClick={() => { props.onClickHandler(2) }} disabled={!selected.has(2)}>2</button>
                <div><input type="checkbox" checked={selected.has(2)} onChange={() => { props.onChangeHandler(2) }} /></div>
            </div>
            <div className="App-answer-select">
                <button onClick={() => { props.onClickHandler(3) }} disabled={!selected.has(3)}>3</button>
                <div><input type="checkbox" checked={selected.has(3)} onChange={() => { props.onChangeHandler(3) }} /></div>
            </div>
            <div className="App-answer-select">
                <button onClick={() => { props.onClickHandler(4) }} disabled={!selected.has(4)}>4</button>
                <div><input type="checkbox" checked={selected.has(4)} onChange={() => { props.onChangeHandler(4) }} /></div>
            </div>
            <div className="App-answer-select">
                <button onClick={() => { props.onClickHandler(5) }} disabled={!selected.has(5)}>5</button>
                <div><input type="checkbox" checked={selected.has(5)} onChange={() => { props.onChangeHandler(5) }} /></div>
            </div>
            <div className="App-answer-select">
                <button onClick={() => { props.onClickHandler(6) }} disabled={!selected.has(6)}>6</button>
                <div><input type="checkbox" checked={selected.has(6)} onChange={() => { props.onChangeHandler(6) }} /></div>
            </div>
            <div className="App-answer-select">
                <button onClick={() => { props.onClickHandler(7) }} disabled={!selected.has(7)}>7</button>
                <div><input type="checkbox" checked={selected.has(7)} onChange={() => { props.onChangeHandler(7) }} /></div>
            </div>
            <div className="App-answer-select">
                <button onClick={() => { props.onClickHandler(8) }} disabled={!selected.has(8)}>8</button>
                <div><input type="checkbox" checked={selected.has(8)} onChange={() => { props.onChangeHandler(8) }} /></div>
            </div>
            <div className="App-answer-select">
                <button onClick={() => { props.onClickHandler(-1) }} disabled={!selected.has(-1)}>never</button>
                <div><input type="checkbox" checked={selected.has(-1)} onChange={() => { props.onChangeHandler(-1) }} /></div>
            </div>
        </div>

    );
}

function MessagePanel(props: any) {
    return (
        <div className={"App-message" + "-" + props.classSuffix}>
            {props.message}
        </div>
    );
}

type AppState = {
    card1: Card,
    card2: Card,
    answer?: number,
    selected: Set<number>,
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props)

        // init state
        let selected = (new Set<number>()).add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(-1);
        this.state = { card1: new Card(Value.Ace, Suit.Clubs), card2: new Card(Value.Ace, Suit.Clubs), answer: undefined, selected: selected };
        this.state = { ...this.resetHand() };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.resetHand = this.resetHand.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress);
    }

    private handleKeyPress(event: any) {
        console.log("keypress event: ", event.keyCode);
        let code: number = event.keyCode;
        if (code === 110) { // TODO: make this space bar
            this.setState(this.resetHand());
        } else if (code === 48) {
            this.handleUserInput(-1);
        } else if (code >= 49 && code <= 56) {
            this.handleUserInput(code - 49 + 1)
        }
    }

    private handleUserInput(val: number) {
        console.log("user answer: ", val);
        if (this.state.answer === undefined) {
            this.setState({ ...this.state, answer: val });
        }
    }

    private handleSelectChange(val: number) {
        console.log("select changed: ", val);
        let selected: Set<number> = this.state.selected;
        if (selected.has(val)) {
            selected.size === 1 ? alert("At least one option must be selected") : selected.delete(val);
        } else {
            selected.add(val);
        }
        this.setState({ ...this.state, selected: selected });
        if (!selected.has(val)) {
            this.setState(this.resetHand());
        }
    }

    private resetHand(): AppState {
        let card1: Card = new Card(Value.Ace, Suit.Clubs)
        let card2: Card = new Card(Value.Ace, Suit.Clubs);
        let hand: StartingHand = new StartingHand(card1.value, card2.value, true);

        while (card1.equals(card2) || !this.state.selected.has(getSklanskyValue(hand))) {
            card1 = new Card(values[Math.floor(Math.random() * 13)], suits[Math.floor(Math.random() * 4)]);
            card2 = new Card(values[Math.floor(Math.random() * 13)], suits[Math.floor(Math.random() * 4)]);
            hand = new StartingHand(card1.value, card2.value, card1.suit === card2.suit);
        }
        return { ...this.state, card1: card1, card2: card2, answer: undefined };
    }

    public render() {
        let hand = new StartingHand(this.state.card1.value, this.state.card2.value, this.state.card1.suit === this.state.card2.suit)
        return (
            <div className="App">
                <header>
                    <h1 className="App-title">Learn Your Sklansky Starting Hands!</h1>
                </header>
                <div className="App-instructions" >
                    Press numeric keys 1-8 to answer, 0 for never and 'n' to move to the next hand.
                    </div>
                <div>
                    <img className="App-card" src={`/${this.state.card1.toString()}.svg`} />
                    <img className="App-card" src={`/${this.state.card2.toString()}.svg`} />
                </div>
                <AnswerPanel onClickHandler={this.handleUserInput} onChangeHandler={this.handleSelectChange} selected={this.state.selected} />
                {this.state.answer !== undefined && (
                    (this.state.answer === getSklanskyValue(hand) && <MessagePanel classSuffix={"correct"} message={"Correct!"} />) ||
                    (this.state.answer !== getSklanskyValue(hand) && <MessagePanel classSuffix={"incorrect"} message={"Incorrect :(. Correct answer is " + (getSklanskyValue(hand) !== -1 ? getSklanskyValue(hand) : "never") + "."} />))}
            </div>
        );
    }
}

export default App;
