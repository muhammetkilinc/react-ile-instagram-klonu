import classNames from "classnames"
import { NavLink, useParams } from "react-router-dom"

export default function ChatList() {


    const {conversationId} = useParams()
    const chats = [
        {
            id: 1,
            user: {
                avatar: 'https://e0.pxfuel.com/wallpapers/315/523/desktop-wallpaper-hunter-anime-anime-aesthetic-killua-1080x1080.jpg',
                full_name: 'Tayfun Erbilen',
                username: 'tayfunerbilen'
            },
            unread: true,
            lastMessage: 'Test mesajı'
        },
        {
            id: 2,
            user: {
                avatar: 'https://wallpaperaccess.com/full/950836.jpg',
                full_name: 'Mehmet Ermiş',
                username: 'mehmetermis567'
            },
            unread: false,
            lastMessage: 'merhaba'
        },
        {
            id: 3,
            user: {
                avatar: 'https://wallpaperaccess.com/full/2996393.jpg',
                full_name: 'Burcu Güner',
                username: 'burcuguner'
            },
            unread: true,
            lastMessage: 'deneme mesajı'
        },
        {
            id: 4,
            user: {
                avatar: 'https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-m-design_460848-10168.jpg',
                full_name: 'Mustafa Gümüş',
                username: 'mustafa_gumus_1234'
            },
            unread: true,
            lastMessage: 'Test mesajı'
        },
    ]

    return (
        <div className="h-[calc(100%-60px)] overflow-auto py-3">
            <header className="flex items-center justify-between font-semibold px-5 mb-1">
                <h6 className="text-base">Mesajlar</h6>
                <button className="text-brand text-sm">16 istek</button>
            </header>
            {
                chats.map(chat => (
                    <NavLink className={classNames({
                        "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
                        "font-bold": chat?.unread,
                        "!bg-[#efefef]": +conversationId == chat.id
                    })} key={chat.id} to={`/inbox/${chat.id}`}>
                        <img src={chat.user.avatar} className="w-14 h-14 rounded-full" alt="avatar" />
                        <div>
                            <h6 className="text-sm">{chat.user.full_name}</h6>
                            <p className={`text-sm ${!chat?.unread && 'text-[#8e8e8e]'}`}>{chat.lastMessage}</p>
                        </div>
                    </NavLink>
                ))
            }
        </div>
    )
};
