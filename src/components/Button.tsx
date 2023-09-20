type Props = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ label, ...props }: Props) => {
  return (
    <button
      {...props}
      className="rounded-full bg-slate-500 text-white px-3 text-[15px] h-9"
    >
      {label}
    </button>
  );
};
