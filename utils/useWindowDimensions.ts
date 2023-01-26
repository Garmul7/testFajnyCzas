import { useEffect, useState } from 'react';

type WindowDimentions = {
    width: number;
    pageSize: number;
    reverseFlow: boolean;
};

const useWindowDimensions = (): WindowDimentions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
        width: 1,
        pageSize: 4,
        reverseFlow: false
    });
    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
                pageSize: Math.floor(window.innerWidth/395),
                reverseFlow: Math.floor(window.innerWidth/395)==1
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
};

export default useWindowDimensions;