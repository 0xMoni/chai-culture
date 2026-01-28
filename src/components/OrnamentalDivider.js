import './OrnamentalDivider.css';

function OrnamentalDivider() {
  return (
    <div className="ornamental-divider" aria-hidden="true">
      <svg width="280" height="20" viewBox="0 0 280 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="10" x2="110" y2="10" stroke="var(--gold)" strokeWidth="0.5" opacity="0.4"/>
        <line x1="170" y1="10" x2="280" y2="10" stroke="var(--gold)" strokeWidth="0.5" opacity="0.4"/>
        <path d="M130 10 L140 2 L150 10 L140 18 Z" stroke="var(--gold)" strokeWidth="0.8" fill="none" opacity="0.5"/>
        <circle cx="140" cy="10" r="2.5" fill="var(--gold)" opacity="0.5"/>
        <circle cx="118" cy="10" r="1.5" fill="var(--gold)" opacity="0.3"/>
        <circle cx="162" cy="10" r="1.5" fill="var(--gold)" opacity="0.3"/>
      </svg>
    </div>
  );
}

export default OrnamentalDivider;
