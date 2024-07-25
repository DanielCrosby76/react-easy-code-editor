import { FC } from "react";

export type Theme = {
  border: string;
  backgroundColor: string;
  color: string;
  numbersBackgroundColor: string;
  numbersColor: string;
  numbersBorder: string;
  caretColor: string;
  font: string;
  fontSize: number;
};

export type EasyCodeEditorProps = {
  value?: string;
  onChange?: (code: string) => void;
  placeholder?: string;
  highlight?: (code: string) => string;
  dynamicHighlight?: boolean;
  readonly?: boolean;
  trapTab?: boolean;
  tabWidth?: number;
  showLineNumbers?: boolean;
  theme?: Theme;
};
