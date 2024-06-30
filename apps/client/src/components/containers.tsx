import { cn } from '../libs/cn'

interface GameContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GameContainer ({ className, ...props }: GameContainerProps) {
  return (
    <section
      {...props}
      className={cn('flex flex-col items-center gap-6', className)}
    />
  )
}
