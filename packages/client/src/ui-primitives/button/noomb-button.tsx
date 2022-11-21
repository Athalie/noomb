import React, { ReactNode } from 'react';
import styles from './noomb-button.sass';

type NoombButtonType = 'accent' | 'secondary' | 'primary';

interface INoombButton {
  type: NoombButtonType;
  children: ReactNode;
}

export const NoombButton = ({ type, children }: INoombButton) => <button className={type}>{children}</button>;
