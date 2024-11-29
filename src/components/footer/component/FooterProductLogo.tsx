

interface IProps {
  imgURL: string
  link?: string
  alt?: string
  className?:string
}


const FooterProductLogo = (props: IProps) => {
  const {link = "#", alt, imgURL,className} = props
  return (
    <a href={link} target={"_blank"} className={`w-[216px] h-16 flex items-center justify-center bg-white rounded-xl grow md:grow-0`}>
      <img className={`object-cover ${className}`} src={imgURL} alt={alt}/>
    </a>
  )
}
export default FooterProductLogo