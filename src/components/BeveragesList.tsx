import React from "react";
import BeverageCard, { IBeverage } from "./BeverageCard";
import { Grid, Row } from "@dexma/ui-components";

interface IBeveragesList {
  list: IBeverage[];
}

const renderList = (_list: IBeveragesList["list"]) =>
  _list.map((beverage) => <BeverageCard {...beverage} />);

export default function BeveragesList({ list }: IBeveragesList) {
  return (
    <Grid fluid>
      <Row>{renderList(list)}</Row>
    </Grid>
  );
}
