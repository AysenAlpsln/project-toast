import React from 'react';

import Button from '../Button';
import ToastShelf from "../ToastShelf";

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [formMessage, setMessage] = React.useState('');
  const [formVariant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  const handleAddToast = (e) => {
    e.preventDefault();
    const newToast = {
      message: formMessage,
      variant: formVariant,
      id: crypto.randomUUID(),
    };
    const newShelf = [
      ...toasts,
      newToast
    ];
    setToasts(newShelf);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  const handleDismiss = (id) => {
    const deletedToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(deletedToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />}

      <form className={styles.controlsWrapper} onSubmit={handleAddToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput} 
              value={formMessage}
              onChange={e => setMessage(e.target.value)}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((item) => (
            <label htmlFor={`variant-${item}`} key={item}>
              <input
                id={`variant-${item}`}
                type="radio"
                name="variant"
                value={item}
                checked={item === formVariant}
                onChange={(e) => {
                  setVariant(e.target.value)
                }}
              />
              {item}
            </label>
            ))}            
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
