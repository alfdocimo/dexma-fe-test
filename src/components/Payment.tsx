import React from "react";
import styled from "styled-components";
import { Grid, Row, Cell, Paragraph, Button } from "@dexma/ui-components";

// Could have used a Card component, but it doesn't accept children 🤔
const StyledPaymentGrid = styled(Grid)`
  background: ${(props) => props.theme.gray50};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px;
  border-radius: 4px;
  padding: 30px;
`;

export default function Payment() {
  return (
    <StyledPaymentGrid fluid>
      <Row>
        <Cell xs={6}>
          <Paragraph m="1rem 0 1rem 0">Current coins added: $coins</Paragraph>
        </Cell>
        <Cell xs={6}>
          <Button text="Add coins" variant="secondary" iconBefore="add" />
        </Cell>
        <Row>
          <Cell xs={12}>
            <Button
              isExpanded
              text="Proceed to payment"
              variant="primary"
              iconBefore="circle_check"
            />
          </Cell>
        </Row>
      </Row>
    </StyledPaymentGrid>
  );
}
