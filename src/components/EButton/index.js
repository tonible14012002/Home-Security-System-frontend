import { Link } from "react-router-dom"

const EButton = ({
    children,
    className, 
    onClick, 
    href, 
    to, 
    disabled, 
    ...passProps
}) => {

    var Com = 'button'
    const props = {onClick, disabled, ...passProps}

    // clear listener if disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function')
                delete props[key]
        })
    }

    if (to) {
        props.to = to;
        Com = Link
    } else if (href) {
        props.href = href
        props.target = "_blank"
        Com = 'a'
    }

    return (
        <Com
            {...props}
            className={` ${disabled && "bg-opacity-70"} ${className}`}
        >
            {children}
        </Com>
    )
}

export default EButton