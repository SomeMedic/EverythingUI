import styled from 'styled-components';

export const Star = styled.div`
  position: absolute;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);

  &.star-1 {
    top: 20%;
    left: 20%;
    width: 25px;
  }

  &.star-2 {
    top: 45%;
    left: 45%;
    width: 15px;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  &.star-3 {
    top: 40%;
    left: 40%;
    width: 5px;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  &.star-4 {
    top: 20%;
    left: 40%;
    width: 8px;
    transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
  }

  &.star-5 {
    top: 25%;
    left: 45%;
    width: 15px;
    transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
  }

  &.star-6 {
    top: 5%;
    left: 50%;
    width: 5px;
    transition: all 0.8s ease;
  }

  .fil0 {
    fill: #fffdef;
  }
`;

export const StyledStardustButton = styled.button`
  position: relative;
  padding: 12px 35px;
  background: #fec195;
  font-size: 17px;
  font-weight: 500;
  color: #181818;
  border: 3px solid #fec195;
  border-radius: 8px;
  box-shadow: 0 0 0 #fec1958c;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #fec195;
    box-shadow: 0 0 25px #fec1958c;

    ${Star}.star-1 {
      top: -80%;
      left: -30%;
      width: 25px;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    ${Star}.star-2 {
      top: -25%;
      left: 10%;
      width: 15px;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    ${Star}.star-3 {
      top: 55%;
      left: 25%;
      width: 5px;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    ${Star}.star-4 {
      top: 30%;
      left: 80%;
      width: 8px;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    ${Star}.star-5 {
      top: 25%;
      left: 115%;
      width: 15px;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    ${Star}.star-6 {
      top: 5%;
      left: 60%;
      width: 5px;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }
  }
`; 