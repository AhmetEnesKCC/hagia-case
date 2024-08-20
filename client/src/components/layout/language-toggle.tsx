import React from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n.languages);
  return (
    <ToggleGroup
      onValueChange={(lan) => {
        i18n.changeLanguage(lan);
      }}
      type="single"
      value={i18n.language}
    >
      {Object.keys(i18n.options.resources ?? {}).map((l) => (
        <ToggleGroupItem key={l} value={l}>
          {l}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default LanguageToggle;
