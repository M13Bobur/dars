import React, { useState } from 'react'
import {store} from "../../redux"
import {useNavigate} from "react-router-dom"

function Home() {
    const nag = useNavigate()
    const [login, setLogin] = useState("")
    const [pass, setPassword] = useState("")
    
    const qoshish = () => {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
    }

    const otish = (name) => {
        nag("/table", {state: {name: name}})
    }
    
    const korish = () => {
        var name = localStorage.getItem("name")
        var age = localStorage.getItem("age")

        alert(name+" "+age)
    }

    return (
        <div>
            <input type="text" placeholder='login' defaultValue={login} onKeyUp={e=>setLogin(e.target.value)}/> <br />
            <input type='text' placeholder='password' defaultValue={pass} onKeyUp={e=>setPassword(e.target.value)}/> <br />
            <button onClick={()=>qoshish()}>Kirish</button>
        </div>
    )
}

export default Home