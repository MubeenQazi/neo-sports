import { type ToastSettings, toastStore } from "@skeletonlabs/skeleton";

const trigger = (t: ToastSettings) => toastStore.trigger(t);

export default {
  error: (message: string, autohide = false, action?: ToastSettings['action'], callback?: ToastSettings['callback']) => {
    trigger({
      message,
      background: 'variant-ghost-error',
      autohide,
      timeout: 5000,
      callback,
      action
    });
  },
  success: (message: string, autohide = true, action?: ToastSettings['action'], callback?: ToastSettings['callback']) => {
    trigger({
      message,
      background: 'variant-ghost-success',
      autohide,
      timeout: 5000,
      callback,
      action
    });
  },
  info: (message: string, autohide = true, action?: ToastSettings['action'], callback?: ToastSettings['callback']) => {
    trigger({
      message,
      background: 'variant-ghost',
      autohide,
      timeout: 5000,
      callback,
      action
    });
  },
  warning: (message: string, autohide = true, action?: ToastSettings['action'], callback?: ToastSettings['callback']) => {
    trigger({
      message,
      background: 'variant-ghost-warning',
      autohide,
      timeout: 5000,
      callback,
      action
    });
  }
}
