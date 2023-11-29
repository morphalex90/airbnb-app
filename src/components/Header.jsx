import Link from 'next/link';
import Image from 'next/image';
import NavMain from '@/components/NavMain';
import logo from '@/img/logo.png';

export default function Header() {

    return (
        <header className="header">

            <div className="header__container">

                <div className="header__logo">
                    <Link href='/'><Image src={logo} alt="Airbnb Logo" title="Airbnb Logo" priority /></Link>
                </div>

                <div className="header__menu">
                    <NavMain />
                </div>
            </div>
        </header>
    );
}
