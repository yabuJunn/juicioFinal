import { useEffect, useRef } from 'react';

export const useDisableScroll = () => {
    const supportsPassive = useRef(false);

    // Detectar soporte para passive
    useEffect(() => {
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive.current = true;
                },
            });
            window.addEventListener('test', () => { }, opts);
        } catch (e) {
            // Navegadores antiguos o que no soportan Object.defineProperty en addEventListener
            console.log(e);
            supportsPassive.current = false;
        }
    }, []);

    // Prevent default function
    const preventDefault = (e: Event) => {
        e.preventDefault();
    };

    // Detectar cuál evento de scroll usar
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // Disable scroll
    const disableScroll = () => {
        const options = supportsPassive.current ? { passive: false } : false;
        window.addEventListener('DOMMouseScroll', preventDefault, options as AddEventListenerOptions);
        window.addEventListener(wheelEvent, preventDefault, options as AddEventListenerOptions);
        window.addEventListener('touchmove', preventDefault, options as AddEventListenerOptions);
    };

    // Enable scroll
    const enableScroll = () => {
        const options = supportsPassive.current ? { passive: false } : false;
        window.removeEventListener('DOMMouseScroll', preventDefault, options as EventListenerOptions);
        window.removeEventListener(wheelEvent, preventDefault, options as EventListenerOptions);
        window.removeEventListener('touchmove', preventDefault, options as EventListenerOptions);
    };

    return { disableScroll, enableScroll };
};
