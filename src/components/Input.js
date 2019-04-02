import React from "react";

const Input = props => {
  return (
    <section>
      <form className="form">
        <div className="form__group">
          <label className="form__title">Sex:</label>
          <div className="form__controls">
            <label className="form__radio">
              <input
                type="radio"
                name="sex"
                value="male"
                onChange={props.handleInputs}
              />
              Male
            </label>
            <label className="form__radio">
              <input
                type="radio"
                name="sex"
                value="female"
                onChange={props.handleInputs}
              />
              Female
            </label>
          </div>
        </div>
        <div className="form__group">
          <label className="form__title">Height [cm]:</label>
          <div className="form__controls">
            <input
              className="form__input form__input--number"
              type="number"
              name="height"
              onChange={props.handleInputs}
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__title">Weight [kg]:</label>
          <div className="form__controls">
            <input
              className="form__input form__input--number"
              type="number"
              name="weight"
              onChange={props.handleInputs}
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__title">Age:</label>
          <div className="form__controls">
            <input
              className="form__input form__input--number"
              type="number"
              name="age"
              onChange={props.handleInputs}
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__title">Activity:</label>
          <div className="form__controls">
            <select
              className="form__input form__input--select"
              defaultValue="0"
              name="activity"
              onChange={props.handleInputs}
            >
              <option value="0" disabled hidden>
                Choose here
              </option>
              <option value="1">Sedentary job and no excercise</option>
              <option value="2">
                Sedentary job and excercise 2-4 times/week
              </option>
              <option value="3">
                Physical job and excercise 3-6 times/week
              </option>
              <option value="4">
                Very intense physical job and excercise 5-7 times/week
              </option>
            </select>
          </div>
        </div>
        <button
          className="form__button"
          type="button"
          onClick={props.handleCalculator}
        >
          Calculate
        </button>
      </form>
    </section>
  );
};

export default Input;
