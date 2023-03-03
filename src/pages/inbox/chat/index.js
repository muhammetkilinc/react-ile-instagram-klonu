import Header from "./components/header";
import Messages from "./components/messages";
import Reply from "./components/reply";
import profil from '../../../assets/icons/avatar.png'
import { useState } from "react";

export default function Chat() {

    const user = {
        full_name: 'Muhammet KILINÇ',
        username: 'muhammetkilinc',
        avatar: 'https://pbs.twimg.com/profile_images/1623336909526138887/NTQ38_uw_400x400.jpg'
    }

    const [messages, setMessages] = useState([
        {
            from: {
                id: '8dd0oVcvwGZW4WTiL3bOtKQB1Fq2',
                full_name: 'Muhammet KILINÇ',
                username: 'muhammetkilinc',
                avatar: 'https://pbs.twimg.com/profile_images/1623336909526138887/NTQ38_uw_400x400.jpg'
            },
            message: 'test'
        },
        {
            from: {
                id: 'h8P9SlFgfpN0BLPyToq6vWrTfXb2',
                full_name: 'Ahmet Kandemir',
                username: 'ahmetkandemir',
                avatar: `${profil}`
            },
            message: 'test2'
        },
        {
            from: {
                id: '8dd0oVcvwGZW4WTiL3bOtKQB1Fq2',
                full_name: 'Muhammet KILINÇ',
                username: 'muhammetkilinc',
                avatar: 'https://pbs.twimg.com/profile_images/1623336909526138887/NTQ38_uw_400x400.jpg'
            },
            message: 'deneme'
        },
        {
            from: {
                id: '8dd0oVcvwGZW4WTiL3bOtKQB1Fq2',
                full_name: 'Muhammet KILINÇ',
                username: 'muhammetkilinc',
                avatar: 'https://pbs.twimg.com/profile_images/1623336909526138887/NTQ38_uw_400x400.jpg'
            },
            message: 'merhaba'
        },
        {
            from: {
                id: 'h8P9SlFgfpN0BLPyToq6vWrTfXb2',
                full_name: 'Ahmet Kandemir',
                username: 'ahmetkandemir',
                avatar: `${profil}`
            },
            message: 'test2'
        },
        {
            from: {
                id: 'h8P9SlFgfpN0BLPyToq6vWrTfXb2',
                full_name: 'Ahmet Kandemir',
                username: 'ahmetkandemir',
                avatar: `${profil}`
            },
            message: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
        },
        {
            from: {
                id: '8dd0oVcvwGZW4WTiL3bOtKQB1Fq2',
                full_name: 'Muhammet KILINÇ',
                username: 'muhammetkilinc',
                avatar: 'https://pbs.twimg.com/profile_images/1623336909526138887/NTQ38_uw_400x400.jpg'
            },
            message: 'merhaba'
        },
        {
            from: {
                id: 'h8P9SlFgfpN0BLPyToq6vWrTfXb2',
                full_name: 'Ahmet Kandemir',
                username: 'ahmetkandemir',
                avatar: `${profil}`
            },
            message: 'test2'
        },
        {
            from: {
                id: 'h8P9SlFgfpN0BLPyToq6vWrTfXb2',
                full_name: 'Ahmet Kandemir',
                username: 'ahmetkandemir',
                avatar: `${profil}`
            },
            message: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
        },
    ])

    return (
        <div className="flex-1">
            <Header user={user} />
            <Messages messages={messages} />
            <Reply setMessages={setMessages} />
        </div>
    )
};
