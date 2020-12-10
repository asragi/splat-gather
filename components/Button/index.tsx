interface ButtonComponentProps {
  onClick?: () => void;
  text: string;
}

export const ButtonComponent = ({
  onClick,
  text,
}: ButtonComponentProps) => {
  return <button onClick={onClick}>
    {text}
  </button>
};
