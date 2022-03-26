import styles from './feed.module.scss';

export default function Feed() {
    return(
    <section className='container'>
        <div className={ styles.feed }>
            <h2>Últimas Postagens</h2>
        </div>
    </section>
    );
}