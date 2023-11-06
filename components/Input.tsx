"use client"
import { useState } from "react"

type InputProps = {
    label?: string
    type?: string
    placeholder?: string
    name?: string
}

export default function Input({ label, type, placeholder, name }: InputProps) {
    const [value, setValue] = useState("")
    const [focus, setFocus] = useState(false)
    return (
        <div className='flex flex-col border border-gray-light-variant rounded-md px-4 py-2 min-h-[58px]'>
            {focus || value.trim().length ? <label htmlFor={name} className='text-xs text-gray-variant'>{label}</label>: null}
            <input value={value} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={(e) => {
                setValue(e.currentTarget.value)
            }} className={`text-gray-dark outline-none ${!focus ? "my-2":""}`} type={type} name={name} placeholder={!focus ? placeholder:""} />
        </div>
    )
}