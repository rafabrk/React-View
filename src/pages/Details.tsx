import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 25px;
  color: #000;
`;

const Details = () => (
  <Container>
    <Title>Details</Title>
  </Container>
);

export default Details;
