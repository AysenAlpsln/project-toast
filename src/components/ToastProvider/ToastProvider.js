import React, { Children } from 'react';
export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(formMessage, formVariant) {
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
  }

  const dismissToast = (id) => {
    const deletedToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(deletedToasts);
  }

  return (
    <ToastContext.Provider value={{toasts, createToast, dismissToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
