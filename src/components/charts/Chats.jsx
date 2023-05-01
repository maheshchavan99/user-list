import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChatBubbleOutline } from '@mui/icons-material/';
import './chart.css';
import UserProfile from '../profile/UserProfile';
import ChatBoard from '../chatboard/chatBoard';
import { useState } from 'react';
function Chats({userDetails}) {
    const [showMessageborad,setShowMessageborad]=useState(false)
   const [closeMessage,setClosemessage]=useState(true)
    return (
        <div className='main-chat'>
             <div className='chatboard-mgs'>
                {showMessageborad&&<ChatBoard setClosemessage={setClosemessage} closeMessage={closeMessage}/>} 
                </div>
            <div className='chart'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className='header'>
                            <ChatBubbleOutline style={{ fontSize: "25px", color: "white", marginRight: "10px" }} />
                            <span>Chats</span>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                           {userDetails?.users?.map((data)=>{
                            return (
                                <UserProfile
                                setShowMessageborad={setShowMessageborad}
                                 data={data} 
                                 key={data.id} 
                                 active={true} 
                                 />
                            )
                           }
                            
                           )}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
            </div>

        </div>
    )
}

export default Chats
