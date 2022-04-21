import styles from '../Portfolio.module.css';
import house1 from './images/house1.jpg';
import house2 from './images/house2.jpg';
import house4 from './images/house4.jpg';

const House = () => {

    return (
        <div className={styles.portfolio_inner}>
            <h3>House Price Predictor</h3>
            <p>This project was done using Python and Flask using a lasso regression algorithm.
                The application itself is a prototype for a business proposal for a
                fictional company.<br /><br />
                It can be viewed&nbsp;
                <a className={styles.link}
                    href='https://capstonehouse.herokuapp.com/' target="_blank" rel="noreferrer noopener">
                    here.
                </a>
                <br /><br />
                <b>Login:</b> arusnac<br />
                <b>Password:</b> c964<br /><br />
                <i>It make take a minute to load.</i>
                <br /><br />
                <a className={styles.link}
                    href='https://github.com/arusnac/Housing-Price-Predictor' target="_blank" rel="noreferrer noopener">
                    Here is the GitHub repository here you can also view the business proposal.
                </a><br /><br />
                The application uses portland area housing data and supplies the user with various
                data visualizations:
            </p>
            <img className={styles.portfolio_image} src={house1} alt='scatter plot' />
            <p>It also allows the user to input sample data of various house features to get a
                prediction on the price.
            </p>
            <div className={styles.center}>
                <img className={styles.portfolio_image} src={house2} alt='user input' />
                <img className={styles.portfolio_image} src={house4} alt='app output' />
            </div>

        </div>
    )
}

export default House;