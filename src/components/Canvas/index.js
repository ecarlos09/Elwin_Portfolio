import React, { useRef, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import { useWindowSize } from '../../hooks';

const Canvas = () => {

    // Access the canvas
    const canvasRef = useRef(null);

    const draw = (ctx, c, frameCount) => {
        // Define grid
        const grd = ctx.createLinearGradient(0, 0, Math.sin(frameCount*0.05)*c.width, (1-Math.sin(frameCount*0.05))*c.height);
        grd.addColorStop(0, "#FFFFCC");
        grd.addColorStop(1, "pink");
        // Fill gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, c.width, c.height);
    }

    useEffect(() => {
        // Get context
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;
    
        // Render an animation
        const render = () => {
            frameCount++;
            draw(context, canvas, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }
        
        render();
        
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return (
        <Container fluid>
            <canvas id="my-canvas" width={useWindowSize().width} height={useWindowSize().height} ref={canvasRef} style={{borderRadius: "2%"}}>
            </canvas>
        </Container>
    )
}

export default Canvas;