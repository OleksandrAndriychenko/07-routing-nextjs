'use client';

import Link from 'next/link';
import { useState } from 'react';
import css from './TagsMenu.module.css';

const staticTags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];


export default function TagsMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className={css.menuContainer}>
            <button className={css.menuButton} onClick={toggleMenu}>
                Notes ▾
            </button>
            {isOpen && (
                <ul className={css.menuList}>
                {staticTags.map(tag => (
                    <li key={tag} className={css.menuItem}>
                    <Link
                        href={`/notes/filter/${tag}`}
                        className={css.menuLink}
                        onClick={closeMenu}
                    >
                        {tag}
                    </Link>
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}
