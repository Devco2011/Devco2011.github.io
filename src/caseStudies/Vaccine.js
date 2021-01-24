import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';



export const VaccineCaseStudy = () => {
    return (
        <>
            <Container id="caseStudy-container" fluid={true}>
                <Row className="justify-content-md-center">
                    <Col className="col-12">
                        <h3 className="section-title">SIGN ME UP</h3>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-12 col-md-6 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><center><h5 className="section-title">THE ASSIGNMENT</h5></center>
                                <p className="whatILearnedText"><strong>This project was part of my UI/UX training at Nashville Software School and was 100% remote.</strong></p><br></br>
                                <p className="whatILearnedText"><strong>After signing her mother up for an appointment to receive the COVID-19 vaccine on the TN.gov website, our instructor shared
                                    her experience with us. She said the process of scheduling an appointment on the website was confusing and frustrating.</strong></p><br></br>
                                <p className="whatILearnedText"><strong>Our assignment was to improve the experience for users trying to request an appointment for the vaccine at covid19.TN.gov. We
                                    were divided into two teams of four and were given three days to complete the assignment and present our designs.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 col-md-4 mt-4 mb-5">
                        <div className="csImages">
                            <img className="tidyFamHomeCS" src="../../images/vaccineBottle.png" height="100%" width="100%" alt="Vaccine Bottle icon with title Sign up for Vaccine" />
                        </div>
                    </Col>


                    <Col className="col-12 mt-5">
                        <center><h5 className="section-title">GETTING FAMILIAR WITH THE SITE</h5></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mt-2 mb-5">
                        <p>We began by exploring and discussing the existing website as a team. Our initial intent was to evaluate the experience of signing up and/or determining eligibility
                        for the vaccine. We found the site to be confusing for a few reasons. </p>
                        <li>There was no clear path for requesting a vaccine</li>
                        <li>Sign up links were buried</li>
                        <li>Users had to answer a lengthy questionnaire</li>
                        <li>Sign up form was on an external site and did not look official</li>
                        <li>Sign up form was redundant, forcing the user to re-enter information</li>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mt-5 mb-5">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I worked with my team to evaluate the user experience on the existing website. We found the site to be a convoluted
                                    system that was hard to follow and difficult to navigate.</strong></p><br></br>

                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>It was unnecessarily difficult for a user to sign up for a vaccine appointment.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-12 col-md-12 mt-5">
                        <h5 className="section-title">THE CHALLENGE AND IDEATION</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={6} className="mt-2 mb-5">
                        <p>With millions of Tennesseans being directed to covid19.TN.gov to request a vaccine appointment, it was important that the site be easy to understand and navigate.
                        My team and I articulated the challenge by asking: <strong>How might we make it easier to sign up to receive the COVID-19 vaccine?</strong>
                        </p>
                        <p>As a team, we came up with some possible solutions.</p>
                        <li>County vaccination page text should be clear and understandable</li>
                        <li>The “Phases” graphic should be redesigned</li>
                        <li>The form should be redesigned</li>
                        <li>Remove the eligibility questionnaire completely</li>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <Col className="col-12 col-md-12 mt-5">
                        <h5 className="section-title">USER TESTS</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">

                    <Col className="col-12 col-md-8">
                        <div className="csPenPaperImages">
                            <img className="brendaScreenShot" src="../../images/brendaScreenShot.png" height="100%" width="100%" alt="Screen shot of one of our user tests." />
                        </div>
                    </Col>
                    {/* </div> */}
                    <Col className="col-12 col-md-12 mt-2 pb-5">
                        <center><p><i>User testing the original site.</i></p></center>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md={6} className="mt-2 mb-5">
                        <p><strong>To validate our initial thoughts, we conducted two user tests, via Zoom, on the original site.</strong></p>
                        <p>Our first user was a <strong>20 year old college student</strong>. We asked him to sign up for an appointment to receive the vaccine.
                        He found the eligibility questionnaire quickly, and went through it. He was found to be ineligible. He was <strong>not clear</strong> on
                        when he would be eligible or how he could get that information. He searched the FAQ section next and that eventually led him back
                        to the eligibility questionnaire that he had already completed. He had to be prompted to check out the “Phases” page, and he <strong>did
                            not understand</strong> the graphic when he got there.</p>
                        <p>Our second user was a <strong>retired senior citizen</strong>. Again, we asked her to sign up for an appointment to receive the vaccine.
                        She <strong>could not determine</strong> where she should start looking. She went to the “Testing Sites” section, but did not find a place to signup.
                        She looked at the eligibility questionnaire, but did not answer any questions. She stated that she <strong>felt “lost”</strong> and she wanted to
                        see a button “that says, ‘Sign up for vaccine here’”. She eventually returned to and completed the eligibility questionnaire. She
                        finally got to the signup form and found it to be <strong>confusing</strong>. She <strong>did not understand</strong> why she was having to enter the same information
                                she had entered on the questionnaire. She <strong>did not know why</strong> she had to click to signup and click again to submit.</p>

                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col className="col-12 col-md-6 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I was a facilitator on one of the two user tests my team conducted to validate our initial ideas for solutions. I observed and asked questions
                                    during the other test.</strong></p><br></br>
                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>After discussing our notes from the user tests, we determined that we needed to expand the scope of our initial solutions. The
                                users made it clear that it wouldn’t matter how the information was presented if they couldn’t find their way to it in the first place. We learned that a redesign
                                    would have to start with the nav bar.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 mt-4">
                        <h5 className="section-title">OUR DESIGN</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mb-2">
                        <p>We conducted <strong>competitive research analysis</strong> and found that Hawaii did a good job of clearly stating who is currently eligible for the vaccine. We decided to use a similar approach with
                        our wording and labeling. Georgia had a vaccine phases graphic that was easier to understand.
                        </p>
                        <p>We made a <strong>lo-fi journey map</strong>, beginning with repositioned and relabeled tabs in the nav bar. We included a tab labeled “Sign up for Vaccine” that led directly to the county
                        dropdown, which leads to the sign up form. We brainstormed ideas for the phases tab label, and eventually decided to test “Find Your Phase”.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-4">
                        <div className="csPenPaperImages">
                            <img className="pencilAndPaper" src="../../images/pencilAndPaper.jpg" height="100%" width="100%" alt="Pencil and paper journey map." />
                        </div>
                    </Col>
                    <Col className="col-12 mt-2 pb-5">
                        <center><p><i>Pencil and paper journey map.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6">
                        <div className="csPenPaperImages">
                            <img className="countyJourney" src="../../images/countyJourney.png" height="100%" width="100%" alt="Journey map from county page." />
                        </div>
                    </Col>
                    <Col className="col-12 mt-2 pb-5">
                        <center><p><i>Journey map from county page.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mb-2">
                        <p>We made a <strong>mock-up</strong> of the county page and added a large banner that clearly states who is currently eligible in that county by age and what phase the county is currently in. Eventually, we
                        dicided to include details about the current phases for the county below so the user could quickly understand who was eligible.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6">
                        <div className="csPenPaperImages">
                            <img className="countyMockUp" src="../../images/countyMockUp.png" height="100%" width="100%" alt="Mock up of county page." />
                        </div>
                    </Col>
                    <Col className="col-12 mt-2 pb-5">
                        <center><p><i>Initial Figma mock-up of county page.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mb-2">
                        <p>We changed the labels and the positions of the tabs in the vaccine dropdown in the nav bar, making the first tab the clear choice for signing up.</p>
                        <p>The “Request an Appointment” button would now take the user to the sign up form, where they would enter their information once and submit. The form was also designed to
                            integrate seamlessly with the look and feel of TN.gov, so the user would not be confused by landing at a third party site.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-4 pt-4">
                        <div className="csPenPaperImages">
                            <img className="navBar" src="../../images/navBar.png" height="100%" width="100%" alt="Mock up of new nav bar." />
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 pt-4">
                        <div className="csPenPaperImages">
                            <img className="newForm" src="../../images/newForm.png" height="100%" width="97%" alt="Mock up of new form page." />
                        </div>
                    </Col>
                    <Col className="col-12 mt-2 pb-5">
                        <center><p><i>New county page with new nav tabs expanded and new form.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mb-2">
                        <p>We redesigned the phases graphic and separated the aged based phases from the risk based phases to give clarity to the user.</p>
                        <p>We consolidated News and Data onto a county dashboard page. If a user wanted to see those kinds of details, they would now be able to view them in
                            one clearly labeled place.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-4 pt-4">
                        <div className="csPenPaperImages">
                            <img className="newPhases" src="../../images/newPhases.png" height="100%" width="100%" alt="Mock up of new phases page." />
                        </div>
                    </Col>
                    <Col className="col-12 col-md-4 pt-4">
                        <div className="csPenPaperImages">
                            <img className="countyDashboard" src="../../images/countyDashboard.png" height="100%" width="100%" alt="Mock up of new county dashboard page." />
                        </div>
                    </Col>
                    <Col className="col-12 mt-2 pb-5">
                        <center><p><i>New phases graphic and new county dashboard page.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col className="col-12 col-md-6 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I worked with my team to redefine the scope of our work based on user tests. We used Figma to gather resources and assets, to
                                quickly build visualizations for ideas, and to prototype our design. We brainstormed, discussed, debated, and compromised as a team until we had design consensus. We
                                    empathized with our users, and we approached every question and decision with the user in mind.</strong></p><br></br>
                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>The importance of user testing was again validated. We had a very clear understanding of our users’ pain points. Because of this, we
                                    were able to stay focussed on exactly what our users needed. It was great to experience a design process where every team member put the user first.</strong></p></div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 mt-4">
                        <h5 className="section-title">USER TESTING: ROUND 2</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mb-2">
                        <p>We completed our prototype on the morning of the third day. We were presenting that afternoon, so we had time to conduct a couple of user tests on our design. <strong>Did we make it easier
                            for users to sign up to receive a COVID-19 vaccine?</strong></p>
                        <p>Our first user was a <strong>retired senior citizen</strong>. He <strong>easily</strong> found the “Sign up for Vaccine” tab. He was surprised that the next screen looked almost the same as the home screen. He <strong>quickly</strong> made it
                            to the sign up form. When asked to find the phase for someone else, he was <strong>unsuccessful</strong>. He did not click on the “Find Your Phase” tab.</p>
                        <p>Our next user was a <strong>middle aged musician</strong>. He <strong>immediately</strong> clicked on the “Sign up for Vaccine” tab and was able to <strong>easily</strong> determine he was not eligible. He read the details of the current phases under the county box. He went to
                                the “Find Your Phase” page and looked at the graphic. He <strong>did not understand</strong> it. It was <strong>not clear</strong> to him that age based and risked based phases were independent of one another.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">

                    <Col className="col-12 col-md-8">
                        <div className="csPenPaperImages">
                            <img className="jackScreenShot" src="../../images/jackScreenShot.png" height="100%" width="100%" alt="Screen shot of one of our user tests." />
                        </div>
                    </Col>
                    {/* </div> */}
                    <Col className="col-12 col-md-12 mt-2 pb-5">
                        <center><p><i>User testing our prototype.</i></p></center>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col className="col-12 col-md-6 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">WHAT I DID:</h6>
                                <p className="whatILearnedText"><strong>I observed and asked questions during two user tests of our prototype.</strong></p><br></br>
                                <h6 className="mb-4">WHAT I LEARNED:</h6>
                                <p className="whatILearnedText"><strong>We learned that our design was successful at making it easier for users to sign up for the COVID-19 vaccine, but more work was needed. Our “Find Your Phase” label was still not clear to the user, and the phases graphic was still confusing.</strong></p></div>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-md-center pt-5">
                    <Col className="col-12 mt-4">
                        <h5 className="section-title">FINAL THOUGHTS</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-6 mb-2">
                        <p>I was proud to be a part of this team and of the work we did. We put the user first and provided a successful solution to our challenge statement. Our second round of user tests provided a roadmap for improvements had the project been ongoing.</p>
                        <li>A clearer label for the “Find Your Phase” tab</li>
                        <li>Make the phases graphic easier to understand</li>
                        <li>Differentiate the age based and risk based phases</li>
                        <li>A clear timeline on the graphic</li>
                    </Col>
                    <Row className="justify-content-md-center pt-5">
                        <Col className="col-12 col-md-8 mb-5">
                            <div className="csPenPaperImages">
                                <img className="sideBySide" src="../../images/sideByside.png" height="100%" width="100%" alt="Side by side comparison of original site and our prototype." />
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-5">
                    <Col className="col-12 col-md-8 mt-4">
                        <div className="boxBorder">
                            <div className="knowledgeBox"><h6 className="mb-4">THE LEARNING CONTINUES:</h6>
                                <p className="whatILearnedText"><strong>While we were working on this project, the Covid19.TN.gov site was updated several times.</strong></p>
                                <p className="whatILearnedText"><strong>Some of the changes addressed the same usability issues we were working on. I found it very interesting to observe the changes their team was making and to see that they were clearly getting the same feedback from their users
                                    that we had received from our users.</strong></p>
                                <p className="whatILearnedText"><strong>I continue to watch the site and try to understand the reasoning and possible constraints behind their decisions.</strong></p><br></br>

                            </div>
                        </div>
                    </Col>
                </Row>


            </Container >
        </>

    )
}