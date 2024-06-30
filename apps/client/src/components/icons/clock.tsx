import { cn } from '../../libs/cn'

interface ClockProps extends React.SVGAttributes<SVGSVGElement> {}

export default function Clock ({ className, ...props }: ClockProps) {
  return (
    <svg
      {...props}
      className={cn('size-6', className)}
      data-slot='icon'
      fill='none'
      stroke-width='1.5'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
      ></path>
    </svg>
  )
}
