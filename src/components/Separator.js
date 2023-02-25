export default function Separator({ label = 'YA DA'}) {
    return (
        <div className="flex items-center my-2.5 mb-3.5">
                  <div className="h-px bg-gray-300 flex-1"></div>
                  <span className="px-4 text-[13px] font-medium text-gray-400">
                    {label}
                  </span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>
    )
};
