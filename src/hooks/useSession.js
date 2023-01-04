import { useCallback, useEffect, useState } from "react"



const useSession = ({
    onOpen,
    onMessage,
    onClose,
    ...props
}) => {

    const [session, setSession] = useState(null)

    const updateOpenHandler = () => {
        if (!session) return;
        session.addEventListener('open', onOpen)
        return () => {
            session.removeEventListener('open', onOpen)
        }
    }

    const updateMessageHandler = () => {
        if (!session) return
        session.addEventListener('message', onMessage)
        return () => {
            session.removeEventListener('message', onMessage)
        }
    }

    const updateCloseHandler = () => {
        if (!session) return
        session.addEventListener('close', onClose)
        return () => {
            session.removeEventListener('close', onClose)
        }
    }

    useEffect(updateOpenHandler, [session, onOpen])
    useEffect(updateMessageHandler, [session, onMessage])
    useEffect(updateCloseHandler, [session, onClose])

    return {
        session, 
        setSession
    }
}

export default useSession