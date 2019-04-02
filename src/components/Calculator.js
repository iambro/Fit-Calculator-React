import React, { Component } from "react";
import Input from "./Input";
import OutputInfo from "./OutputInfo";
import OutputGoals from "./OutputGoals";

class Calculator extends Component {
  state = {
    sex: "",
    height: "",
    weight: "",
    age: "",
    activity: "",
    defaultGoal: "",
    goal: "",
    bmi: "",
    bmiStatus: "",
    bmiStyle: "",
    bmr: "",
    calories: "",
    goalCalories: "",
    proteins: "",
    carbohydrates: "",
    fats: "",
    proteinsRatio: 30,
    carbohydratesRatio: 45,
    fatsRatio: 25,
    proteinsIndex: "",
    carbohydratesIndex: "",
    fatsIndex: "",
    displayOutputInfo: false,
    displayOutputGoals: false
  };

  handleInputs = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  handleCalculator = () => {
    const { sex, weight, height, age, activity } = this.state;
    const sexValue = sex === "male" ? 5 : -161;
    const bmiValue = Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;
    const bmrValue = Math.round(
      10 * weight + 6.25 * height - 5 * age + sexValue
    );
    let activityValue;
    if (activity === "1") {
      activityValue = 1.2;
    } else if (activity === "2") {
      activityValue = 1.375;
    } else if (activity === "3") {
      activityValue = 1.55;
    } else if (activity === "4") {
      activityValue = 1.725;
    }
    const caloriesValue = Math.round(bmrValue * activityValue);

    if (
      (sex === "male" || sex === "female") &&
      height > 0 &&
      weight > 0 &&
      age > 0 &&
      activity > 0
    ) {
      this.setState({
        bmi: bmiValue,
        bmr: bmrValue,
        calories: caloriesValue,
        displayOutputInfo: true,
        displayOutputGoals: false
      });
    } else if (sex === "") {
      alert("Chose your sex");
    } else if (weight <= 0) {
      alert("Weight can not be less than 0");
    } else if (height <= 0) {
      alert("Height can not be less than 0");
    } else if (age <= 0) {
      alert("Age can not be less than 0");
    } else if (activity === "") {
      alert("Chose your activity");
    }
    this.setDefaultGoal(bmiValue);
  };

  setDefaultGoal = x => {
    let defaultGoalValue = "";
    let bmiStatusValue = "";
    let style = "";
    const greenStyle = {
      color: "#009432"
    };
    const redStyle = {
      color: "#EA2027"
    };
    const yellowStyle = {
      color: "#FFC312"
    };
    const overweightBMI = 25;
    const underweightBMI = 18;
    if (x >= overweightBMI) {
      defaultGoalValue = "lose";
      bmiStatusValue = "overweight";
      style = redStyle;
    } else if (x < overweightBMI && x >= underweightBMI) {
      defaultGoalValue = "maintain";
      bmiStatusValue = "normal (healthy weight)";
      style = greenStyle;
    } else if (x < underweightBMI) {
      defaultGoalValue = "gain";
      bmiStatusValue = "underweight";
      style = yellowStyle;
    }
    this.setState({
      defaultGoal: defaultGoalValue,
      bmiStatus: bmiStatusValue,
      bmiStyle: style
    });
  };

  handleCaloriesCalculator = () => {
    const {
      calories,
      goal,
      weight,
      proteinsRatio,
      carbohydratesRatio,
      fatsRatio
    } = this.state;

    let goalCaloriesValue;
    const extraCalories = 500;
    if (goal === "lose") {
      goalCaloriesValue = calories - extraCalories;
    } else if (goal === "maintain") {
      goalCaloriesValue = calories;
    } else if (goal === "gain") {
      goalCaloriesValue = calories + extraCalories;
    }
    const fatCalorie = 9;
    const proteinCalorie = 4;
    const carboCalorie = 4;

    let fatsValue = Math.round(((fatsRatio / 100) * goalCaloriesValue) / fatCalorie);
    let proteinsValue = Math.round(
      ((proteinsRatio / 100) * goalCaloriesValue) / proteinCalorie
    );
    let carbohydratesValue = Math.round(
      ((carbohydratesRatio / 100) * goalCaloriesValue) / carboCalorie
    );

    let proteinsIndexValue = Math.round((proteinsValue / weight) * 10) / 10;
    let carbohydratesIndexValue =
      Math.round((carbohydratesValue / weight) * 10) / 10;
    let fatsIndexValue = Math.round((fatsValue / weight) * 10) / 10;
    let macronutricients = [
      Number(proteinsRatio),
      Number(carbohydratesRatio),
      Number(fatsRatio)
    ];
    let sum = macronutricients.reduce((a, b) => a + b);

    this.setState({
      displayOutputGoals: false
    });


    if (
      sum === 100 &&
      (goal === "lose" || goal === "maintain" || goal === "gain")
    ) {
      this.setState({
        goalCalories: goalCaloriesValue,
        proteins: proteinsValue,
        carbohydrates: carbohydratesValue,
        fats: fatsValue,
        proteinsIndex: proteinsIndexValue,
        carbohydratesIndex: carbohydratesIndexValue,
        fatsIndex: fatsIndexValue,
        displayOutputGoals: true
      });
    } else if (
      sum !== 100 &&
      (goal === "lose" || goal === "maintain" || goal === "gain")
    ) {
      alert("The sum of all macronutricients must be equal 100%.");
    } else if (
      sum === 100 &&
      (goal !== "lose" || goal !== "maintain" || goal !== "gain")
    ) {
      alert("Chose your goal to calculate.");
    } else {
      alert(
        "The sum of all macronutricients must be equal 100%. Chose your goal to calculate."
      );
    }
  };

  render() {
    const {
      sex,
      height,
      weight,
      age,
      activity,
      defaultGoal,
      bmi,
      bmiStatus,
      bmiStyle,
      bmr,
      calories,
      goalCalories,
      proteins,
      carbohydrates,
      fats,
      proteinsRatio,
      carbohydratesRatio,
      fatsRatio,
      proteinsIndex,
      carbohydratesIndex,
      fatsIndex,
      displayOutputInfo,
      displayOutputGoals
    } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1>Fit Calculator</h1>
        </header>
        <main>
          <Input
            sex={sex}
            height={height}
            weight={weight}
            age={age}
            activity={activity}
            handleInputs={this.handleInputs}
            handleCalculator={this.handleCalculator}
          />
          {displayOutputInfo ? (
            <OutputInfo
              defaultGoal={defaultGoal}
              bmi={bmi}
              bmiStatus={bmiStatus}
              bmiStyle={bmiStyle}
              bmr={bmr}
              calories={calories}
              proteinsRatio={proteinsRatio}
              carbohydratesRatio={carbohydratesRatio}
              fatsRatio={fatsRatio}
              handleInputs={this.handleInputs}
              handleCaloriesCalculator={this.handleCaloriesCalculator}
            />
          ) : null}
          {displayOutputGoals ? (
            <OutputGoals
              goalCalories={goalCalories}
              proteins={proteins}
              carbohydrates={carbohydrates}
              fats={fats}
              proteinsIndex={proteinsIndex}
              carbohydratesIndex={carbohydratesIndex}
              fatsIndex={fatsIndex}
            />
          ) : null}
        </main>
        <footer>
          <p>
            All calculations are based on Mifflin-St Jeor formula. The
            calcualtions are only an estimation. If you have any health problems
            (e.g. diabeters, hypertension) or if you are pregnant, you should
            contact your doctor or dietician.
          </p>
        </footer>
      </React.Fragment>
    );
  }
}

export default Calculator;
