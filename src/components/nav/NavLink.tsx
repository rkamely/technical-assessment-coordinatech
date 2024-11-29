import {Link} from "react-router-dom";

interface IProps {
  title: string
  link?: string
}


const NavLink = (props: IProps) => {
  const {title,link = "#"} = props
  return (
    <Link className={`hidden md:block text-Body3-Bold-lineHeight text-text-01`} to={link}>{title}</Link>
  )
}
export default NavLink