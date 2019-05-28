import React from 'react';
import Arrow from './Arrow';

const AboutMe = [
    "宅",
    "喜自由 · 享受创作",
    "半调子前端 · 学习 PHP ing · 折腾 Python",
    "CARPE DIEM",
]

const About = () => (
    <section className="hero is-fullheight bg">
        <div className="container about has-text-lefted">
            <h6 className="subtitle is-6">About me </h6>
            {
                AboutMe.map((item, i) => <span key={i} className="about-me">{item}<br /></span>)
            }
        </div>
        <Arrow />
    </section>
)

export default About;