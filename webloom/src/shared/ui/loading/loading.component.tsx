import React from 'react';
import { BounceLoader } from "react-spinners";
import clsx from "clsx";

const AppLoading = () => {
  return (
    <article className={clsx([
      "w-full h-full",
      "flex justify-center items-center",
      "bg-slate-300 bg-opacity-95",
    ])}>
      <BounceLoader className="color-primary-0 text-primary-0"/>
    </article>
  );
};

export default AppLoading;
