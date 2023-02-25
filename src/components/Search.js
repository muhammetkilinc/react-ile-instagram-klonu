import Icon from "./Icon"
import { AiFillCloseCircle } from "react-icons/ai"
import {useState} from 'react'
import classNames from 'classnames'

export default function Search() {

    const [open, setOpen] = useState(false)

    return(
        <div className="w-[268px] relative">
            <span className={classNames({
                "absolute text-[#8e8e8e] pointer-events-none top-0 left-0 h-9 w-9 flex items-center justify-center": true,
                "hidden": open
            })}>
            <Icon name="search" />
            </span>
            <input onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} type="text" placeholder="Ara" className="h-9 rounded pl-9 focus:pl-3 outline-none w-full bg-[#efefef]" />
            <button onClick={() => setOpen(false)} className={classNames({
                "absolute text-[#c7c7c7] top-0 right-0 hidden cursor-pointer h-9 w-9 items-center justify-center":true,
                "!flex": open
            })}>
                <AiFillCloseCircle />
            </button>
        </div>
    )
}