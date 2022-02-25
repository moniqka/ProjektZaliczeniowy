import React, { useRef, useState } from 'react';
import { closeModal } from 'redux/reducers/ModalReducers';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HeaderTitle, InputsWraper, StyledInput, StyledTextFiled, StyledForm, Error } from './FormModal.css';
import { Modal } from '../Modal/Modal';

export const FormModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const modalState = useSelector(({ ModalReducers }) => ModalReducers);
  const form = useRef();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(true);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleCloseModal = () => {
    dispatch(closeModal())
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const intemsTovalidate = [
      {name: 'name', value: name},
      {name: 'surname', value: surname},
      {name: 'email', value: email},
      {name: 'message', value: message},
  
    ];
    const isAnyEmpty = intemsTovalidate.some((item) => !item.value );
    if (isAnyEmpty) {
      setValidated(false);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setInvalidEmail(true);
    }
    else {
      setValidated(true);
      setInvalidEmail(false);
      sendEmail();
    }
  };
  const sendEmail = () => {
    // const email_key = 'c7994930f9c7f912a6785ba3e0e2e855'; // może być użyty zamiast email'a w celu ukrycia go przy wysyłaniu zapytania
    fetch("https://formsubmit.co/ajax/wit-8583@student.pwr.edu.pl", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: `${name} ${surname}`,
        email,
        message
      })
    })
    .then(response => response.json())
    .then(data =>  {
      alert(data.message);
      setName('');
      setSurname('');
      setEmail('');
      setMessage('');
    })
    .catch(error => console.log(error));
  };

  return (
    <Modal isSubmit isOpen={modalState.modalType !== undefined} handleClose={handleCloseModal} onSubmit={handleSubmitForm}>
      <>
      <HeaderTitle>{t('sendMessage')}</HeaderTitle>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <InputsWraper>
          <StyledInput
            onChange={((e) => setName(e.target.value) )}
            value={name}
            type="text"
            placeholder={t('name')}
            name="name"
            required/>
          <StyledInput
            value={surname}
            onChange={((e) => setSurname(e.target.value) )}
            type="text"
            placeholder={t('surname')}
            name="surname" />
          <StyledInput
            value={email}
            onChange={((e) => setEmail(e.target.value) )}
            type="email"
            placeholder="Email"
            name="email"
            required/>
        </InputsWraper>
        <StyledTextFiled
          value={message}
          onChange={((e) => setMessage(e.target.value) )}
          placeholder={t('message')}
          name="message"
          required/>
      </StyledForm>
      {!validated &&
        <Error>{t('errorAll')}</Error>
      }
      {invalidEmail && <Error>{t('errorEmai')}</Error>}
      </>
    </Modal>
  )
}
