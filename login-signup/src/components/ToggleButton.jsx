const ToggleButton = ({ isChecked, onChange }) => {
  return (
    <div className="relative inline-block">
      <div className="w-[74px] h-[36px] relative mx-auto overflow-hidden rounded-full shadow-md">
        <input
          type="checkbox"
          className="w-full h-full opacity-0 z-30 absolute cursor-pointer"
          checked={isChecked}
          onChange={onChange}
        />
        <div className="knob bg-white absolute z-20 top-0 left-0 right-0 bottom-0">
          <span className={`
            absolute top-1 left-1 w-[28px] h-[28px] 
            flex items-center justify-center
            text-xs font-bold text-white
            rounded-full transition-all duration-300 ease-in-out
            ${isChecked 
              ? 'translate-x-[38px] bg-blue-500' 
              : 'translate-x-0 bg-blue-500'
            }
          `}>    
          </span>
        </div>
      </div>
    </div>
  )
}

export default ToggleButton