import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, handleDismiss}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((item) => (
        <li key={item.id} className={styles.toastWrapper}>
          <Toast 
            id={item.id}
            message={item.message} 
            variant={item.variant} 
            handleDismiss={handleDismiss}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
