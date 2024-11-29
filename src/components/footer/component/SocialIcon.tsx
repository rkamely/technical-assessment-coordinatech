import {Link} from "react-router-dom";

interface IProps {
  imgURL: string
  link?:string
  alt?: string
  bg?: string
}

const SocialIcon = (props: IProps) => {
  const {imgURL,alt,link="#"} = props
  return (
    <Link to={link}>
      <img className={`min-w-10 size-10 md:min-w-[48px] md:min-h-[48px] md:size-12`} src={imgURL} alt={alt}/>
    </Link>
  )
}
export default SocialIcon