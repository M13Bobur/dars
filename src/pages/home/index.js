import React, { useState } from 'react'
import {store} from "../../redux"
import {useNavigate} from "react-router-dom"

function Home() {
    const nag = useNavigate()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    
    const qoshish = () => {
        console.log(name, age);
        store.dispatch({ type:"ADD", value: {name, age} })
    }

    const otish = (name) => {
        nag("/table", {state: {name: name}})
    }

    return (
        <div>
            <input type="text" placeholder='name' defaultValue={name} onKeyUp={e=>setName(e.target.value)}/>
            <input type='text' placeholder='age' defaultValue={age} onKeyUp={e=>setAge(e.target.value)}/>
            <button onClick={()=>qoshish()}>Qoshish</button>
            <br /><br />
            <button onClick={()=>otish("fargona")}>fargona</button>
            <button onClick={()=>otish("andijon")}>andijon</button>
            <button onClick={()=>otish("namangan")}>namangan</button>
        </div>
    )
}

export default Home