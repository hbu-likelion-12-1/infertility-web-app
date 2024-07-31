import React, { HTMLAttributes } from 'react';
import clsx from "clsx";


interface Props extends HTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
}

const Input: React.FC<Props> = ({ placeholder, value, className, ...props }) => {
  return (
    <input
      value={value}
      className={clsx([
        "p-[16px] rounded-[15px] text-[#7C7C7C]",
        "bg-[#F5F5F5] shadow-input",
        className,
      ])}
      onChange={e => e}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
