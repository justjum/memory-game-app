export default function Popup( { popupMessage, popupShow, popupSwitch } ) {
    return (
        <div id='pop-up' className='pop-up' style={{display: popupShow ? 'inline': 'none'}}>
        <h3>{popupMessage}</h3>
        <button onClick={popupSwitch} >Ok</button>
      </div>
    )
}