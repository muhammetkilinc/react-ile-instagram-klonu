import Button from "../../components/Button";
import Icon from "../../components/Icon";

export default function Inbox() {
    return (
        <div className="w-full h-full flex gap-y-1 items-center justify-center flex-col">
            <Icon name="direct-empty" size={96} />
            <h2 className="text-[22px]">Mesajların</h2>
            <p className="text-sm text-[#8e8e8e] text-center">
            Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder.
            </p>
            <div className="mt-3">
            <Button>Mesaj Gönder</Button>
            </div>
        </div>
    )
};
