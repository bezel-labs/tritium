import { Button as BaseButton } from '@base-ui/react/button';

export type ButtonProps = BaseButton.Props;

export function Button(props: ButtonProps) {
  return <BaseButton {...props} />;
}