import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { createContext, useEffect, useState } from "react"
import { useReducer } from "react"
import userApi from "../api/userApi";

const OrdinaryUsersContext = createContext([])
const UnConfirmOrdUserContext = createContext([])

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
            console.log(state)
            const toDeleteId = action.payload
            const restUsers = state.filter((user) => {
                console.log(user.id, toDeleteId)
                if (user.id !== toDeleteId) {
                    return true
                }
                return false
                }           
            )
            return restUsers
        default:
            return state
    }
}



const OrdinaryUserProvider = ({children, ...props}) => {
    const [loading, setLoading] = useState(false)
    const [users, dispatchUsers] = useReducer(userReducer, [])
    const [refetch, setRefetch] = useState({})

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            let data = undefined
            try {
                const results = await userApi.getOrdinaryUsers({status: 'accepted'})
                data = results.data
            }
            catch(e) { console.log(e) }


            dispatchUsers({type: "list", payload: data})
            setLoading(false)
        }
        getUsers()
    }, [refetch])
    
    return (
        <OrdinaryUsersContext.Provider value={{users, dispatchUsers, loading, setLoading, setRefetch}}>
            {children}
        </OrdinaryUsersContext.Provider>
    )
}

const unConfirmUserReducer = userReducer.bind({})

const UnConfirmOrdUserProvider = ({children, ...props}) => {
    const [loading, setLoading] = useState(false)
    const [users, dispatchUsers] = useReducer(unConfirmUserReducer, [])
    const [refetch, setRefetch] = useState({})

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            let data = undefined
            try {
                const results = await userApi.getOrdinaryUsers({status: 'unconfirm'})
                data = results.data
            }
            catch(e) { console.log(e) }


            dispatchUsers({type: "list", payload: data})
            setLoading(false)
        }
        getUsers()

    }, [refetch])
    return (
        <UnConfirmOrdUserContext.Provider value={{users, dispatchUsers, loading, setLoading, setRefetch}}>
            {children}
        </UnConfirmOrdUserContext.Provider>
    )
}
export {OrdinaryUsersContext, OrdinaryUserProvider, UnConfirmOrdUserProvider, UnConfirmOrdUserContext}