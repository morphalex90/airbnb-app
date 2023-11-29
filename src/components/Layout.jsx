import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children, page }) {
    const [paddingTop, setPaddingTop] = useState(null);

    useEffect(() => {
        setInterval(function () {
            if (document.getElementsByClassName('header')[0]) {
                setPaddingTop(document.getElementsByClassName('header')[0].offsetHeight);
            }
        }, 200);
    }, []);

    return (
        <>
            <Header />
            <div className="content-wrapper" style={{ paddingTop: (paddingTop != null ? paddingTop : 55) }}>
                <main id="main-content" className={page}>{children}</main>
            </div>
            <Footer />
            {/* {isLoading === true && <div className="loading"></div>} */}
        </>
    );
}
