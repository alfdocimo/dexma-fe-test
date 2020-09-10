import React from "react";
import { Card, Grid, Row, Cell, Button } from "@dexma/ui-components";
import styled from "styled-components";

export interface IBeverage {
  price: number;
  name: string;
  amount: number;
}

const StyledCell = styled(Cell)`
  padding: 5px;
`;

export default function BeverageCard({ name, price, amount }: IBeverage) {
  return (
    <StyledCell xs={4}>
      <Card
        title={name}
        subtitle="With supporting text below as a natural lead-in to additional content."
        footer={
          <>
            <Grid>
              <Row>
                <Cell xs={6}>
                  <Button
                    isExpanded
                    text="Add"
                    variant="primary"
                    iconBefore="add"
                  />
                </Cell>
                <Cell xs={6}>
                  <Button
                    isExpanded
                    text="Remove"
                    variant="destructive"
                    iconBefore="delete"
                  />
                </Cell>
              </Row>
            </Grid>
          </>
        }
      >
        price: {price}, amount: {amount}
      </Card>
    </StyledCell>
  );
}
