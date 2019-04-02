import React from "react";

const OutputGoals = props => {
  return (
    <section>
      <div className="text-container">
        <p>
          Calories you should eat a day to reach your goal is{" "}
          <span>{props.goalCalories}</span> kcal.
        </p>
        <h2>Recommendend macronutricients:</h2>
        <p>Proteins: {props.proteins} g</p>
        <p className="small">{props.proteinsIndex} g/kg body weight</p>
        <p>Carbohydrates: {props.carbohydrates} g</p>
        <p className="small">{props.carbohydratesIndex} g/kg body weight</p>
        <p>Fats: {props.fats} g</p>
        <p className="small">{props.fatsIndex} g/kg body weight</p>
      </div>
    </section>
  );
};

export default OutputGoals;
