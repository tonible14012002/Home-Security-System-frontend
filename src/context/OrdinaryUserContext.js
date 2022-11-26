import { createContext, useEffect, useState } from "react"
import { useReducer } from "react"
import { getOrdinaryUsers } from '../services/userServices';

const OrdinaryUsersContext = createContext([])

const userReducer = (state, action) => {
    switch (action.type) {
        case "list":
            return action.payload
        case "update":
            const updatedUser = action.payload
            const toUpdate = state.filter((user, index) => user.id === updatedUser.id)[0]
            for (const key in toUpdate) {
                toUpdate[key] = updatedUser[key]
            }
            return state
        case "delete": 
            const toDeleteId = action.payload
            const restUsers = state.filter((user) => user.id !== toDeleteId)
            return restUsers
        default:
            return state
    }
}

const OrdinaryUserProvider = ({children, ...props}) => {
    const [loading, setLoading] = useState(false)
    const [users, dispatchUsers] = useReducer(userReducer, [])

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            const results = await getOrdinaryUsers()
            dispatchUsers({type: "list", payload: results})
            setLoading(false)
        }
        getUsers()
    }, [])
    
    return (
        <OrdinaryUsersContext.Provider value={{users, dispatchUsers, loading, setLoading}}>
            {children}
        </OrdinaryUsersContext.Provider>
    )
}

export {OrdinaryUsersContext, OrdinaryUserProvider}