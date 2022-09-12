import { FaFilePdf } from "react-icons/fa";
export default function ResumeButton() {
  function telegramAlert() {
    fetch(
      `https://api.telegram.org/bot5531898247:AAG8rxOFIKmlwS6PYBVTuXdTGMqIaSpl5eE/sendMessage?chat_id=231233238&text=RESUME BUTTON ALERT: ${new Date()} `
    );
  }
  return (
    //to be converted to <a></> when a cv is available
    <div
      className="flex justify-evenly items-center px-6 py-1 border rounded-full border-white text-[1rem]  font-semibold sm:w-1/2"
      //   href=""
      //   target={"_blank"}
      onClick={telegramAlert}
    >
      <span>see the CV</span>{" "}
      <span className="text-red-600">
        <FaFilePdf />
      </span>
    </div>
  );
}
