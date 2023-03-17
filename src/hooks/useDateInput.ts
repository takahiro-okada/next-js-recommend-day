import { useState } from "react";

const useDateInput = () => {
  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };

  return [date, handleDateChange] as const;
};

export default useDateInput;
