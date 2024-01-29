'use client'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.scss';
const Logo = '/assets/logo/logo.webp';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import classNames from 'classnames';


export default function Navbar() {
    
    const pathname = usePathname();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const onScroll = () => {
          const scrolling = window.scrollY;
          setScrollY(scrolling);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, [scrollY]);
    

    return (
        <header className={ classNames(styles.header , scrollY > 200 ? styles.app : "" )} >
            <div className='container'>
                <div className={styles.headerAlignment}>
                    <div className={styles.leftContent}>
                        <Link href="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <nav>
                            <Link href="/" className={pathname === '/' ? styles.activeClass : ''} >Home</Link>
                            <Link href="/toolscategories" className={pathname === '/toolscategories' ? styles.activeClass : ''}>AI Tools Category</Link>
                            <a>GPT Store</a>
                            <a>AI Shorts Video</a>
                            <Link href="/blog" className={pathname === '/blog' ? styles.activeClass : ''}>Blog</Link>
                            <a>Submit AI Tool</a>
                        </nav>
                    </div>
                    <div className={styles.rightContent}>
                        <button>Log in</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
