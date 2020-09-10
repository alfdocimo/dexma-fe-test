import React, { useContext } from "react";
import styled from "styled-components";
import {
  Grid,
  Row,
  Cell,
  Paragraph,
  Button,
  Divider,
} from "@dexma/ui-components";
import { AppContext, actions } from "../context";
import getSelectedBeverages from "../helpers/getSelectedBeverages";

// Could have used a Card component, but it doesn't accept children 🤔
const StyledPaymentGrid = styled(Grid)`
  background: ${(props) => props.theme.gray50};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px;
  border-radius: 4px;
  padding: 30px;
`;

export default function Payment() {
  const context = useContext(AppContext);

  const beverageList = getSelectedBeverages(context.state.selectedBeverages);

  return (
    <StyledPaymentGrid fluid>
      <Row>
        <Cell xs={6}>
          <Paragraph m="1rem 0 1rem 0">
            Current balance: {context.state.balance} 💰
          </Paragraph>
        </Cell>
        <Cell xs={6}>
          <Button
            text="Add coins"
            variant="secondary"
            iconBefore="add"
            onClick={() => context.dispatch(actions.incrementBalance(10))}
          />
        </Cell>
        <Cell xs={12}>
          <Button
            isExpanded
            text="Proceed to payment"
            variant="primary"
            iconBefore="circle_check"
            isDisabled={context.state.balance < beverageList.price}
          />
        </Cell>

        <Cell xs={12}>
          <Paragraph m="1rem 0 1rem 0">
            Total price: {beverageList.price}
          </Paragraph>
        </Cell>
      </Row>
    </StyledPaymentGrid>
  );
}
