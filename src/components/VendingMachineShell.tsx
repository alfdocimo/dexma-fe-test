import React from "react";
import styled from "styled-components";
import { Grid, Row, Cell } from "@dexma/ui-components";

interface IVendingMachineShell {
  beverageLayout: React.ReactNode;
  paymentLayout: React.ReactNode;
}

const StyledVendingMachineGrid = styled(Grid)`
  width: auto;
  background: ${(props) => props.theme.gray200};
`;

export default function VendingMachineShell({
  beverageLayout,
  paymentLayout,
}: IVendingMachineShell) {
  return (
    <StyledVendingMachineGrid fluid>
      <Row>
        <Cell xs={6}>{beverageLayout}</Cell>
        <Cell xsOffset={1} xs={3}>
          {paymentLayout}
        </Cell>
      </Row>
    </StyledVendingMachineGrid>
  );
}
