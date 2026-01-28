import { useState } from 'react';
import './EmailSignup.css';

function EmailSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="signup fade-in-delay-3">
      {submitted ? (
        <p className="signup-success">
          Welcome to the royal brew. We'll be in touch.
        </p>
      ) : (
        <>
          <p className="signup-prompt">
            Be the first to experience Chai Culture.
          </p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="signup-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="signup-btn">
              Join the Royal Brew
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default EmailSignup;
