import React from 'react';
import Github from './svg/github.svg';
import Blog from './svg/blog.svg';
import Arrow from './Arrow';


const Name = () => (
    <section className="hero is-fullheight bg">
        <div className="container name has-text-lefted">
            <h6 className="subtitle is-6">Hey, I'm <strong>Jason</strong> /ˈjāsən/ </h6>
            <span className="about-me">Nice to see you.</span><br/>
            <div className="tabs is-centered">
                <ul>
                    <li className="is-info is-outlined showdelay posi">
                        <a rel='noopener noreferrer' target='_blank' href="https://blog.jasonzhang.xyz/"><img src={Blog} alt="" />
                            <span className="subtitle is-6 has-text-info">&nbsp;Blog</span>
                        </a>
                    </li>
                    <li className="is-info is-outlined showdelay">
                        <a rel='noopener noreferrer' target='_blank' href="https://github.com/dear-zhang"><img src={Github} alt="" />
                            <span className="subtitle is-6 has-text-info">&nbsp;GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <Arrow />
    </section >
)

export default Name;