import React from "react";
import styled from "styled-components";
import { Grid, Row, Cell } from "@dexma/ui-components";

interface IVendingMachineShell {
  beverageLayout: React.ReactNode;
  paymentLayout: React.ReactNode;
}

const StyledVendingMachineShell = styled.div`
  background: ${(props) => props.theme.gray200};
`;

export default function VendingMachineShell({
  beverageLayout,
  paymentLayout,
}: IVendingMachineShell) {
  return (
    <StyledVendingMachineShell>
      <Grid fluid>
        <Row>
          <Cell xs={6}>{beverageLayout}</Cell>
          <Cell xsOffset={1} xs={3}>
            {paymentLayout}
          </Cell>
        </Row>
        <Row>
          <Cell xs={12}>this is sum footer</Cell>
        </Row>
      </Grid>
    </StyledVendingMachineShell>
  );
}
