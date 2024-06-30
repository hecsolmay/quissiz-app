import GithubIcon from './icons/github'

export default function Socials () {
  return (
    <a
      className='group fixed bottom-2 right-4 z-20 rounded-lg bg-[#1d1d1d] p-2 transition-transform duration-200 hover:scale-110'
      href='https://github.com/hecsolmay/quissiz-app'
      target='_blank'
      rel='noreferrer'
      title='Ver el código fuente'
    >
      <GithubIcon className='size-8 text-white' />
    </a>
  )
}
