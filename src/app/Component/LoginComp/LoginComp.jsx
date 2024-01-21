"use client"

import React from 'react'
import './Logcomp.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginComp() {

  const router = useRouter()

const {data,status} = useSession();

if (status === "loading"){
  return <div>....loading</div>
}

if (status === "authenticated"){
 router.push('/')
 
}

  return (
   
    <div className="logg">
      <div className="google">
        <button onClick={()=>signIn("google")}>Sign in with Google</button>
      </div>
    </div>
  )
}
