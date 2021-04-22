import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { CongratsMessage, UnluckyMessage } from '..';

import './style.css';

const Statements = () => {
    const [statements, setStatements] = useState([
        {id: 1, statement: "I have seven older siblings.", correct: true },
        {id: 2, statement: "The most recent snooker cue I purchased was more expensive than my current mobile phone.", correct: false },
        {id: 3, statement: "I once performed live on the X Factor.", correct: false }
    ]);

    const [ showCongrats, setShowCongrats ] = useState(false);
    const [ showUnlucky, setShowUnlucky ] = useState(false);

    const handleCongrats = () => {
        setShowCongrats(true)
        setShowUnlucky(false)
    }

    const handleUnlucky = () => {
        setShowCongrats(false)
        setShowUnlucky(true)
    }

    return (
        <section className="statements" >
            <form id="statementsList">
                <Card>
                    <Card.Body>
                        <input id="statementOne" type="radio" name="statementList" onClick={handleCongrats} />
                        <label htmlFor="statementOne">{statements[0].statement}</label>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <input id="statementTwo" type="radio" name="statementList" onClick={handleUnlucky} />
                        <label htmlFor="statementTwo">{statements[1].statement}</label>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <input id="statementThree" type="radio" name="statementList" onClick={handleUnlucky} />
                        <label htmlFor="statementThree">{statements[2].statement}</label>
                    </Card.Body>
                </Card>
            </form>
            <Card>
                <div className="answer-message">
                    <CongratsMessage visible={showCongrats}/>
                    <UnluckyMessage visible={showUnlucky}/>
                </div>
            </Card>
        </section>
    )
}

export default Statements;