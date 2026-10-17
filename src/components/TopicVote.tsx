const topics = ["n8n e automazioni", "AI agents", "Testing", "Open source", "Architettura", "Platform engineering"]

export default function TopicVote() {
  return <form className="topic-vote" name="topic-vote" method="POST" action="https://formsubmit.co/info@codingbunker.it">
    <input type="hidden" name="_subject" value="Nuovo voto per il prossimo meetup Coding Bunker" />
    <input type="hidden" name="_next" value="https://www.codingbunker.it/grazie.html" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />
    <p className="hidden-field"><label>Non compilare: <input name="_honey" tabIndex={-1} autoComplete="off" /></label></p>
    <fieldset><legend>Quale argomento vorresti al prossimo meetup?</legend><div className="topic-options">{topics.map((topic) => <label className="topic-option" key={topic}><input type="radio" name="topic" value={topic} required /><span>{topic}</span></label>)}</div></fieldset>
    <div className="topic-vote-footer"><small>Raccogliamo solo la tua scelta, non il tuo indirizzo email.</small><button className="button button-primary" type="submit">Invia il voto</button></div>
  </form>
}
