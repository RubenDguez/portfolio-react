/* eslint-disable no-useless-escape */
import { FormEvent, useCallback, useState } from 'react';

const initialError = {
  name: false,
  email: false,
  message: false,
};

export default function useContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(initialError);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const clear = useCallback((key?: 'name' | 'email' | 'message') => {
    setSuccessMessage('');
    setErrorMessage('');
    if (key) setHasError({ ...initialError, [key]: true });
    if (!key) setHasError(initialError);
  }, []);

  const validateName = useCallback(() => {
    if (!name) {
      clear('name');
      setHasError((hasError) => ({ ...hasError, name: true }));
      setErrorMessage('Name is required');
      return false;
    }

    setHasError((hasError) => ({ ...hasError, name: false }));
    return true;
  }, [name, clear]);

  const validateEmail = useCallback(() => {
    if (!email) {
      clear('email');
      setHasError((hasError) => ({ ...hasError, email: true }));
      setErrorMessage('Email is required');
      return false;
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      clear('email');
      setHasError((hasError) => ({ ...hasError, email: true }));
      setErrorMessage('Email is invalid');
      return false;
    }

    setHasError((hasError) => ({ ...hasError, email: false }));
    return true;
  }, [email, clear]);

  const validateMessage = useCallback(() => {
    if (!message) {
      clear('message');
      setHasError((hasError) => ({ ...hasError, message: true }));
      setErrorMessage('Message is required');
      return false;
    }

    setHasError((hasError) => ({ ...hasError, message: false }));
    return true;
  }, [message, clear]);

  const checkErrors = useCallback(() => {
    if (!validateName()) return false;
    if (!validateEmail()) return false;
    if (!validateMessage()) return false;

    clear();
    return true;
  }, [validateName, validateEmail, validateMessage, clear]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!checkErrors()) return;

      setSuccessMessage('Message sent successfully');
      setHasError(initialError);
      setErrorMessage('');
      setMessage('');
      setName('');
      setEmail('');

      localStorage.setItem('sent', JSON.stringify('true'));
      setDisabled(true);
    },
    [checkErrors],
  );

  return {
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
  };
}
