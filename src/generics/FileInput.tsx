import clsx from 'clsx';
import React from 'react';

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function FileInput({ className, ...restProps }: FileInputProps) {
  return (
    <input
      {...restProps}
      className={clsx('jpk-file-input', className)}
      type='file'
    />
  );
}

export default FileInput;
