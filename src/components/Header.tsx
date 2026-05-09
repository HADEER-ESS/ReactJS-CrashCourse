import { type FC, type PropsWithChildren } from 'react'

type ImageProps = {
    src: string;
    alt: string;
}
type HeaderProps = PropsWithChildren<{image: ImageProps}>

const Header : FC<HeaderProps> = ({image, children}) => {
  return (
    <header>
    <img {...image} style={{width: 50}} />
    {children}
    </header>
  )
}

export default Header