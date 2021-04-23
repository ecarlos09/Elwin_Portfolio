import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { CongratsMessage, UnluckyMessage } from '..';

import './style.css';

const Statements = () => {
    const [statements, setStatements] = useState([
        {id: 1, statement: "I have seven older siblings.", correct: true },
        {id: 2, statement: "I lost at chess to a 10 year old ... and I was trying.", correct: false },
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
                <form id="statements-list">
                    <div className="s1">
                        <input id="statementOne" type="radio" name="statementList" onClick={handleCongrats} />
                        <label htmlFor="statementOne">{statements[0].statement}</label>
                    </div>
                    <div className="s2">
                        <input id="statementTwo" type="radio" name="statementList" onClick={handleUnlucky} />
                        <label htmlFor="statementTwo">{statements[1].statement}</label>
                    </div>
                    <div className="s3">
                        <input id="statementThree" type="radio" name="statementList" onClick={handleUnlucky} />
                        <label htmlFor="statementThree">{statements[2].statement}</label>
                    </div>
                </form>
                <div className="answer-message">
                    <CongratsMessage visible={showCongrats}/>
                    <UnluckyMessage visible={showUnlucky}/>
                </div>
        </section>
    )
}

export default Statements;