export function getRadioTheme(isSelected: boolean, theme: "depression" | "default") {
  if (isSelected && theme === "default") {
    return "radio";
  }

  if (!isSelected && theme === "default") {
    return "radio-disabled";
  }

  if (isSelected && theme === "depression") {
    return "depression";
  }

  return "radio-disabled";
}
