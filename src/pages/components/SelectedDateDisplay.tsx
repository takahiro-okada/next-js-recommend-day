import React from "react";

interface SelectedDateDisplayProps {
  selectedDate: string;
}

const SelectedDateDisplay: React.FC<SelectedDateDisplayProps> = ({
  selectedDate,
}) => {
  return (
    <>
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
    </>
  );
};

export default SelectedDateDisplay;
