

function OptionCard({ title, icon, description, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center border rounded-xl p-6 transition cursor-pointer shadow-sm focus:outline-none w-full min-h-[120px] max-w-[220px]
        ${active ? "border-primary bg-blue-50" : "border-gray-200 bg-white hover:border-primary/90 hover:bg-blue-50"}`}
    >
      {icon && <div className="text-3xl mb-2">{icon}</div>}
      <div className="font-semibold text-lg text-gray-800 mb-1">{title}</div>
      {description && <div className="text-gray-500 text-sm text-center">{description}</div>}
    </button>
  );
}

export default OptionCard;