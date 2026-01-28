import './ChaiQuote.css';

function ChaiQuote() {
  return (
    <section className="chai-quote fade-in-delay-4">
      <blockquote className="chai-quote-block">
        <svg className="chai-quote-mark" width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 24V14.4C0 4.8 5.6 0.8 12 0l1.2 3.2C8 4.4 6.4 8 6.4 12H12v12H0zm18 0V14.4C18 4.8 23.6 0.8 30 0l1.2 3.2C26 4.4 24.4 8 24.4 12H30v12H18z" fill="var(--gold)" opacity="0.25"/>
        </svg>
        <p className="chai-quote-text">
          There is something profoundly sacred about the ritual of chai — it is where
          conversations begin, bonds are forged, and every sip carries the warmth of
          centuries of Indian tradition.
        </p>
        <cite className="chai-quote-cite">
          — The Spirit of Chai Culture
        </cite>
      </blockquote>
    </section>
  );
}

export default ChaiQuote;
