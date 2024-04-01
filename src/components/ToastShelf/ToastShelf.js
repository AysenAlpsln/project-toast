import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const {toasts} = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((item) => (
        <li key={item.id} className={styles.toastWrapper}>
          <Toast 
            id={item.id}
            message={item.message} 
            variant={item.variant}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
