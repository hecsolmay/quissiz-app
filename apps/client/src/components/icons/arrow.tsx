import { cn } from '../../libs/cn'

interface Props extends React.SVGAttributes<SVGElement> {}

export function ArrowLeft ({ className, ...props }: Props) {
  return (
    <svg
      {...props}
      className={cn('size-4', className)}
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
        d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
      ></path>
    </svg>
  )
}
