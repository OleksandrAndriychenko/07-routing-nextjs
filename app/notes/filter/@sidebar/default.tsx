import css from "./SidebarNotes.module.css";
import Link from 'next/link';

const fixedTags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function Sidebar() {
    return (
        <ul className={css.menuList}>
            {fixedTags.map(tag => (
                <li key={tag} className={css.menuItem}>
                    <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                        {tag === 'All' ? 'All Notes' : tag}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
// {/* <ul className={css.menuList}>
//     {/* список тегів */}
    //   <li className={css.menuItem}>
    //     <a href={`url до сторінки за відповідним тегом`} className={css.menuLink}>
    //       Назва тегу
    //     </a>
    //   </li>
    // </ul> */}