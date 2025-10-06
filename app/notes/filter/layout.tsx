import css from "./LayoutNotes.module.css"
interface Props {
    children: React.ReactNode
    sidebar: React.ReactNode
}
const Layout = ({ children, sidebar }: Props) => {
    return (
        <div className={css.container}>
            <aside className={css.sidebar}>{sidebar}</aside>
            <main className={css.notesWrapper}>{children}</main>
        </div>
    )
}

export default Layout