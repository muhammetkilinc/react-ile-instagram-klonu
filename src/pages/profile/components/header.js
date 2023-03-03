import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import avatar from '../../../assets/icons/avatar.png'

export default function Header({user}) {
    const defaultUser = useSelector(state => state.auth.user)
    return(
        <header className="flex items-center px-24 gap-x-24 py-4 pb-10">
            <img src={avatar} alt="avatar" className='w-[150px] h-[150px] rounded-full' />
            <div>
                <div className='mb-4'>
                <h1 className='text-[28px] font-light' title={user.full_name}>{user.username} 
                {
                    user.username == defaultUser.username && (
                        <Link to="/logout" className='color-blue text-[13px] bg-[#f00] text-white rounded-full p-1 font-semibold ml-4 pb-[7px] pr-4 pl-4'>Çıkış</Link>
                    )
                }
                </h1>
                </div>
                <nav className='flex gap-x-10 items-center'>
                    <div><b>{user.post}</b> gönderi</div>
                    <div><b>{user.followers.length}</b> takipçi</div>
                    <div><b>{user.following.length}</b> takip</div>
                </nav>
            </div>
        </header>
    )
};
