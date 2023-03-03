export default function Button({type= 'button', children, ...props}) {
  return (
    <button
      type={type}
      {...props}
      className="h-[30px] mt-1 w-full flex items-center justify-center gap-x-2 rounded-[9px] bg-brand text-white p-4 pb-[17px] text-sm font-medium disabled:opacity-50"
    >
      {children}
    </button>
  );
}
