const ToggleButton = ({ isChecked, onChange }) => {
  return (
    <div className="relative inline-block">
      {/* Button Container */}
      <div className="w-[74px] h-[36px] relative mx-auto overflow-hidden rounded-full shadow-md">
        {/* Checkbox Input */}
        <input
          type="checkbox"
          className="w-full h-full opacity-0 z-30 absolute cursor-pointer"
          checked={isChecked}
          onChange={onChange}
        />
        
        {/* Sliding Knob */}
        <div className="knob absolute z-20 top-0 left-0 right-0 bottom-0">
          <span className={`
            absolute top-1 left-1 w-[28px] h-[28px] 
            flex items-center justify-center
            text-xs font-bold text-white
            rounded-full transition-all duration-300 ease-in-out
            ${isChecked 
              ? 'translate-x-[38px] bg-red-500' 
              : 'translate-x-0 bg-blue-500'
            }
          `}>
            {isChecked ? 'NO' : 'YES'}
          </span>
        </div>
        
        {/* Background Layer */}
        <div className={`
          absolute w-full h-full transition-all duration-300
          ${isChecked ? 'bg-red-100' : 'bg-blue-100'}
        `}/>
      </div>
    </div>
  )
}

export default ToggleButton