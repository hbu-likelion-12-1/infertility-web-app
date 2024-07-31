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
      bgColor="#FDEFE6"
      
    />);
};

export default ProgressBar;
