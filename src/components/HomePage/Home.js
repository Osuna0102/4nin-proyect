import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ClickableArea = styled.div`
  position: absolute;
  top: 30%; // Adjust these values to position the clickable area
  left: 0%;
  width: 250px; // And these to adjust the size
  height: 400px;
`;

function Home() {
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate('/products');
  };

  return (
    <HomeContainer>
      <HomeImage src="\static\HomePage.png" alt="Home" />
      <ClickableArea onClick={navigateToProducts} />
    </HomeContainer>
  );
}

export default Home;