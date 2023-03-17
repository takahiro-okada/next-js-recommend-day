import { useState } from "react";
import "tailwindcss/tailwind.css";
import DatePicker from "./components/DatePicker";
import SelectedDateDisplay from ".//components/SelectedDateDisplay";
import useDateInput from "../hooks/useDateInput";

const App = () => {
  const [date1, handleDate1Change] = useDateInput();
  const [date2, handleDate2Change] = useDateInput();
  const [date3, handleDate3Change] = useDateInput();
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dates = [date1, date2, date3].filter((date) => date !== null);
    const dateString = dates.map((date, index) => {
      const year = date?.getFullYear();
      const month = date?.getMonth()! + 1;
      const day = date?.getDate();
      return `${index + 1}. ${year}年${month}月${day}日`;
    });
    const selectedDateString = dates.length
      ? `お手数ですが、下記の候補日で都合のよい日時はありますか？\n${dateString.join(
          "\n"
        )}`
      : "";
    setSelectedDate(selectedDateString);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8 text-center font-roboto">
        候補日くん
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-1/2">
        <DatePicker id="date1" label="日付1:" onChange={handleDate1Change} />
        <DatePicker id="date2" label="日付2:" onChange={handleDate2Change} />
        <DatePicker id="date3" label="日付3:" onChange={handleDate3Change} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
        >
          送信
        </button>
      </form>
      <SelectedDateDisplay selectedDate={selectedDate} />
    </div>
  );
};

export default App;
