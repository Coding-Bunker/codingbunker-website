const topics = ["n8n e automazioni", "AI agents", "Testing", "Open source", "Architettura", "Platform engineering"]

export default function TopicVote() {
  return <form className="topic-vote" name="topic-vote" method="POST" action="/grazie/" data-netlify="true" data-netlify-honeypot="bot-field" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="topic-vote" />
    <p className="hidden-field"><label>Non compilare: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <fieldset><legend>Quale argomento vorresti al prossimo meetup?</legend><div className="topic-options">{topics.map((topic) => <label className="topic-option" key={topic}><input type="radio" name="topic" value={topic} required /><span>{topic}</span></label>)}</div></fieldset>
    <div className="topic-vote-footer"><small>Raccogliamo solo la tua scelta, non il tuo indirizzo email.</small><button className="button button-primary" type="submit">Invia il voto</button></div>
  </form>
}
