import clsx from 'clsx';
import { useConfig } from '../hooks';

export interface ImageInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  alt?: string;
  className?: string;
  name?: string;
  src: string;
}

export default function ImageInput({
  alt,
  className,
  name,
  src,
  ...restProps
}: ImageInputProps) {
  const { prefix }: any = useConfig();
  return (
    <input
      {...restProps}
      alt={alt || name || src}
      className={clsx(`${prefix}-image-input`, className)}
      name={name}
      src={src}
      type='image'
    />
  );
}
