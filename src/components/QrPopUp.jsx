import gqr from '../assets/gqr.png';
import './components-css/qrpopup.css';


function QrPopUp() {
    return (
        <>
            <div className="QR-Container">
                <div className="QR-Content">
                    <img src={gqr} alt="globe qr code" />
                    <p>Scan to download</p>
                </div>
            </div>
        </>
    )
}
export default QrPopUp
