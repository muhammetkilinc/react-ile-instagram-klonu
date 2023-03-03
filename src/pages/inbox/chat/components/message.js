import classNames from "classnames";
import { useSelector } from "react-redux";

export default function Message({ message }) {

    const user = useSelector(state => state.auth.user)

    return (
        <div className={classNames({
            "flex gap-x-2 max-w-[50%]": true,
            "self-end": user.uid == message.from.id
        })}>
            {
                user.uid != message.from.id && (
                    <img src={message.from.avatar} title={`${message.from.username}`} className="w-6 h-6 rounded-full self-center" alt="" />
                )
            }
            <p style={{hyphens: 'auto'}} className={classNames({
                "min-h-[44px] inline-flex items-center px-5 py-2 text-sm rounded-3xl": true,
                "bg-[#efefef]": user.uid == message.from.id,
                "border border-gray-200": user.uid != message.from.id
            })}>
                 {message.message}
            </p>
            {
                user.uid == message.from.id && (
                    <img src={message.from.avatar} title={`Siz (${user.username})`} className="w-6 h-6 rounded-full self-center" alt="" />
                )
            }
        </div>
    )
};
