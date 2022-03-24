import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className="container">
      <div className={styles.homeLayout}>
        <div className={ styles.header }>

        </div>
        <div className={ styles.feed }>
          <div className={ styles.post }>

          </div>
        </div>
        <div className={ styles.footer }>
          <div className={ styles.footerColum }>

          </div>
          <div className={ styles.footerColum }>
            
          </div>
          <div className={ styles.footerColum }>
            
          </div>
          <div className={ styles.footerCredits }>
            
          </div>
        </div>
      </div>
    </div>
  )
}
