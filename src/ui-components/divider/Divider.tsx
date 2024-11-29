interface IProps{
  className?:string
  width?:string
  bg?:string
}

const Divider = (props: IProps) => {
  const {className,width="w-full",bg="bg-text-05"} = props
  return (
    <div className={`h-px ${bg} ${width} ${className}`}/>

  )
}
export default Divider