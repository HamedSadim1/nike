import Image from "next/image";

interface Props {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
}
const Button = ({
  iconUrl,
  label,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}: Props) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 border px-7 py-4 font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "border-coral-red  bg-coral-red text-white"
      } rounded-full
      ${fullWidth && "w-full"}

        `}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="arrow-right"
          className="ml-2 size-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
