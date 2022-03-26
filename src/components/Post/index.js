import styles from './post.module.scss';

export default function Post() {
    return(
        <article className={ styles.post }>
            <div className={ styles.postImage }>
                <picture>
                    <source media="(min-width: 769px)" srcSet='images/image_1440.png' />
                    <img src="images/image_768.png" alt="Imagem do post" />
                </picture>
            </div>

            <h1>Título do Primeiro Post do Feed</h1>

            <div className={ styles.info }>
                <div className={ styles.date }>
                    <i className="ri-calendar-2-fill"></i>
                    <span>26 de dezembro de 2022</span>
                </div>
                <div className={ styles.author }>
                    <i className="ri-user-fill"></i>
                    <span>João Mozelli</span>
                </div>
            </div>
            <div className={ styles.resume }>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facilis nihil! Laborum ad atque expedita amet ipsa perferendis [...]
                </p>
            </div>
            <div  className={ styles.readMoreButton }>
                <button type='button'>
                    Leia mais!
                </button>
            </div>
        </article>
    );
}