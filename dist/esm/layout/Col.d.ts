/// <reference types="react" />
import { BlockProps } from './Block';
interface Props extends BlockProps {
}
export default function Col({ children, ...restProps }: Props): JSX.Element;
export {};
