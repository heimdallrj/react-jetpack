import clsx from 'clsx';
import { useConfig } from '../hooks';

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function FileInput({ className, ...restProps }: FileInputProps) {
  const { prefix }: any = useConfig();
  return (
    <input
      {...restProps}
      className={clsx(`${prefix}-file-input`, className)}
      type='file'
    />
  );
}
