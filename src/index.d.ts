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

export type EditorLineNumbersProps = {
  lineCount: number;
  showLineNumbers: boolean;
  theme: Theme;
};

export const EditorLineNumbers: (props: EditorLineNumbersProps) => JSX.Element;

export type EditorDisplayProps = {
  code: string;
  highlight: (code: string) => string;
  visibleLine: number;
  visibleLineCount: number;
  fontSize: number;
  theme: Theme;
};

export const EditorDisplay: (props: EditorDisplayProps) => JSX.Element;

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

export const EasyCodeEditor: (props: EasyCodeEditorProps) => JSX.Element;
