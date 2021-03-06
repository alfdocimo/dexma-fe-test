import React from "react";
import { Card, Grid, Row, Cell, Button, Paragraph } from "@dexma/ui-components";
import styled from "styled-components";
import { IBeverage } from "../interfaces/beverage";

interface IBeverageProps extends IBeverage {
  handleAddSelectedBeverage: Function;
  handleRemoveSeleced: Function;
}

const StyledCell = styled(Cell)`
  padding: 5px;
`;

export default function BeverageCard({
  name,
  price,
  amount,
  handleAddSelectedBeverage,
  handleRemoveSeleced,
}: IBeverageProps) {
  return (
    <StyledCell xs={4}>
      <Card
        title={name}
        subtitle="With supporting text below as a natural lead-in to additional content."
        footer={
          <>
            <Grid>
              <Row>
                <Paragraph m="1rem 0 1rem 0">
                  price: {price}, amount: {amount}
                </Paragraph>
              </Row>
              <Row>
                <Cell xs={6}>
                  <Button
                    isExpanded
                    text="Add"
                    variant="primary"
                    iconBefore="add"
                    onClick={handleAddSelectedBeverage}
                  />
                </Cell>
                <Cell xs={6}>
                  <Button
                    isExpanded
                    text="Remove"
                    variant="destructive"
                    iconBefore="delete"
                    onClick={handleRemoveSeleced}
                  />
                </Cell>
              </Row>
            </Grid>
          </>
        }
      ></Card>
    </StyledCell>
  );
}
