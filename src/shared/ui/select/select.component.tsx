import React from 'react';
import { default as ReactSelect, Props, StylesConfig } from 'react-select';

interface SelectProps extends Props {
}

const Select: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <ReactSelect
      styles={styles}
      {...props}
    />
  );
};


const styles: StylesConfig = {
  control: style => ({
    ...style,
    borderRadius: "15px",
    height: "54px",
    backgroundColor: "#F5F5F5",
    border: "none",
    minWidth: "100px",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)",
    color: "#7C7C7C",
  }),
};

export default Select;
