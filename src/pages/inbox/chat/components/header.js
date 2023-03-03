import { Link } from "react-router-dom";
import Icon from "../../../../components/Icon";

export default function Header({user}) {
    return (
        <div className="h-[60px] border-b border-gray-300 flex justify-between items-center px-6">
            <button className="flex items-center gap-x-4">
                <img src={user.avatar} className="w-6 h-6 rounded-full" alt="" />
                <Link to={`/${user.username}`}>
                    <h6 className="text-base font-semibold">{user.full_name}</h6>
                    </Link>
            </button>
            <button>
                <Icon name="info" size={24} />
            </button>
        </div>
    )
};
