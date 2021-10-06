import { Fragment } from 'react';
import foodimage from '../../assets/food.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Order food with Zahra </h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={foodimage} alt="food picture"/>
        </div>
    </Fragment>
}
export default Header;