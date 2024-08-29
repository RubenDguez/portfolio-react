import { FormEvent, useCallback, useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setHasError({ name: false, email: false, message: false });
      setErrorMessage('');

      if (!name) {
        setHasError((hasError) => ({ ...hasError, name: true }));
        setErrorMessage('Name is required');
        return;
      }
      if (!email) {
        setHasError((hasError) => ({ ...hasError, email: true }));
        setErrorMessage('Email is required');
        return;
      }
      if (!message) {
        setHasError((hasError) => ({ ...hasError, message: true }));
        setErrorMessage('Message is required');
        return;
      }
    },
    [email, message, name],
  );
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      {(hasError.name || hasError.message || hasError.email) && <h3 className="form-error-message">{errorMessage}</h3>}
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />
        {hasError.name && <p>{errorMessage}</p>}
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
        {hasError.email && <p>{errorMessage}</p>}
      </div>
      <div className="form-control">
        <label htmlFor="email">Message</label>
        <textarea value={message} rows={4} onChange={(e) => setMessage(e.target.value)} id="message" name="message" />
        {hasError.message && <p>{errorMessage}</p>}
      </div>
      <div className="form-control">
        <button>Submit</button>
      </div>
    </form>
  );
}
