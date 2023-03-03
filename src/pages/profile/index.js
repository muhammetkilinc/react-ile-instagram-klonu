import classNames from "classnames"
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom"
import Icon from "../../components/Icon.js"
import { getUserInfo } from "../../firebase.js"
import Header from "./components/header.js"
import ProfileNotFound from "./notFound.js"

export default function ProfileLayout() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const {username} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getUserInfo(username).then(user => {
            setUser(user)
        })
        .catch(err => {
            setUser(false)
        })
    }, [])

    /*

    navigate("/", {
        replace: true
    })
    
    */

    if (user == false) {
       return <ProfileNotFound />
    }

    if (user == null) {
        return (
            <div className="flex items-center justify-center">
                <img src="/gifs/loading.gif" className="w-40 mt-6" alt="" />
            </div>
        )
    }

    return user && (
        <div>
            <Helmet>
                <title>{user.full_name} (@{user.username}) • Instagram fotoğrafları ve videoları</title>
            </Helmet>
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