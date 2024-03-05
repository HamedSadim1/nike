import Image from "next/image";

interface Props {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}
const Button = ({
  iconUrl,
  label,
  backgroundColor,
  borderColor,
  textColor,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red  text-white border-coral-red"
      } rounded-full  `}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="arrow-right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
