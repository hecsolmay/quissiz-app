import { cn } from '../../libs/cn'

interface XMarkProps extends React.SVGAttributes<SVGSVGElement> {}

export default function XMark ({ className, ...props }: XMarkProps) {
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
        d='M6 18 18 6M6 6l12 12'
      ></path>
    </svg>
  )
}
