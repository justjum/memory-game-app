export default function Greyout( {popupShow} ) {
    return (
        <div className="greyout" style={{display : popupShow ? 'flex' : 'none'}}></div>
    )
}