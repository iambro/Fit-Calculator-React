import React from "react";

const OutputInfo = props => {
  return (
    <section>
      <div className="text-container">
        <p>
          Your BMI (Body Mass Index) is{" "}
          <span style={props.bmiStyle}>{props.bmi}</span>. It means you are{" "}
          <span style={props.bmiStyle}>{props.bmiStatus}</span>. You should{" "}
          <span>{props.defaultGoal}</span> weight.
        </p>
        <p>
          Your BMR (Basal Metabolic Rate) is <span>{props.bmr}</span> kcal.
        </p>
        <p>
          Calories you should eat a day to maintain weight is{" "}
          <span>{props.calories}</span> kcal.
        </p>
      </div>
      <form className="form">
        <div className="form__group">
          <label className="form__title">Choose your goal:</label>
          <div className="form__controls">
            <label className="form__radio">
              <input
                type="radio"
                name="goal"
                value="lose"
                onChange={props.handleInputs}
              />
              Lose weight
            </label>
            <label className="form__radio">
              <input
                type="radio"
                name="goal"
                value="maintain"
                onChange={props.handleInputs}
              />
              Maintain weight
            </label>
            <label className="form__radio">
              <input
                type="radio"
                name="goal"
                value="gain"
                onChange={props.handleInputs}
              />
              Gain weight
            </label>
          </div>
        </div>
        <div className="form__group">
          <label className="form__title">
            Set your macronutricient ratio:
            <br />
            <p className="small">
              (The sum of all macronutricients must be equal 100%)
            </p>
          </label>
          <div className="form__controls">
            <label className="form__input">
              <p>Proteins:</p>
              <input
                type="number"
                step="5"
                name="proteinsRatio"
                defaultValue={props.proteinsRatio}
                onChange={props.handleInputs}
              />
            </label>
            <label className="form__input">
              <p>Carbohydrates:</p>
              <input
                type="number"
                step="5"
                name="carbohydratesRatio"
                defaultValue={props.carbohydratesRatio}
                onChange={props.handleInputs}
              />
            </label>
            <label className="form__input">
              <p>Fats:</p>
              <input
                type="number"
                step="5"
                name="fatsRatio"
                defaultValue={props.fatsRatio}
                onChange={props.handleInputs}
              />
            </label>
          </div>
        </div>
        <button
          className="form__button"
          type="button"
          onClick={props.handleCaloriesCalculator}
        >
          Reach your goals!
        </button>
      </form>
    </section>
  );
};

export default OutputInfo;
