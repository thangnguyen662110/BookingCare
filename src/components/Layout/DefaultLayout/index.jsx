

const DefaultLayout = ({children}) => {
    return (
        <div className="flex flex-col gap-2">
            <div>Navbar</div>
            {children}
            <div>Footer</div>
        </div>
    )
}

export default DefaultLayout;