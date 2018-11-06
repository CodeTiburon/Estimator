import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    let className = 'square';

    if ( props.winning ) {
        className = className + ' winning';
    }

    return (
        <button className={className} onClick={props.onClick} >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                winning={this.props.winning ? this.props.winning.includes(i) : false}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        let rows = [];

        for (let i = 0; i <= 2; i++) {
            let cells = [];

            for (let j = 0; j <= 2; j++) {
                cells.push(this.renderSquare( (i * 3) + j ))
            }

            rows.push(<div className="board-row" key={i}>{cells}</div>)
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null),
                row: null,
                col: null,
            }],
            xIsNext: true,
            stepNumber: 0,
            stepOrder: true,
        };
    }

    getNext() {
        return this.state.xIsNext ? 'X' : 'O';
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[ history.length - 1 ];
        const squares = current.squares.slice();

        if ( calculateWinner(squares) || squares[i] ) return;

        squares[i] = this.getNext();

        this.setState({
            history: history.concat([{
                squares: squares,
                row: Math.floor(i / 3),
                col: i % 3,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    swapOrder() {
        this.setState({
            stepOrder: !this.state.stepOrder,
        });
    }

    render() {
        const history = this.state.history.slice();
        const current = history[ this.state.stepNumber ];
        const winner = calculateWinner(current.squares);
        const reversed = this.state.stepOrder ? '' : 'reversed';
        const moves = history.map( (step, move) => {
            const desc = !move ? 'Game start' : 'Move #' + move + ' (row: ' + step.row + ', col: ' + step.col + ')';
            const active = (this.state.stepNumber === move) ? 'active' : '';

            return (
                <li key={move} className={active}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        let winningCells;

        if ( winner ) {
            status = 'Winner: ' + winner.winner;
            winningCells = winner.cells;
        } else {
            status = 'Next Player: ' + this.getNext();
            winningCells = null;
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        winning={winningCells}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>

                <div className="game-info">
                    <div>{status}</div>

                    <button className="order" onClick={() => this.swapOrder()} >
                        Order: {this.state.stepOrder ? 'Ascending' : 'Descending'}
                    </button>

                    <ol className="moves" reversed={reversed}>{this.state.stepOrder ? moves : moves.reverse()}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for ( let i = 0; i < lines.length; i++ ) {
        const [a, b, c] = lines[i];

        if ( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
            return {
                winner: squares[a],
                cells: lines[i],
            };
        }
    }

    if ( !squares.includes(null) ) {
        return {
            winner: 'Draw',
            cells: null,
        };
    }

    return null;
}
