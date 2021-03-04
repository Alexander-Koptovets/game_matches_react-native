import React from 'react';
import { Matches } from './Matches';
import { FinishGame } from './FinishGame';

export class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantityOfMatches: 25, 
            count: 0,
            playerMatches: 0,
            opponentMatches: 0,
            isMove: false,
            isPlay: 'true',
            isStart: true,
            text: '',
        };

        this.onCount = this.onCount.bind(this);
        this.onMove = this.onMove.bind(this);
        this.opponentsMove = this.opponentsMove.bind(this);
        this.checkQuantityOfMatches = this.checkQuantityOfMatches.bind(this);
        this.onPlayAgain = this.onPlayAgain.bind(this);
        this.firstMove = this.firstMove.bind(this);
        this.opponentsFirstMove = this.opponentsFirstMove.bind(this);
    }
    firstMove() {
        this.setState({
            isStart: false
        });
    }

    opponentsFirstMove() {
        this.setState({
            opponentMatches: this.state.opponentMatches + 1,
            quantityOfMatches: this.state.quantityOfMatches - 1,
            isStart: false
        });
    }

    onCount() {
        if (this.state.count < 3) {
            this.setState({
                count: this.state.count + 1 
            });
        };
    }

    onMove() {
        this.setState({
            quantityOfMatches: this.state.quantityOfMatches - this.state.count,
            playerMatches: this.state.playerMatches + this.state.count,
            count: 0,
            isMove: !this.state.isMove, 
        });

        this.checkQuantityOfMatches();
    }

    opponentsMove() {
        if (this.state.quantityOfMatches === 3) {
            this.setState({
                opponentMatches: this.state.opponentMatches + 1,
                quantityOfMatches: this.state.quantityOfMatches - 1
            });
        } else if ((this.state.quantityOfMatches - 1) % 4 === 0 || 
            (this.state.quantityOfMatches - 1) % 4 === 1) {
            this.setState({
                opponentMatches: this.state.opponentMatches + 1,
                quantityOfMatches: this.state.quantityOfMatches - 1
            });
        } else if ((this.state.quantityOfMatches - 3) % 4 === 0 || 
            (this.state.quantityOfMatches - 3) % 4 === 1) {
            this.setState({
                opponentMatches: this.state.opponentMatches + 3,
                quantityOfMatches: this.state.quantityOfMatches - 3
            });
        };

        this.checkQuantityOfMatches();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isMove !== prevState.isMove) {
            this.opponentsMove();
        };
    }

    checkQuantityOfMatches() {
        if (this.state.quantityOfMatches === 0) {
            if (this.state.playerMatches % 2 === 0) {
                this.setState({
                    text: 'You Won!',
                    isPlay: false 
                });
            } else if (this.state.opponentMatches % 2 === 0) {
                this.setState({
                    text: 'Defeated Skynet',
                    isPlay: false 
                });
            } else {
                this.setState({
                    text: 'Friendship won',
                    isPlay: false 
                });
            }
        };
    }

    onPlayAgain() {
        this.setState({
            playerMatches: 0,
            opponentMatches: 0,
            count: 0,
            quantityOfMatches: 25,
            isPlay: true,
            isStart: true
        });
    }
    
    render() {
        const { quantityOfMatches, count, playerMatches, opponentMatches, text, isStart } = this.state;
        
        return (
            <>
            {this.state.isPlay ?
                <Matches
                quantityOfMatches={quantityOfMatches} 
                onCount={this.onCount}
                onMove={this.onMove}
                count={count}
                playerMatches={playerMatches}
                opponentMatches={opponentMatches}
                isStart={isStart}
                firstMove={this.firstMove}
                opponentsFirstMove={this.opponentsFirstMove}
                />
                :
                <FinishGame 
                text={text}
                onPlayAgain={this.onPlayAgain}
                />
            } 
            </>
        )
    }
}