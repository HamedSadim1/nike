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
      className={`font-montserrat flex items-center justify-center gap-2 border px-7 py-4 text-lg leading-none ${
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
          width={20}
          height={20}
          className="ml-2 size-5 h-auto! w-auto! rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
