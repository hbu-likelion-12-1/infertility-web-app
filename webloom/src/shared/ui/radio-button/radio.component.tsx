import React, { createContext, HTMLAttributes, ReactNode, useContext } from 'react';
import Button from "@/shared/ui/button";
import clsx from "clsx";
import { getRadioTheme } from "@/shared/ui/radio-button/lib/theme.util";
import IconUtils from "@/shared/ui/IconUtils";


export type Item = string | number;

interface ProviderProps {
  items: Item[];
  children: ReactNode;
  current?: Item;
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
  theme?: "depression" | "default";
  radioMode?: boolean;
}

const RadioButton: React.FC<ButtonProps> = ({
                                              item,
                                              children,
                                              className,
                                              theme = "default",
                                              radioMode = false,
                                              ...props
                                            }) => {
  const { setter, selected } = useRadioContext();
  const isSelected = selected === item;

  const onClickButton = () => setter(item);

  if (radioMode) {
    return (
      <button
        onClick={onClickButton}
      >
        {isSelected && <IconUtils.ActiveRadio/>}
        {!isSelected && <IconUtils.DeActiveRadio/>}
      </button>
    );
  }

  return (
    <Button
      theme={getRadioTheme(isSelected, theme)}
      round={theme === "default" ? "rounded" : "normal"}
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
