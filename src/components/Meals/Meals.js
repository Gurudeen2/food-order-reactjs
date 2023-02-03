import React from "react";
import AvailableMeal from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeal />
    </React.Fragment>
  );
};

export default Meals;
