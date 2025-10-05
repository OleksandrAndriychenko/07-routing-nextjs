interface Props {
    children: React.ReactNode
    sidebar: React.ReactNode
}
const Layout = ({ children, sidebar }: Props) => {
    return (
        <div>
            {sidebar}
            {children}
        </div>
    )
}

export default Layout