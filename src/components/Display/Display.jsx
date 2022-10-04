import Style from './Display.module.css'

const Display = (props) => {
   return (
   <>
   <label className={Style.label}>{props.label}</label>
   <div className={Style.info}>{props.info}</div>
   </>
   )
}

export default Display