
import './chatboard.css'
import { Clear, Send } from '@mui/icons-material/';
import { getUserDetailsfromLocalStorage } from '../../data';

function chatBoard({ closeMessage, setClosemessage}) {
    return (
        <>
            {closeMessage && (
                <div className='container'>
                    <div className="chat-header">
                        <div className='images'>
                            <img src={getUserDetailsfromLocalStorage()?.profilepicture} alt="" />
                            <span>{getUserDetailsfromLocalStorage()?.name}</span>
                        </div>
                        <div className="icon" onClick={(() => setClosemessage(false))}>
                            <Clear style={{ color: "white", cursor: "pointer" }} />
                        </div>
                    </div>
                    <div className="body">
                        <p className='message'>hello</p>
                        <p className='message'>hello</p>
                        <p className='message'>hello</p>
                        <p className='message'>hello</p>
                        <p className='message user-message'>hi</p>
                        <p className='message user-message'>hi</p>
                        <p className='message user-message'>hi</p>
                        <p className='message user-message'>hi</p>
                    </div>
                    <div className='footer'>
                        <form>
                            <input type="text" placeholder='typing...' />
                            <button><Send style={{color:"grey"}}/></button>
                        </form>
                    </div>
                </div>
            )}
        </>

    )
}

export default chatBoard

