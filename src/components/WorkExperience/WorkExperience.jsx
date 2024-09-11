import React, {useRef} from "react";
import './WorkExperience.css';
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard"
import Slider from "react-slick";

function WorkExperience() {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinity: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        draggable: false, // 禁用鼠标拖拽
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <section className="experience-container" id="projects">
            <h5>项目</h5>

            <div className="experience-content">
                <div className="arrow-right" onClick={slideRight}>
                    <span class="material-symbols-outlined">chevron_right</span>
                </div>

                <div className="arrow-left"onClick={slideLeft}>
                    <span class="material-symbols-outlined">chevron_left</span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperience;
