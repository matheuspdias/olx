import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #7B1FA2;
`;

export const Logo = styled.Image`
    width: 150px;
    height: 80px;
`;

export const Loading = styled.ActivityIndicator`
    marginTop: 50px;
`;
