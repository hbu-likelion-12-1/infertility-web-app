import React from 'react';
import { default as Bar } from "@ramonak/react-progress-bar";

interface Props {
  completed: number;
}

const ProgressBar: React.FC<Props> = ({ completed }) => {
  return (
    <Bar
      completed={completed}
      labelColor="#F3AF81"
      baseBgColor="#FDEFE6"
      bgColor="#F3AF81"
      height="10px"
      borderRadius="0px"
    />);
};

export default ProgressBar;
