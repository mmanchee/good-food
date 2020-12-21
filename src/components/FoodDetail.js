import React from 'react';
import PropTypes from 'prop-types';

function FoodDetail(props){
  const { food, onClickingRemove } = props;

  
  return (
    <React.Fragment>
      <p>{food.name} Detail</p>
      <table>
        <tr>
          <td>Category:</td>
          <td>{food.category}</td>
        </tr>
        <tr>
          <td>Sub-Category:</td>
          <td>{food.subCategory}</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{food.decription}</td>
        </tr>
        <tr>
          <td>Caffeine</td>
          <td>{food.caffeine == 1 ? "Low" : food.caffeine == 2 ? "Moderate" : food.caffeine == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Egg:</td>
          <td>{food.egg == 1 ? "Low" : food.egg == 2 ? "Moderate" : food.egg == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Fish:</td>
          <td>{food.fish == 1 ? "Low" : food.fish == 2 ? "Moderate" : food.fish == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>FODMAP:</td>
          <td>{food.FODMAP == 1 ? "Low" : food.FODMAP == 2 ? "Moderate" : food.FODMAP == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Fructose:</td>
          <td>{food.fructose == 1 ? "Low" : food.fructose == 2 ? "Moderate" : food.fructose == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Gluten:</td>
          <td>{food.gluten == 1 ? "Low" : food.gluten == 2 ? "Moderate" : food.gluten == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Histamine:</td>
          <td>{food.histamine == 1 ? "Low" : food.histamine == 2 ? "Moderate" : food.histamine == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Lactose:</td>
          <td>{food.lactose == 1 ? "Low" : food.lactose == 2 ? "Moderate" : food.lactose == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Lectin:</td>
          <td>{food.lectin == 1 ? "Low" : food.lectin == 2 ? "Moderate" : food.lectin == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Legume:</td>
          <td>{food.legume == 1 ? "Low" : food.legume == 2 ? "Moderate" : food.legume == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Nut:</td>
          <td>{food.nut == 1 ? "Low" : food.nut == 2 ? "Moderate" : food.nut == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Oxalate:</td>
          <td>{food.oxalate == 1 ? "Low" : food.oxalate == 2 ? "Moderate" : food.oxalate == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Salicylate:</td>
          <td>{food.salicylate == 1 ? "Low" : food.salicylate == 2 ? "Moderate" : food.salicylate == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Shellfish:</td>
          <td>{food.shellfish == 1 ? "Low" : food.shellfish == 2 ? "Moderate" : food.shellfish == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Soy:</td>
          <td>{food.soy == 1 ? "Low" : food.soy == 2 ? "Moderate" : food.soy == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Sulfite:</td>
          <td>{food.sulfite == 1 ? "Low" : food.sulfite == 2 ? "Moderate" : food.sulfite == 3 ? "High" : "n/a"}</td>
        </tr>
        <tr>
          <td>Tyramine:</td>
          <td>{food.tyramine == 1 ? "Low" : food.tyramine == 2 ? "Moderate" : food.tyramine == 3 ? "High" : "n/a"}</td>
        </tr>
      </table>
      <p>Category</p>
    </React.Fragment>
  );
}

FoodDetail.propTypes = {
  food: PropTypes.object,
  onClickingRemove: PropTypes.func
}

export default FoodDetail;