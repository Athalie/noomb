import { ReactNode } from 'react';

type NoombButtonType = 'accent' | 'secondary' | 'primary';

interface INoombButton {
  type: NoombButtonType;
  children: ReactNode;
}

export const NoombButton = ({ type, children }: INoombButton) => <button className={type}>{children}</button>;
