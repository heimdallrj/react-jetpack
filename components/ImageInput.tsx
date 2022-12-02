import clsx from 'clsx';

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
  return (
    <input
      {...restProps}
      alt={alt || name || src}
      className={clsx('jpk-image-input', className)}
      name={name}
      src={src}
      type='image'
    />
  );
}
