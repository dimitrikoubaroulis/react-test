import React, {Component} from 'react';

import styled from 'styled-components';


const Container = styled.div`
  color: white;
  background-color: #2BB98C;
  padding: 1rem;
  width: 400px;
  text-align: center;
  align: center;
`;

export default class extends Component {
  render() {
    const {title, content, footer} = this.props;

    return (
      <Container>
        <h4>{title}</h4>
        <p>
          {content}
        </p>
        {footer}
      </Container>
    )
  }
}