import { cn } from '../../libs/cn'

interface ChevronArrowProps extends React.SVGAttributes<SVGSVGElement> {
  direction?: 'left' | 'right'
}

export default function ChevronArrow ({
  className,
  direction = 'left',
  ...props
}: ChevronArrowProps) {
  return (
    <svg
      {...props}
      className={cn(
        'size-6 transition-colors duration-200 hover:text-slate-500',
        className,
        direction === 'right' && 'rotate-180'
      )}
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
        d='M15.75 19.5 8.25 12l7.5-7.5'
      ></path>
    </svg>
  )
}
