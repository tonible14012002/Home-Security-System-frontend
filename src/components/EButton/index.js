import { Link } from "react-router-dom"

const EButton = ({
    children,
    className, 
    onClick, 
    href, 
    to, 
    disabled, 
    bg,
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

    if (disabled) {
        console.log("disabled button")
    }

    return (
        <Com
            {...props}
            className={` ${bg && "bg-amber-200 text-zinc-900 dark:text-white dark:bg-purple-500  p-2 pl-4 pr-4 rounded-lg font-semibold "}
                         ${className}`}
        >
            {children}
        </Com>
    )
}

export default EButton