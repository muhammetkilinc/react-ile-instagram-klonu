import { Link } from "react-router-dom";

export default function ProfileNotFound() {
    return (
        <div className="text-center grid gap-y-6 pt-5">
            <h6 className="text-[22px] font-semibold">Üzgünüz, bu sayfaya ulaşılamıyor.</h6>
            <p>
            Tıkladığın bağlantı bozuk olabilir veya sayfa kaldırılmış olabilir. <Link className="text-link" to="/">Instagram'a geri dön</Link>.
            </p>
        </div>
    )
};
