import React from "react"
import Section from "./Section/Section"
import Btns from "./Btns/Btns"
import Statistics from "./Statistics/Statistics"
import Notification from "./Notification/Notification"

import styled from 'styled-components';

class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    onClickBtn = event => {
    const e = event.target.textContent;
        this.setState(prevState => {
            return { [e]: prevState[e] + 1 };
        });
    };
    countTotalFeedback() {
        const arrayDataCount = Object.values(this.state);
        const total =  arrayDataCount.reduce((acc, item) => {
            return acc + item;
        }, 0);
        return total;
    }
    countPositiveFeedbackPercentage() {
        return Math.floor((this.state.good * 100) / this.countTotalFeedback());
    }
    render() {
        const options = Object.keys(this.state)
        const { good, neutral, bad } = this.state
        const total = this.countTotalFeedback()
        if (total === 0) {
            return (
                <>
                <Card>
                    <Section title={'Please leave feedback'}>
                        <Btns names={options} voting={this.onClickBtn}></Btns>
                    </Section>
                    <Section title={'Statistics'}>
                        <Notification message={'There is no feedback'}></Notification>
                    </Section>
                </Card>
                </>
            )
        } else {
            return (
                <>
                <Card>
                    <Section title={'Please leave feedback'}>
                        <Btns names={options} voting={this.onClickBtn}></Btns>
                    </Section>
                    <Section title={'Statistics'}>
                        <Statistics
                            good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} posPer={this.countPositiveFeedbackPercentage()}>
                        </Statistics>
                    </Section>
                </Card>
                </>
            )
        }
    }
}

const Card = styled.div`
border: 5px solid #000000;
    border-radius: 20px;
    box-shadow: 10px 10px 8px 2px rgb(0 0 0 / 30%);
    color: #000000;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin: 100px auto 0;
    padding: 20px;
    width: 600px;
    background-color: #00cab9;`;

export default Feedback