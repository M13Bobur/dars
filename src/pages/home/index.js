import React, { useState } from 'react'
import {store} from "../../redux"
import {useNavigate} from "react-router-dom"

function Home() {
    const nag = useNavigate()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    
    const qoshish = () => {
        console.log(name, age);
        localStorage.setItem("name", name)
        localStorage.setItem("age", age)
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
            <input type="text" placeholder='name' defaultValue={name} onKeyUp={e=>setName(e.target.value)}/>
            <input type='text' placeholder='age' defaultValue={age} onKeyUp={e=>setAge(e.target.value)}/>
            <button onClick={()=>qoshish()}>Qoshish</button>
            <br /><br />
            <button onClick={()=>korish()}>korish</button>
        </div>
    )
}

export default Home