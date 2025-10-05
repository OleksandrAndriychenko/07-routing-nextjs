import Link from 'next/link';
import css from './TagsMenu.module.css';
import { getCategories } from '@/lib/api';



const TagsMenu = async () => {
    const tags = await getCategories();
    return (
        <div className={css.menuContainer}>
            <button className={css.menuButton}>
                Notes ▾
            </button>
            <ul className={css.menuList}>
                <li>
                    <Link href={"/notes"} className={css.menuLink}>
                        All notes
                    </Link>
                </li>
                {tags.map(tag => (
                <li key={tag.id} className={css.menuItem}>
                    <Link href={`/notes/filter/${tag.name}`} className={css.menuLink}>
                    {tag.name}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    );
}
export default TagsMenu;

// import { useParams, useRouter } from 'next/navigation'

// const SearchBar = () => {
//   const {
//     filters: [categoryId],
//   } = useParams<{ filters: string[] }>()
//   console.log('categoryId', categoryId)

//   const router = useRouter()

//   const handleSubmit = (formData: FormData) => {
//     const searchValue = formData.get('searchValue')

//     router.push(`/notes/filter/${categoryId}/${searchValue}`)
//   }

//   return (
//     <form action={handleSubmit}>
//       <input type='text' name='searchValue' />
//       <button type='submit'>Search</button>
//     </form>
//   )
// }

// export default SearchBar