import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LandingPage } from './LandingPage/LandingPage';
import MainTemplate from 'components/templates/MainTemplate';
import RootModal from 'components/templates/RootModal';
import { Movies } from './Movies/Movies';
import { Cats } from './Cats/Cats';
import { Travel } from './Travel/Travel';
import { Quotes } from './Quotes/Quotes';
import { Images } from './Images/Images';

const Root = () => {
  const modalState = useSelector(({ ModalReducers }) => ModalReducers);
  return (
    <MainTemplate>
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/cats" element={<Cats />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/images" element={<Images />} />
    </Routes>
    <RootModal
      modalType={modalState.modalType}
      modalProps={modalState.modalProps}
    />
  </MainTemplate>
  )

};

export default Root;
