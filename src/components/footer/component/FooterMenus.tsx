import {Link} from "react-router-dom";

interface IProps {
  text:string
  link?:string
  alt?: string
  bg?: string
}

const FooterIcon = (props: IProps) => {
  const {link="#",text} = props
  return (
    <Link to={link} className={`text-primary-purple-03 text-Body2-Black`}>{text}</Link>

  )
}
export default FooterIcon