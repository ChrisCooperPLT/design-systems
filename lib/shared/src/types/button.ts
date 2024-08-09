export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  loading?: boolean;
  textClassName?: string;
}
