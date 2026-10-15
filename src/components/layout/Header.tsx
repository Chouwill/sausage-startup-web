'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const navLinks = [
        { name: '首頁', href: '#hero' },
        { name: '關於我們', href: '#aboutUs' },
        { name: '商品介紹', href: '#product' },
        { name: '手工製作', href: '#handmade' },
        { name: '訂購方式', href: '#order' },
        { name: '常見問題', href: '#faq' },
    ];
    return (
        <header className="grid grid-cols-[3fr_5fr_2fr] items-center ">
            <div className="flex justify-center items-center   top-3 ">
                <img className="w-80  " src="/images/logo-2.svg" alt="LOGO" />
            </div>
            <nav className="flex justify-around items-center gap-5   text-2xl ">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className='min-w-32.5 text-center'>
                        {link.name}
                    </Link>
                ))}
            </nav>

            <div className="flex justify-center items-center gap-7">
                <FontAwesomeIcon style={{ color: '#007bff', fontSize: '35px' }} icon={faUser} />
                <FontAwesomeIcon style={{ color: '#007bff', fontSize: '35px' }} icon={faCartShopping} />
            </div>
        </header>
    );
}
