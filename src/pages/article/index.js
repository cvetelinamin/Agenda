import React from 'react'
import styles from './index.module.css'
import Article from '../../components/article'
import Header from '../../components/header'
import image from '../../images/event-1.jpg'
import headerimage from '../../images/events-news-bg.jpg'
import Footer from '../../components/footer'

const ArticlePage = () => {
    return (
        <div className={styles.container}>
            <img src={headerimage} className={styles["header-image"]} />
            <Header />
            <Article
                 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                 img={image}
                content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh" />
            <Footer />
        </div>
    )
}

export default ArticlePage