import { useState } from "react";
import "tailwindcss/tailwind.css";

export default function Home() {
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(null);
  const [date3, setDate3] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDate1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate1(new Date(e.target.value));
  };

  const handleDate2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate2(new Date(e.target.value));
  };

  const handleDate3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate3(new Date(e.target.value));
  };

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

    // クリップボードにコピーする
    if (selectedDateString) {
      navigator.clipboard.writeText(selectedDateString).then(() => {
        console.log("コピーしました");
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8 text-center font-roboto">
        候補日くん
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-1/2">
        <div className="flex items-center space-x-2">
          <label htmlFor="date1" className="font-semibold w-16">
            日付1:
          </label>
          <input
            type="date"
            id="date1"
            onChange={handleDate1Change}
            className="border border-gray-300 rounded p-1 w-full"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="date2" className="font-semibold w-16">
            日付2:
          </label>
          <input
            type="date"
            id="date2"
            onChange={handleDate2Change}
            className="border border-gray-300 rounded p-1 w-full"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="date3" className="font-semibold w-16">
            日付3:
          </label>
          <input
            type="date"
            id="date3"
            onChange={handleDate3Change}
            className="border border-gray-300 rounded p-1 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
        >
          送信
        </button>
      </form>
      {selectedDate && (
        <div className="mt-8 space-y-4 w-1/2">
          <pre className="text-lg whitespace-pre-wrap">{selectedDate}</pre>
          <button
            onClick={() => {
              navigator.clipboard.writeText(selectedDate).then(() => {
                console.log("コピーしました");
              });
            }}
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full"
          >
            コピーする
          </button>
        </div>
      )}
    </div>
  );
}
