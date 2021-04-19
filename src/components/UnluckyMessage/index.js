import React, { useEffect, useState } from 'react';

const UnluckyMessage = ({visible}) => {

    return (
        <section className='unlucky-message' style={{display: visible? 'block' : 'none'}}>
            <p>Bad luck, that is not the correct answer.  :(   Try again by clicking another option!</p>
        </section>
    )
}

export default UnluckyMessage;