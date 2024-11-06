import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;

export const Header = () => <Title>💗 Syberry Systems Status</Title>;
