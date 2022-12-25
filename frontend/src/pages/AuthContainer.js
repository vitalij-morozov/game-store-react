import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

function AuthContainer({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <h1>{error.message}</h1>
      </Container>
    );
  }
  return <>{children}</>;
}

const Container = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthContainer;
