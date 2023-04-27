import { FaFilePdf } from "react-icons/fa";
import CV from "./CV Santi Cacciola.pdf";
export default function CVButton() {
  function telegramAlert() {
    if (process.env.NODE_ENV !== "development")
      fetch(
        `https://api.telegram.org/bot5531898247:AAG8rxOFIKmlwS6PYBVTuXdTGMqIaSpl5eE/sendMessage?chat_id=231233238&text=RESUME BUTTON ALERT: ${new Date()} `
      );
  }
  return (
    <button
      className="flex items-center min-w-[200px] text-[1rem] sm:text-[1.5vw] gap-2 px-6 py-1 m-5 border rounded-full border-white text-black hover:text-white duration-300 font-semibold "
      //   href=""
      //   target={"_blank"}
      onClick={telegramAlert}
    >
      <a href={CV} download>
        Check my CV
      </a>{" "}
      <span className="text-red-600">
        <FaFilePdf />
      </span>
    </button>
  );
}
