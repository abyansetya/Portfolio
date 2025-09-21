import data from "@emoji-mart/data";
import { init } from "emoji-mart";

init({ data });

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* layer dasar: abu-abu solid */}
      <span className="text-black font-poppins">{text}</span>

      {/* overlay: hanya highlight putih bergerak */}
      <span
        className={`absolute inset-0 bg-clip-text text-transparent bg-[length:200%_100%] ${
          disabled ? "" : "animate-shine"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.85) 50%, transparent 60%)",
          animationDuration: `${speed}s`,
          WebkitTextFillColor: "transparent",
          backgroundRepeat: "no-repeat",
        }}
      >
        {text}
      </span>
    </span>
  );
};
export default ShinyText;
