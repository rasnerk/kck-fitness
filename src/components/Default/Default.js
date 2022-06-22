import Logo from "../Logo/Logo"

const Default = ({ children }) => {
    return (
        <div className="wrapper">
            <Logo />
            {children}
        </div>
    )
}

export default Default