import React from "react";
import { IBeverage } from "../interfaces/beverage";
import BeverageCard from "./BeverageCard";
import { Grid, Row } from "@dexma/ui-components";

import { useContext } from "react";
import { AppContext, actions } from "../context";

interface IBeveragesList {
  list: IBeverage[];
}

export default function BeveragesList({ list }: IBeveragesList) {
  const context = useContext(AppContext);
  console.log("BeveragesList -> context", context);

  const renderList = (_list: IBeveragesList["list"]) =>
    _list.map((beverage) => (
      <BeverageCard
        {...beverage}
        handleAddSelectedBeverage={() =>
          context.dispatch(actions.addSelectedBeverage(beverage))
        }
        handleRemoveSeleced={() =>
          context.dispatch(actions.removeSelectedBeverage(beverage.id))
        }
      />
    ));

  return (
    <Grid fluid>
      <Row>{renderList(list)}</Row>
    </Grid>
  );
}
