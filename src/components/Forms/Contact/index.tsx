import { useEffect } from 'react';
import useContact from './useContact';

export default function ContactForm() {
  const {
    name,
    email,
    message,
    hasError,
    errorMessage,
    successMessage,
    disabled,
    setDisabled,
    setSuccessMessage,
    setName,
    setEmail,
    setMessage,
    validateName,
    validateEmail,
    validateMessage,
    handleSubmit,
  } = useContact();

  useEffect(() => {
    if (localStorage.getItem('sent') && JSON.parse(localStorage.getItem('sent')!) === 'true') {
      setDisabled(true);
      setSuccessMessage('You have sent me a message already, I will get back to you soon.');
    }
  }, [setDisabled, setSuccessMessage]);

  useEffect(() => {
    if (successMessage) {
      setDisabled(true);
    }
  }, [successMessage, setDisabled]);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      {(hasError.name || hasError.message || hasError.email) && <h3 className="form-error-message">{errorMessage}</h3>}
      {successMessage && <h3 className="form-success-message">{successMessage}</h3>}
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input disabled={disabled} value={name} onChange={(e) => setName(e.target.value)} onBlur={() => validateName()} type="text" id="name" name="name" />
        {hasError.name && <p>{errorMessage}</p>}
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input disabled={disabled} value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => validateEmail()} type="email" id="email" name="email" />
        {hasError.email && <p>{errorMessage}</p>}
      </div>
      <div className="form-control">
        <label htmlFor="email">Message</label>
        <textarea disabled={disabled} value={message} rows={4} onChange={(e) => setMessage(e.target.value)} onBlur={() => validateMessage()} id="message" name="message" />
        {hasError.message && <p>{errorMessage}</p>}
      </div>
      <div className="form-control">
        <button disabled={disabled}>Submit</button>
      </div>
    </form>
  );
}
