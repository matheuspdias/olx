import React from 'react'
import * as S from './styled';

export default ({ placeholder, value, onChangeText, password }) => {
    return (
        <S.InputArea>
            <S.Input 
                placeholder={placeholder}
                placeholderTextColor="#FFF"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </S.InputArea>
    )
}
