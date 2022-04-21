import styles from '../Portfolio.module.css'

const Website = () => {

    return (
        <div className={styles.portfolio_inner}>
            <h4>Desktop-like Site</h4>
            <p>This is my latest project which is a work in progress.
                My hopes are to turn this into a more fully featured desktop (simulating Windows 95
                more or less.) I'd like to add additional applications that you can run such as a music
                player for example.<br /><br />

                This was done using React with Redux for state management.<br /><br />
                <a className={styles.link}
                    href='https://github.com/arusnac/arusnac.github.io' target="_blank" rel="noreferrer noopener">
                    GitHub repository</a><br /><br />
                <b>Some Todo's:</b>
            </p>
            <form>
                <input type='checkbox' defaultChecked />Add Socials<br />
                <input type='checkbox' />Make Site Mobile Friendly<br />
                <input type='checkbox' />Add "Screensaver"<br />
                <input type='checkbox' />Add Calender<br />
                <input type='checkbox' />Add Applications (calculator, emulators)<br />
            </form>
            {/* <img className={styles.portfolio_image} src={test} alt='test' /> */}

        </div>
    )
}

export default Website;