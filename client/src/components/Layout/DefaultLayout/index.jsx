import Navbar from "../../Navbar";


const DefaultLayout = ({children}) => {
    return (
        <div className="flex flex-col gap-2">
            <Navbar/>
            {children}
            <div>Footer</div>
        </div>
    )
}

export default DefaultLayout;