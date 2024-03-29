import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <>
            <main className="my-5">
            <Outlet />
            </main>
        </>
    )
}

export default RootLayout;