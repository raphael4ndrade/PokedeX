import React from 'react';

import styled from 'styled-components/native';

const size = {
  sm: 60,
  md: 90,
  lg: 120,
  xlg: 160
};

const ImageStyled = styled.Image`
  width: ${props=> props.size}px;
  height: ${props=> props.size}px;
  border-radius: 100px;
  background-color: #F2F2F2;
  box-shadow: 1px 1px 3px;
  margin-bottom: 3px;
`;

const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

const UIImage = (props) => {
  let _size = size.md;

  const renderTitle = React.isValidElement(props.title) && props.title;

  if(Boolean(props.sm))
    _size = size.sm;
  else if (Boolean(props.lg))
    _size = size.lg;
  else if (Boolean(props.xlg))
    _size = size.xlg;

  return <Container>
      {renderTitle}
      <ImageStyled source={{ uri: props.uri }} size={_size} />
    </Container>
}

UIImage.defaultProps = {
  small: false,
  bigger: false
}

export default UIImage;