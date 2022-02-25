import React, { useState } from 'react';
import { SearchInput } from 'components/molecules/SearchInput/SearchInput';
import Spinner from 'components/atoms/Spinner/Spinner';
import { Container, Wrapper, VideoWrapper, SearchWrapper, StyledButton, MoviesContainer } from './Movies.css';
import { getData, getYTData } from '../../utils/api';
import poprcornVideo from '../../assets/popcorn_video.mp4'
import { useTranslation } from 'react-i18next';
import { Card } from 'components/molecules/Card/Card';
import { HeaderTitle } from 'components/atoms/HeaderTitle';

export const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [videoData, setVideoData] = useState([]);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { t } = useTranslation();

  const handleChangeValue = ({ target }) => setSearchValue(target.value);
  const clearInput = () => setSearchValue('');

  const searchQuery = () => {
    getData(searchValue).then((data) => {
      setVideoData(data.results);
    });
  }

  const checkYTVideo = (id) => {
    getYTData(id).then((data) => {
      if (!data.videoUrl) return
      window.open(data.videoUrl,'_blank');
    })
  };

  // if (isLoading) return <Spinner />;

  return (
    <>
    <Container>
      <HeaderTitle>{t('findMovie')}</HeaderTitle>
      <Wrapper style={{display: 'flex'}}>
      {!videoLoaded && <Spinner></Spinner>}
        <VideoWrapper>
          <video loop autoPlay muted onLoadedData={() => setVideoLoaded(true)}>
            <source src={poprcornVideo} type="video/mp4"/>
          </video>
        </VideoWrapper>
        <SearchWrapper>
          <SearchInput
            value={searchValue}
            onChange={handleChangeValue}
            clearInput={clearInput}
          />
          <StyledButton disabled={!searchValue} onClick={searchQuery}>{t('search')}</StyledButton>
          <MoviesContainer>
            {videoData && videoData.length ?
            videoData.map((item) => (
              <Card
                onClick={() =>  checkYTVideo(item.id)}
                key={item.id}
                picture={item.image}
                name={item.title}
                description={item.description}>
              </Card>
            )) : null}
          </MoviesContainer>
        </SearchWrapper>
      </Wrapper>
    </Container>
    </>
  )
}
