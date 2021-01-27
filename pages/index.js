import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/tabs.module.scss'


const Users = ({users}) => {

    const [finUsers, setFinUsers] = useState(users)

    const championsHandler = () => {
        const finyUsers = users.filter(elem => elem.collections[0] === "champions" || elem.collections[1] === "champions")
        setFinUsers(finyUsers)
    }

    const winnersHandler = () => {
        const finyUsers = users.filter(elem => elem.collections[0] === "winners" || elem.collections[1] === "winners")
        setFinUsers(finyUsers)
    }

    const annHandler = () => {
        const finyUsers = users.filter(elem => elem.collections[0] === "anniversaries" || elem.collections[1] === "anniversaries")
        setFinUsers(finyUsers)
    }

    return (
        <div className="wrapper wrapper__flex wrapper__flex_column">

            <div className="wrapper__flex">
                {finUsers.map(user => 
                    <div key={user.id} className="wrapper__flex wrapper__flex_column">
                        <img src={user.picture} alt="driver picture" className="wrapper__img"/> 
                        <Link href={`/users/${user.uuid}`}>
                            <a className="wrapper__link">{user.name}</a>
                        </Link>
                    </div>
                    )}
            </div>
            <div className={styles.Tabs}>
                <div className={styles.Tabs__item} onClick={championsHandler}>Championship Leaders</div>
                <div className={styles.Tabs__item} onClick={winnersHandler}>Recent Winners</div>
                <div className={styles.Tabs__item} onClick={annHandler}>Anniversaries</div>
            </div>
         </div>
    )
}

export default Users

  export async function getStaticProps(context) {
    const response = await fetch('https://api.mocki.io/v1/49dd9d56')
    const users = await response.json()

    console.log(context)
    return {
      props: {users},
    }
  }