import React, { createContext, HTMLAttributes, ReactNode, useContext } from 'react';
import Button from "@/shared/ui/button";
import clsx from "clsx";


export type Item = string | number;

interface ProviderProps {
  items: Item[];
  children: ReactNode;
  current: Item;
  setter: (item: Item) => void;
  className?: string;
}

interface ContextStates {
  items: Item[];
  selected?: Item;
  setter: (item: Item) => void;
}

const Context = createContext<ContextStates>({
  items: [],
  setter: () => {
  },
});

const useRadioContext = () => useContext(Context);


const RadioProvider: React.FC<ProviderProps> = ({ items, setter, children, current, className }) => {
  return (
    <div className={className}>
      <Context.Provider value={{ items, setter, selected: current }}>
        {children}
      </Context.Provider>
    </div>

  )
};

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  item: Item;
  children: ReactNode;
}

const RadioButton: React.FC<ButtonProps> = ({ item, children, className, ...props }) => {
  const { items, setter, selected } = useRadioContext();
  const isSelected = selected === item;

  const onClickButton = () => setter(item);

  return (
    <Button
      theme={isSelected ? "radio" : "radio-disabled"}
      round="rounded"
      className={clsx([
        className,
        "font-normal",
      ])}
      {...props}
      onClick={onClickButton}
    >
      {children}
    </Button>
  );
};

const Radio = {
  Provider: RadioProvider,
  Button: RadioButton,
};

export default Radio;
