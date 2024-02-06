import React from 'react';
import Avatar from "../assets/images/avatar.png";
import { GithubOutlined, LinkedinOutlined, MessageOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const HeaderComp = () => {
    return (
        <header>
            <div className="left">
                <img src={Avatar} alt="Profile picture"/>
                <div className="user-infos">
                    <h1>Noah Ney</h1>
                    <h3>First Year Epitech Student</h3>
                    <div className="socials">
                        <a className="icon" target="blank" href="https://www.linkedin.com/in/noah-ney-3605a82b2/">
                            <div className="contact-item">
                                <LinkedinOutlined />
                            </div>
                        </a>
                        <a className="icon" target="blank" href="https://github.com/NeauNeauu">
                            <div className="contact-item">
                                <GithubOutlined />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="right">
                <Button className='contact-btn' icon={<MessageOutlined/>}> Contact Me</Button>
            </div>
        </header>
    );
}

export default HeaderComp;
