import clsx from 'clsx';

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function FileInput({ className, ...restProps }: FileInputProps) {
  return (
    <input
      {...restProps}
      className={clsx('jpk-file-input', className)}
      type='file'
    />
  );
}
