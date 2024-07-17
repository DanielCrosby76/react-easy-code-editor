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

export type EasyEditorLineNumbersProps = {
  lineCount: number;
  showLineNumbers: boolean;
  theme: Theme;
};

export const EasyEditorLineNumbers: (props: EasyEditorLineNumbersProps) => JSX.Element;

export type EasyEditorDisplayProps = {
  code: string;
  highlight: (code: string) => string;
  visibleLine: number;
  visibleLineCount: number;
  fontSize: number;
  theme: Theme;
};

export const EasyEditorDisplay: (props: EasyEditorDisplayProps) => JSX.Element;

export type EasyEditorProps = {
  initialValue?: string;
  onChange?: (code: string) => void;
  highlight?: (code: string) => string;
  dynamicHighlight?: boolean;
  readonly?: boolean;
  trapTab?: boolean;
  tabWidth?: number;
  showLineNumbers?: boolean;
  theme?: Theme;
};

export const EasyEditor: (props: EasyEditorProps) => JSX.Element;
