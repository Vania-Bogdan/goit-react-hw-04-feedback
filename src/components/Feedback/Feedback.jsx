import {useState} from "react"
import Section from "./Section/Section"
import Btns from "./Btns/Btns"
import Statistics from "./Statistics/Statistics"
import Notification from "./Notification/Notification"

import styled from 'styled-components';

export default function Feedback() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onClickBtn = (event) => {
        switch (event.target.textContent) {
            case "good":
                setGood(good + 1);
                break;
            case "neutral":
                setNeutral(neutral + 1);
                break;
            case "bad":
                setBad(bad + 1);
                break;
            default:
                break;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }
    const total = countTotalFeedback();

    const countPositiveFeedbackPercentage = () => {
        return Math.floor(( good  * 100) / total);
    }
    const posPer = countPositiveFeedbackPercentage();

    const options = ['good', 'neutral', 'bad'];

    return (
            <>
                <Card>
                    <Section title={'Please leave feedback'}>
                        <Btns names={options} voting={onClickBtn}></Btns>
                    </Section>
                    <Section title={'Statistics'}>
                        {total === 0 ?
                            <Notification message={'There is no feedback'}></Notification> :
                            <Statistics
                            good={good} neutral={neutral} bad={bad} total={total} posPer={posPer}>
                            </Statistics>
                        }
                    </Section>
                </Card>
            </>
        );
};


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