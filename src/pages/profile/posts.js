import Icon from "../../components/Icon";

export default function ProfilePosts() {
    return (
        <div className="flex justify-center flex-col items-center pt-10">
            <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center">
                <Icon name="picture" size={34} />
            </div>
            <h6 className="text-[28px] font-light">Gönderi Yok</h6>
        </div>
    )
};
