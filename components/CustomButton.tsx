import { CustomButtonProps } from '@types';
import Image from 'next/image';

const Button = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}: CustomButtonProps) => (
  <button
    disabled={false}
    type={btnType || 'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1`}>{title}</span>
  </button>
);

export default Button;
