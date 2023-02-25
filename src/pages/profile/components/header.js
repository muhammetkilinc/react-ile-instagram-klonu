import avatar from '../../../assets/icons/avatar.png'

export default function Header({user}) {
    return(
        <header className="flex items-center px-24 gap-x-24 py-4 pb-10">
            <img src={avatar} alt="avatar" className='w-[150px] h-[150px] rounded-full' />
            <div>
                <div className='mb-4'>
                <h1 className='text-[28px] font-light' title={user.full_name}>{user.username}</h1>
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
