'use client'
import { withAuthenticator } from "@aws-amplify/ui-react"
import { AuthUser } from "aws-amplify/auth"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import '@aws-amplify/ui-react/styles.css'

const Signup = ({user}: {user?: AuthUser}) => {
    useEffect(() => {
        if(user) {
            redirect('/')
        }
    })
    return null
}
export default withAuthenticator(Signup)