// import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';

export default function NavMain() {

    return (
        <nav className="nav-main">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/account">Account</Link></li>
                <li><Link href="/logout">Logout</Link></li>
            </ul>
        </nav>
    );
}