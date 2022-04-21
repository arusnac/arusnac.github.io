import styles from '../Portfolio.module.css'

const Schedule = () => {

    return (
        <div className={styles.portfolio_inner}>
            <h3>Appointment Scheduling</h3>
            <p>This application  allows scheduling and managing appointments coded in Java with JavaFX.<br /><br />

                Using MYSQL it allows the user to login to establish a connection to the database.

                From there it pulls data from the database and features the ability to create, update, and delete
                customers as well as appointments within a GUI. The application uses the timezone settings of the
                user for display purposes but adds items to the database with UTC time. There are various error
                checking mechanisms throughout. From verifying that all required fields are filled out to making
                sure appointment times do not overlap.

                One of the final features the appication has is generating reports such as how many customers
                are scheduled for each month, type of appointment or location.
                <br /><br />
                <b>Challenges</b>
                <br /><br />
                One of the biggest challenges I came across was making sure the datetime objects were being
                correctly translated. Another challenge was the specific issue of verifying that appointments
                did not overlap. After investigating I did however find it was directly related to how I was
                storing the times in the database.
                <br /><br />
                <b>Things I would do differently</b>
                <br /><br />
                If I were to redo this application or update it, I would improve it's user interface.
                Not just aesthically but also make it more intuitive and feel more responsive.
                As it is it feels rather clunky.
            </p>
            <a className={styles.link}
                href='https://github.com/arusnac/Schedule-Application' target="_blank" rel="noreferrer noopener">
                GitHub repository</a>
        </div>
    )
}

export default Schedule;