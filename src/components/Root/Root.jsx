import Style from './Root.module.css'

const Root = (props) => {
   return (
      <div className={Style.root}>
      {props.children}
      </div>
   )
}

export default Root