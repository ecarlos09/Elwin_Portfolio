import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [ windowSize, setWindowSize ] = useState({
        width: undefined,
        height: undefined,
        mobile: undefined
    });

    useEffect(() => {
        // Create handler that calls on window resize
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                mobile: window.innerWidth <= 768
            });
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Immediately invoke handler to get current window size
        handleResize();

        // Remove the event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return windowSize;
}

export default useWindowSize;