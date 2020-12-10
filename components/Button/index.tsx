interface ButtonComponentProps {
  onClick?: () => void;
  text: string;
}

export const ButtonComponent = ({
  onClick,
  text,
}: ButtonComponentProps) => {
  return <>
  <button className='button-component' onClick={onClick}>
    {text}
  </button>
  <style jsx>{`
    .button-component {
      background-color: rgba(100, 100, 100, 0.5);
      color: white;
      cursor: pointer;
      padding: 4px 18px;
      border-radius: 20px;
      border-color: white;
      margin: 5px auto 0;
      font-weight: bold;
      text-shadow: 1px 1px black;
      transition: background-color 0.06s ease-out, transform 0.06s ease-out;
    }

    .button-component:hover,
    .button-component:focus,
    .button-component:active {
      background-color: rgba(255, 255, 255, 0.6);
      transform: scale(1.1, 1.1);
    }
  `}</style>
  </>
};
