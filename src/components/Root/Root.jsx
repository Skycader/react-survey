import Style from './Root.module.css'

const Root = (props) => {
   console.log("14:45")
   return (
      <div className={Style.root}>
      {props.children}
      </div>
   )
}

export default Root