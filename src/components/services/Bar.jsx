
export default function Bar(props) {
    return (
      <>
        <div className="primaryText flexCenter bar-text"><span>{props.name}</span> <span>{props.progress}</span></div>
        <div id="myProgress">
            <div id="myBar" style={{width:props.progress}}></div>
        </div>
      </>
    )
  }
  