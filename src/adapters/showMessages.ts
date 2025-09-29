import { toast } from "react-toastify";

const style = {
  background: "var(--color-background-selected)",
  color: "var(--color-title)",
  fontFamily: "Open Sans",
}

export const showMessage = {
  sucess: (msg: string) => toast.success(msg, {ariaLabel: msg, style}),
  error: (msg: string) => toast.error(msg, {ariaLabel: msg, style}),
  info: (msg: string) => toast.info(msg, {ariaLabel: msg, style}),
  dismiss: () => toast.dismiss()
}