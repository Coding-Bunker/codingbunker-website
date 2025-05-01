import axios from "axios"


const MeetupApiClient = () =>{

    async function fetchEvents(groupName : string, accessToken : string) {
        try {
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