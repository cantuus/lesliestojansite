import React from 'react'
import { Link } from 'react-router-dom'
import howWeMet2 from '../../images/story/howWeMet2.PNG'
import lazerTag from '../../images/story/lazertag.PNG'
import startLongDistance from '../../images/story/startLongDistance.PNG'
import endLongDistance from '../../images/story/endLongDistance.PNG'
import proposal from '../../images/story/proposal.PNG'
import './style.css'


const Story = () => {
    return (
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Our Story</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={howWeMet2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>First time we met</h2>
                                        <span className="date">March 4th, 2016</span>
                                        <p>Cory and Ashley met on the dance floor in San Diego, CA. Cory's coworker asked Ashley if she could dance with Cory since it was his birthday and she said, "Sure, why not?"</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/" title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={lazerTag} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our First Date</h2>
                                        <span className="date">March 11, 2016</span>
                                        <p>They ate dinner at In-n-Out and played Laser Tag at UltraZone and they went walking around the block. Ashley drove Cory back to the Navy Base and when he leaned in for a kiss, she gave him the cheek.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={startLongDistance} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>The Beginning of the Long Distance</h2>
                                        <span className="date">May 2, 2016</span>
                                        <p>Cory left for Hawaii to conclude his service in the Navy before starting school at Northern Illinois University in the fall.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={endLongDistance} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>The End of the Long Distance</h2>
                                        <span className="date">August 19, 2020</span>
                                        <p>After graduating from NIU during the beginning of the pandemic, Cory found a job in San Diego and drove out to California by himself!</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={proposal} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <h2>The Marriage Proposal</h2>
                                        <span className="date">Jan 18, 2021</span>
                                        <p>Cory had decided to propose to Ashley on the 18th of January. Cory had gotten the ring and hid it in his room. On the day of the proposal, Cory had arranged with Ashley's sister, Rebekah, and her friend Binh to meet Cory and Ashley at a gazebo in La Jolla overlooking the ocean. When they arrived, Ashley was driving and she managed to park right behind her sister Rebekah. Cory had thought the whole thing was ruined because he thought that Ashley recognized Rebekah's license plate. Fortunately for Cory, she did not. Ashley had other things in mind such as work. Then Cory decided to walk the opposite way of the gazebo to buy them some time and make it more of a surprise for Ashley. Little did he know, Ashley's friend and sister were waiting along the path that they were walking. Ashley had seen her sister and friend but Cory did not.  After a bit, Cory and Ashley walked towards the gazebo. There was already a couple inside and Cory was nervous that he wouldn't get it. Fortunately for Cory as they approach the gazebo, the couple left and Cory and Ashley proceeded inside. Cory played some romantic music and then got down on one knee and popped the question. Ashley tearfully said of course. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;