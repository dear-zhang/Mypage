import React from 'react';
const footerStars = [
    {
        "name": "Resume",
        "url": "https://resume.jasonzhang.xyz",
        "description": "个人简历",
        "image": "https://bulma.io/images/footer/bootstrap-to-bulma.png",
        "refer": "点击查看"
    },
    {
        "name": "Blog",
        "url": "https://blog.jasonzhang.xyz",
        "description": "个人博客",
        "image": "https://bulma.io/images/footer/bootstrap-to-bulma.png",
        "refer": "点击查看"
    },
    {
        "name": "Wiki",
        "url": "https://wiki.jasonzhang.xyz",
        "description": "个人Wiki网站",
        "image": "https://bulma.io/images/footer/bootstrap-to-bulma.png",
        "refer": "点击查看"
    }
]

const BdFooterStars = () => (
    <div className="bd-footer-stars column">
        {footerStars.map((footerStar, i) =>
            <div key={i} className="bd-footer-star">
                <header className="bd-footer-star-header">
                    <h5 className="bd-footer-title">
                        <strong>{footerStar.name}</strong>
                    </h5>
                    <p className="bd-footer-subtitle">
                        {footerStar.description}
                    </p>
                </header>
                <figure className="bd-footer-star-figure">
                    <a rel="noopener noreferrer" target="_blank" className="button is-link is-outlined" href={footerStar.url}>
                        {footerStar.refer}
                    </a>
                </figure>
            </div>)}
    </div>
)

const Footer = () => (
    <section className="hero is-fullheight bg">
        <div className="container project">
            <div className="bd-footer-stars columns">
                <BdFooterStars />
            </div>
        </div>
        <footer className="footer">
            <div className="content has-text-centered">
                ©2018 - 2019 <span id="heart">♥</span> Made by <a href="https://me.jasonzhang.xyz">Jason</a>.
            </div>
        </footer>
    </section>

)

export default Footer;