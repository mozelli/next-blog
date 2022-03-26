import Feed from '../src/components/Feed'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.homeLayout}>
      <main className={ styles.feed }>
        <Feed />
      </main>
      <aside className={ styles.sideBar }>

      </aside>
    </div>
  )
}
