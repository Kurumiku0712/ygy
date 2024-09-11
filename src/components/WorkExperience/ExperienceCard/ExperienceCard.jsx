import React from "react";
import './ExperienceCard.css';

function ExperienceCard({ details }) {

    return (
        <div className="work-experience-card">
            <h6>{details.title}</h6>

            <div className="work-duration">{details.date}</div>

            <ul>
                {details.responsibilities.map((item, index) => {
                    // 检查是否是 URL，并且将其渲染为<a>标签
                    if (item.includes('http')) {
                        return (
                            <li key={index}>
                                <a href={item.split(": ")[1]} target="_blank" rel="noopener noreferrer">
                                    {item}
                                </a>
                            </li>
                        );
                    }
                    return <li key={index}>{item}</li>;
                })}
            </ul>

        </div>
    )
}

export default ExperienceCard;
