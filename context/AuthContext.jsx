'use client'

import { auth, db } from "@/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { doc } from "firebase/firestore"
import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const { children } = props

    const [currentUser, setCurrentUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try{
                setLoading(true)
                setCurrentUser(user)

                if(!user) { return }

                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                console.log('Fetching user data')

                let firebaseData = { subscriptions : []}
                if (docSnap.exsts()){
                    console.log('Found user data')
                    firebaseData = docSnap.data()
                }
                setUserData(firebaseData)
                setLoading(false)
         
            } catch (err){
                console.log(err.message)
            }
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser, userData, loading 
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}