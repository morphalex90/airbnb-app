import Link from 'next/link';
import Image from 'next/image';
import logo from '@/img/logo.jpg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">

                <div className="footer__container">
                    <div>
                        <Link href='/'><Image src={logo} alt="Airbnb Logo" /></Link>
                    </div>

                    <div>
                        <div>Navigation</div>
                    </div>

                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__container">
                    <div>
                        Left part
                    </div>

                    <div className="footer__payments text-center">
                        Center part
                    </div>

                    <div className="footer__copyright text-right">&copy; {new Date().getFullYear()} - Airbnb. All right reserved</div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
