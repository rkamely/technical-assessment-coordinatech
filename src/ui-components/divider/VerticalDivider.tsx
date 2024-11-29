interface IProps {
  className?: string
  height?: string
  bg?: string
}

const Divider = (props: IProps) => {
  const {className, height = "h-5", bg = "bg-text-05"} = props
  return (
    <div className={`min-w-px w-px ${height} ${bg} ${className}`}/>
  )
}
export default Divider