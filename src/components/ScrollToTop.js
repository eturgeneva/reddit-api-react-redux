import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType !== 'REPLACE') {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}