import { renderHook } from '@testing-library/react-hooks';

import useWindowSize from '.';

describe('useWindowSize', () => {
    it('it returns the window size and height of a desktop', () => {
        // Set desktop screen size
        global.window.innerWidth = 1024;
        global.window.innerHeight = 768;
        const { result } = renderHook(() => useWindowSize());
        // Make assertion
        expect(result.current).toStrictEqual({ width: 1024, height: 768, mobile: false });
    });

    it('returns the window size and height of a mobile', () => {
        // Set mobile screen size
        global.window.innerWidth = 768;
        global.window.innerHeight = 1024;
        const { result } = renderHook( () => useWindowSize() );
        // Make assertion
        expect(result.current).toStrictEqual({ width: 768, height: 1024, mobile: true });
    });
})