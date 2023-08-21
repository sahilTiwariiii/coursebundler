import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Navbar';
import Footer from './Footer';
import Course from './Course';
// import a from './images/a.png';
import c from './images/c.png';
import register from './assets/img/illustrations/register.svg'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Coursedata = () => {

    return (
        <div>
            <Navbar></Navbar>

            <section className='course-detail section-pad py-4 py-md-5 my-5'>
                <div className='container py-md-5'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            {/* course header */}
                            <div className='course-header box'>
                                <h2 className='text-capitalize'>Introduction to Web Development</h2>
                                <div className='courserating'>
                                    <span className='average-rating'>(4.6) </span>
                                    <span className='average-stars'>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star-half-alt'></i>
                                    </span>
                                    <span className='reviews'> (230 Reviews)</span>
                                </div>
                                <ul>
                                    <li>Enrolled Students - <span>2200</span></li>
                                    <li>Created By - <span><a href="#">Mike Joe</a></span></li>
                                    <li>Language - <span>English</span></li>
                                </ul>
                            </div>

                            {/* course tab start */}

                            <nav className='course-tabs'>
                                <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="course-curriculam-tab" data-bs-toggle="tab" data-bs-target="#course-curriculam" type="button" role="tab" aria-controls="course-curriculam" aria-selected="true">Curriculam</button>

                                    <button class="nav-link" id="course-description-tab" data-bs-toggle="tab" data-bs-target="#course-description" type="button" role="tab" aria-controls="course-description" aria-selected="false">Description</button>

                                    <button class="nav-link" id="course-instructor-tab" data-bs-toggle="tab" data-bs-target="#course-instructor" type="button" role="tab" aria-controls="course-instructor" aria-selected="false">Instructor</button>

                                    <button class="nav-link" id="course-reviews-tab" data-bs-toggle="tab" data-bs-target="#course-reviews" type="button" role="tab" aria-controls="course-reviews" aria-selected="false">Reviews</button>

                                </div>
                            </nav>

                            {/* course tab end */}

                            {/* tab panes start */}

                            <div class="tab-content" id="nav-tabContent">

                                {/* curriculam start */}
                                <div class="tab-pane fade show active" id="course-curriculam" role="tabpanel" aria-labelledby="course-curriculam-tab" tabindex="0">
                                    <div className='course-curriculam box'>
                                        <h4 className='mb-4'>Curriculam</h4>
                                        {/* accordion start */}
                                        <div class="accordion" id="accordion">
                                            {/* accordion item start */}
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id='heading-1'>
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                                        Introduction <span>2 lessons | 12min</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse-1" class="accordion-collapse collapse show" data-bs-parent="#accordion">
                                                    <div class="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Course Overview
                                                                <span>04:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                What are data Structures and algorithms
                                                                <span>08:22 </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* accordion item end */}

                                            {/* accordion item start */}
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id='heading-2'>
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                                        Analysis of Algorithms <span>5 lessons | 51min</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse-2" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div class="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Analysis of Algorithms - Running Time
                                                                <span>13:46</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"> </i>
                                                                Asymptotic Analysis of Algorithms
                                                                <span>09:12</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Big O notation
                                                                <span>11:48</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Big Omega notation
                                                                <span>08:37</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"></i>
                                                                Big Theta Notation
                                                                <span>07:54</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* accordion item end */}

                                            {/* accordion item start */}
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id='heading-3'>
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                                                        Arrays <span>2 lessons | 20min</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse-3" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div class="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <i class="fas fa-play-circle"> </i>
                                                                Arrays - Introduction
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"> </i>
                                                                Arrays in C++, Java, Python
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"> </i>
                                                                Running Sum of 1d Array
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"> </i>
                                                                2D Arrays
                                                                <span>06:00</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* accordion item end */}

                                            {/* accordion item start */}
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id='heading-4'>
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                                                        Stacks and Queues <span>5 lessons | 31min</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse-4" class="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div class="accordion-body">
                                                        <ul>
                                                            <li>
                                                                <i class="fas fa-play-circle"> </i>
                                                                Stack data strcuture
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"> </i>
                                                                Queue data structure
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"> </i>
                                                                Stacks - C++ STL
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"> </i>
                                                                Queue - C++ STL
                                                                <span>06:00</span>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-play-circle"> </i>
                                                                Inorder traversal of Binary Tree without recursion
                                                                <span>06:00</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* accordion item end */}
                                        </div>
                                        {/* accordion end */}
                                    </div>
                                </div>
                                {/* curriculam end */}

                                {/* description start */}
                                <div class="tab-pane fade" id="course-description" role="tabpanel" aria-labelledby="course-description-tab" tabindex="0">
                                    <div class='course-description box'>
                                        <h3 class="mb-4">Description</h3>
                                        <p>In this course we will understand different data structures and how to use them effectively for solving problems. It is expected that the students have basic experience in any high-level programming language. Data structures and algorithms are a crucial part of programming interviews. This course is a complete course on Complete data structure and algorithms. The main focus here will be mastering the Data structures, implementing those and some problems explaining application of those data structures and understand different programming paradigms, analysis of algorithms and applying different data structures.</p>
                                        <h4>For Who is this course Designed ?</h4>
                                        <ul>
                                            <li>Software Engineers</li>
                                            <li>Computer Science students</li>
                                            <li>Data Scientists</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* description end */}

                                {/* instructor start */}
                                <div class="tab-pane fade" id="course-instructor" role="tabpanel" aria-labelledby="course-instructor-tab" tabindex="0">
                                    <div className='course-instructor box'>
                                        <h3 className='mb-3'>Instructor</h3>
                                        <div className='instructor-details'>
                                            <div className='details-wrap d-flex align-items-center flex-wrap'>
                                                <div className='left-box me-4'>
                                                    <div className='img-box'>
                                                        <img src='https://www.w3schools.com/howto/img_avatar.png' className='' alt='instructor'></img>
                                                    </div>
                                                </div>
                                                <div className='right-box'>
                                                    <h4>john <span>(Web Developer)</span></h4>
                                                    <ul>
                                                        <li><i className='fas fa-star'></i> 4.3 Rating</li>
                                                        <li><i className='fas fa-play-circle'></i> 10 Courses</li>
                                                        <li><i className='fas fa-certificate'></i> 2000 Rating</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='text'>
                                                <p className='mb-0'>I am working as Computer Scientist at Adobe. I have 7 years of extensive experience in Programming. I am a Machine Learning enthusiast and have 4+ years of experience in Machine Learning.

                                                    I am very passionate about learning the latest developments in Computer Vision and Machine Learning and like sharing my knowledge with others.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* instructor end */}

                                {/* reviews section start*/}
                                <div class="tab-pane fade" id="course-reviews" role="tabpanel" aria-labelledby="course-reviews-tab" tabindex="0">
                                    <div className='course-reviews box'>
                                        <div className='rating-summary'>
                                            <h3 className='mb-4'>Student's Feedback</h3>
                                            <div className='row'>
                                                <div className='col-md-4 d-flex align-items-center justify-content-center text-center'>
                                                    <div className='rating-box'>
                                                        <div className='average-rating'>4.4</div>
                                                        <div className='average-stars'>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star-half-alt'></i>
                                                        </div>
                                                        <div className='reviews'>230 Reviews</div>
                                                    </div>
                                                </div>
                                                <div className='col-md-8'>
                                                    <div className='rating-bars'>
                                                        <div className='rating-bars-item'>
                                                            <div className='star-text'>5 Star</div>
                                                            <div className='progress'>
                                                                <div className='progress-bar fivestar'></div>
                                                            </div>
                                                            <div className='percent'>55%</div>
                                                        </div>

                                                        <div className='rating-bars-item'>
                                                            <div className='star-text'>4 Star</div>
                                                            <div className='progress'>
                                                                <div className='progress-bar fourstar'></div>
                                                            </div>
                                                            <div className='percent'>25%</div>
                                                        </div>

                                                        <div className='rating-bars-item'>
                                                            <div className='star-text'>3 Star</div>
                                                            <div className='progress'>
                                                                <div className='progress-bar threestar'></div>
                                                            </div>
                                                            <div className='percent'>10%</div>
                                                        </div>

                                                        <div className='rating-bars-item'>
                                                            <div className='star-text'>2 Star</div>
                                                            <div className='progress'>
                                                                <div className='progress-bar twostar'></div>
                                                            </div>
                                                            <div className='percent'>8%</div>
                                                        </div>

                                                        <div className='rating-bars-item'>
                                                            <div className='star-text'>1 Star</div>
                                                            <div className='progress'>
                                                                <div className='progress-bar onestar'></div>
                                                            </div>
                                                            <div className='percent'>2%</div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='reviews-filter'>
                                            <h3 className='mb-4'>Reviews</h3>
                                            <form action=''>
                                                <div className='form-group'>
                                                    <i className='fas fa-chevron-down select-icon'></i>
                                                    <select className='form-control'>
                                                        <option value=''>All Reviews</option>
                                                        <option value='1'>1 Star</option>
                                                        <option value='2'>2 Star</option>
                                                        <option value='3'>3 Star</option>
                                                        <option value='4'>4 Star</option>
                                                        <option value='5'>5 Star</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>

                                        <div className='reviews-list'>
                                            <div className='reviews-item'>
                                                <div className='img-box'>
                                                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="review image"></img>
                                                </div>
                                                <h4>Ankon Manna</h4>
                                                <div className='stars-rating'>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <span className='date'>1 Day ago</span>
                                                </div>
                                                <p>Great Course.</p>
                                            </div>

                                            <div className='reviews-item'>
                                                <div className='img-box'>
                                                    <img src="https://th.bing.com/th/id/OIP.WAz2b6Gc_qhzNfgoItbjuAHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.4" alt="review image"></img>
                                                </div>
                                                <h4>Ankon Manna</h4>
                                                <div className='stars-rating'>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <span className='date'>1 Day ago</span>
                                                </div>
                                                <p>Great Course.</p>
                                            </div>

                                            <div className='reviews-item'>
                                                <div className='img-box'>
                                                    <img src="https://th.bing.com/th/id/OIP.MwYZmCky0tTnPMpmAdRAsQAAAA?pid=ImgDet&w=180&h=180&c=7&dpr=1.4" alt="review image"></img>
                                                </div>
                                                <h4>Ankon Manna</h4>
                                                <div className='stars-rating'>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <span className='date'>1 Day ago</span>
                                                </div>
                                                <p>Great Course.</p>
                                            </div>

                                        </div>
                                        <button type='button' className='btn btn-outline-primary'>More Reviews</button>
                                    </div>
                                </div>
                                {/* reviews section end*/}

                            </div>

                            {/* tab panes end */}

                        </div>
                        <div className='col-lg-4'>
                            {/* course sidebar */}
                            <div className='course-sidebar box'>
                                <div className='img-box position-relative' data-bs-toggle="modal" data-bs-target="#video-modal">
                                    <img src={c} className='w-100' alt='course image'></img>
                                    <div className='play-icon'>
                                        <i className='fas fa-play'></i>
                                    </div>
                                    <p className='text-center'>Course Preview</p>
                                </div>
                                <div className='price d-flex align-items-center mb-3'>
                                    <span className='price-old'>$100 </span>
                                    <span className='price-new'>$49 </span>
                                    <span className='price-discount'>51% off</span>
                                </div>
                                <h3 className='mb-3'>Course Features</h3>
                                <ul className='features-list'>
                                    <li>Total 15 lessons</li>
                                    <li>Other feature</li>
                                    <li>Other feature</li>
                                    <li>Other feature</li>
                                </ul>
                                <div className='btn-wrap'>
                                    <button type='button' className='btn btn-theme btn-outline-primary btn-block'>Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <Footer></Footer>

            <div className='modal fade video-modal js-course-preview-modal' id='video-modal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                    <div className='modal-content border-primary'>
                        <div className='modal-body p-2'>
                            {/* <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button> */}
                            <div class="ratio ratio-16x9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/xLetJpcjHS0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default Coursedata;