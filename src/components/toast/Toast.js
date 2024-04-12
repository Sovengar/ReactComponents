import React, { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export const tipusToast = {
  exit: 'success',
  error: 'error',
  avis: 'warning',
  info: 'info'
}

export const ToastContext = createContext(null)

export default function Toast (props) {
  const { children } = props

  const nouToast = (text, tipus) => {
    switch (tipus) {
      case tipusToast.avis:
        toast.warn(text)
        break
      case tipusToast.error:
        toast.error(text)
        break
      case tipusToast.exit:
        toast.success(text)
        break
      case tipusToast.info:
        toast.info(text)
        break
      default:
        break
    }
  }

  return (
    <ToastContext.Provider value={{ nouToast }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  )
}
