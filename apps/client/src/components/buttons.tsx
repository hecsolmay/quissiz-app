import { cn } from '../libs/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

const DEFAULT_STYLES =
  'focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium shadow transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-65 bg-white text-neutral-900 focus:ring-primary-500 focus:ring-offset-2'

export function Button ({ className, loading, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        DEFAULT_STYLES,
        Boolean(loading) && 'cursor-progress opacity-70 hover:opacity-70',
        className
      )}
      {...props}
    />
  )
}
