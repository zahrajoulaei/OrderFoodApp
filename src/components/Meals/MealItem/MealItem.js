import classes from './MealItem.module.css';
import MealItemForm from './MealItemFform';

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`; //for rendering always 2 decimal numbers
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.descripttopn}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} />
            </div>
        </li>);
};
export default MealItem;
