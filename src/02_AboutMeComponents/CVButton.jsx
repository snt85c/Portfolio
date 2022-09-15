import { FaFilePdf } from "react-icons/fa";
export default function CVButton() {
  function telegramAlert() {
    fetch(
      `https://api.telegram.org/bot5531898247:AAG8rxOFIKmlwS6PYBVTuXdTGMqIaSpl5eE/sendMessage?chat_id=231233238&text=RESUME BUTTON ALERT: ${new Date()} `
    );
  }
  return (
    //to be converted to <a></> when a cv is available
    <button
      className="flex items-center min-w-[200px] text-[1rem] sm:text-[1.5vw] gap-2 px-6 py-1 m-5 border rounded-full border-white text-black hover:text-white duration-300 font-semibold "
      //   href=""
      //   target={"_blank"}
      onClick={telegramAlert}
    >
      <span>Check my CV</span>{" "}
      <span className="text-red-600">
        <FaFilePdf />
      </span>
    </button>
  );
}
