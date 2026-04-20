  import type { ButtonProps } from "./type";

export default function Button({ text, className,}: ButtonProps) {
  const classes = ` bg-[] ${className ?? " rounded-xl text-[#88c74a] w-50 border border-[#88c74a] hover:bg-[#88c74a] hover:text-white"}`;



  return <button className={classes}>{text}</button>;
}