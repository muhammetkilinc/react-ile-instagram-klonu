import { useState } from "react";
import Icon from "../../../../components/Icon";
import profil from '../../../../assets/icons/avatar.png'

export default function Reply({ setMessages }) {
  const [message, setMessage] = useState("");

  const sendMessage = e => {
    e.preventDefault()
    setMessages(messages => [
        ...messages,
        {
            from: {
                id: 'h8P9SlFgfpN0BLPyToq6vWrTfXb2',
                full_name: 'Ahmet Kandemir',
                username: 'ahmetkandemir',
                avatar: `${profil}`
            },
            message
        }
    ])
    setMessage('')
  }

  return (
    <footer className="h-[84px] flex items-center justify-center px-6">
      <form onSubmit={sendMessage} className="h-[44px] w-full border rounded-full flex items-center pl-[11px] pr-[8px]">
        <button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
          <Icon name="emoji" size={24} />
        </button>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="flex-1 outline-none h-[40px] text-sm px-[9px] focus:placeholder:text-gray-300 placeholder:font-semibold"
          autoFocus={true}
          placeholder="Mesaj..."
        />
        {message == "" ? 
          <>
            <button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
              <Icon name="picture" size={24} />
            </button>
            <button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
              <Icon name="heart" size={24} />
            </button>
          </> : 
          <>
          <button type="submit" className="text-brand font-semibold texxt-sm px-3">
            Gönder
          </button>
          </>
        }
      </form>
    </footer>
  );
}
