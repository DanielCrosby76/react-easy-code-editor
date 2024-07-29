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

export const DefaultLight: Theme;

export const DefaultDark: Theme;

export type EasyCodeEditorProps = {
  value?: string;
  onChange?: (code: string) => void;
  placeholder?: string;
  highlight?: (code: string) => string | JSX.Element | JSX.Element[];
  dynamicHighlight?: boolean;
  readonly?: boolean;
  autoIndent?: boolean;
  wrapParens?: boolean;
  trapTab?: boolean;
  tabWidth?: number;
  showLineNumbers?: boolean;
  theme?: Theme;
};

export const EasyCodeEditor: FC<EasyCodeEditorProps>;

export default EasyCodeEditor;
