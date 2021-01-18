import React from 'react';
import styled from 'styled-components/native';

const ButtonScreen = () => {
    return(
        <Button>
            <ButtonText>+</ButtonText>
        </Button>
    )
}

const Button = styled.TouchableOpacity({
    position:'absolute',
    backgroundColor:'#136d94',
    bottom:0,
    right:10,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
})

const ButtonText = styled.Text({
    color: '#ffffff',
    fontSize:20
})

export default ButtonScreen;