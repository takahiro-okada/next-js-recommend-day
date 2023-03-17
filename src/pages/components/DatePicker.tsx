import React from "react";

interface DatePickerProps {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ id, label, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor={id} className="font-semibold w-16">
        {label}
      </label>
      <input
        type="date"
        id={id}
        onChange={onChange}
        className="border border-gray-300 rounded p-1 w-full"
      />
    </div>
  );
};

export default DatePicker;
