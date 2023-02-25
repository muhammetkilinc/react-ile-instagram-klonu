import classNames from "classnames"
import { useState, useEffect } from "react"
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom"
import Icon from "../../components/Icon.js"
import { getUserInfo } from "../../firebase.js"
import Header from "./components/header.js"

export default function ProfileLayout() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)
    const {username} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getUserInfo(username).then(user => {
            setUser(user)
        })
        .catch(err => {
            navigate("/", {
                replace: true
            })
        })
    }, [])

    return user && (
        <div>
            <Header user={user} />
            <nav className="border-t flex gap-x-16 justify-center items-center">
                <NavLink to={`/${username}`} end={true} className={({isActive}) => classNames({
                    "text-xs flex py-5 border-t  tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                    "text-[#8e8e8e] border-transparent": !isActive,
                    "text-black border-black": isActive
                })}>
                    <Icon name="post" size={12} /> GÖNDERİLER
                </NavLink>
                <NavLink to={`/${username}/tagged`} end={true} className={({isActive}) => classNames({
                    "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                    "text-[#8e8e8e] border-transparent": !isActive,
                    "text-black border-black": isActive
                })}>
                    <Icon name="tag" size={12} /> ETİKETLENENLER
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}