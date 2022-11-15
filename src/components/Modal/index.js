import { useEffect } from "react"
import ReactDOM from "react-dom"

const Modal = ({children, className, ...props}) => {

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => document.body.style.overflow = "scroll"
    }, [])

    return ReactDOM.createPortal(
        <div className={`fixed top-0 left-0 w-full h-[100vh] bg-gray-600 bg-opacity-50 z-50 ${className}`}
            {...props}
        >
            {children}
        </div> 
    , document.querySelector("body"))
}

export default Modal