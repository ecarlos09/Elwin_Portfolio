import React from 'react';

import { useWindowSize } from '../../hooks'

const Canvas = () => {
    return (
        <canvas id="myCanvas" width={useWindowSize().width} height={useWindowSize().height}>
        </canvas>
    )
}

export default Canvas;