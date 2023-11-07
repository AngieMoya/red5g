"use client"
import { useState } from "react"
import Image from "next/image"
import { twMerge } from 'tailwind-merge'

type InputProps = {
    label?: string
    type?: string
    placeholder?: string
    name?: string
    rightIcon?: string
    className?: string
}

export default function Input({ label, type, placeholder, name, rightIcon, className }: InputProps) {
    const [value, setValue] = useState("")
    const [focus, setFocus] = useState(false)
    return (
        <div className={twMerge('flex justify-between border border-gray-light-variant rounded-md px-4 py-2 max-h-[56px] bg-white', className)}>
            <div className="flex flex-col flex-1">
                {focus || value.trim().length ? <label htmlFor={name} className='text-xs text-gray-variant'>{label}</label> : null}
                <input value={value} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChange={(e) => {
                    setValue(e.currentTarget.value)
                }} className={`text-gray-dark outline-none ${!focus ? "my-2" : ""}`} type={type} name={name} placeholder={!focus ? placeholder : ""} />
            </div>
            {rightIcon ? <Image className="min-w-[24px]" src={rightIcon}
                height={24}
                width={24}
                alt="calendar" /> : null}
        </div>
    )
}