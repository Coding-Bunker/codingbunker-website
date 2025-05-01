import axios from "axios"
import jwt from 'jsonwebtoken'


const MeetupApiClient = () =>{


    function generateJWT() {
        const now = Math.floor(Date.now() / 1000);
        const payload = {
        iss: process.env.MEETUP_CLIENT_ID,
        aud: 'api.meetup.com',
        iat: now,
        exp: now + 60 * 5 // valido 5 minuti
        };
    
        const token = jwt.sign(payload, process.env.MEETUP_PRIVATE_KEY!, {
        algorithm: 'RS256' // o HS256 se usi un secret HMAC
        });
    
        return token;
    }

    async function fetchEvents(groupName : string) {
        try {
          const accessToken = generateJWT();
          const response = await axios.get(`https://api.meetup.com/${groupName}/events`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });
      
          console.log('Eventi trovati:', response.data);
        } catch (error : any) {
          if (error.response) {
            console.error('Errore nella risposta:', error.response.status, error.response.data);
          } else {
            console.error('Errore nella richiesta:', error.message);
          }
        }
      }
      

    return {
        fetchEvents
    }
}


export default MeetupApiClient