import { useCallback, useContext, useEffect, useRef } from "react";
import { createContext } from "react";
import useSession from "../hooks/useSession";
import { useAuthContext } from "./AuthContext";
import { baseSocketURL } from "../api/axiosClient";

const WebSocketContext = createContext(null)

const SocketProvider = ({children, ...props}) => {

    // trigger create socket connection if logged in
    const { user } = useAuthContext()
    const url = `${baseSocketURL}ws/event/`

    const onOpen = useCallback(() => {
        console.log('opened connection')
    }, [])

    const onMessage = useCallback((e) => {

    }, [])

    const onClose = useCallback(() => {
        console.log('socket disconnected unexpectly')
    }, [])


    const { session, setSession } = useSession({
        onOpen, onClose, onMessage
    })

    const createSession = useCallback(() => {
        setSession(new WebSocket(url))
    }, [setSession, url])

    const initSession = () => {
        if (user.id && user.is_staff) {
            createSession()
        }
    }
    const endSession = () => {
        if (user.id) return
        if (session) session.close()
    }

    useEffect(initSession, [user, createSession])
    useEffect(endSession, [user, session])

    return (
        <WebSocketContext.Provider value={{session, createSession}}>
            {children}
        </WebSocketContext.Provider>
    )
}

export default SocketProvider
export {WebSocketContext}
export const useSocketContext = () => useContext(WebSocketContext)
