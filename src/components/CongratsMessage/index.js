import React, { useEffect, useState } from 'react';

import './style.css';

const CongratsMessage = ({visible}) => {


    return (
        <section className='congrats-message' style={{display: visible? 'block' : 'none'}}>
            <p>Congratulations, you found the lie!!</p>
            <a href="https://www.youtube.com/watch?v=TRmLgIdA7i8" style={{fontSize: '10px'}}>
                P.S. Click here for a link to the X factor performance ... you'll want to skip to 1:09 and look out for the lanky idiot on the right hand side.
            </a>
        </section>
    )
}

export default CongratsMessage;