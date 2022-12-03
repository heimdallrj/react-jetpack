import styled from 'styled-components';
import clsx from 'clsx';

const Block = styled.div<any>`
  background-color: var(--colors-${(props) => props.severity});
  padding: 10px 15px;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: rgb(95, 33, 32);
  border-radius: 4px;
`;

type Props = {
  children: string;
  variant?: 'none' | 'filled' | 'outlined';
  severity: 'error' | 'warning' | 'info' | 'success';
};

export default function Alert({ children, severity, variant = 'none' }: Props) {
  return (
    <Block
      className={clsx(
        'jpk-alert',
        `jpk-alert__${variant}`,
        `jpk-alert--${severity}`
      )}
      severity={severity}
      variant={variant}
    >
      [{severity}] {children}
    </Block>
  );
}
