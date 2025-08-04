import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

const TOAST_DURATION = 5000 // 5 seconds

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast 
          key={id} 
          duration={TOAST_DURATION}
          className="group relative flex items-center gap-4 p-4 pr-12"
          {...props}
        >
          <div className="grid flex-1 gap-1">
            {title && (
              <ToastTitle className="text-sm font-medium">
                {title}
              </ToastTitle>
            )}
            {description && (
              <ToastDescription className="text-sm opacity-90">
                {description}
              </ToastDescription>
            )}
          </div>
          {action}
          <ToastClose className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100" />
        </Toast>
      ))}
      <ToastViewport className="fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
    </ToastProvider>
  )
}
