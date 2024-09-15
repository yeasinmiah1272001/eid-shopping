
import { twMerge } from "tailwind-merge"



const Container = ({children, className}) => {
    const newClass = twMerge( "max-w-screen-xl lg:mx-16 px-4 lg:px-0",
    className)

  return (
    <div className={newClass}>
        {children}
    </div>
  )
}

export default Container
