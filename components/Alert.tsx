import clsx from 'clsx';

// @todo: implement `variant`

type Props = {
  children: string;
  severity?: 'error' | 'warning' | 'info' | 'success';
};

export default function Alert({ children, severity }: Props) {
  return (
    <div
      role='alert'
      className={clsx('jpk-alert', severity && `jpk-alert--${severity}`)}
    >
      {children}
    </div>
  );
}
