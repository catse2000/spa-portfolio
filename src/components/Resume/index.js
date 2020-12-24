import React from 'react';
import { Link } from "react-router-dom";
function Resume() {
    return (
        <section className="m-4">
            <h2>My Resume</h2>
            <a className="btn" href="https://drive.google.com/file/d/1xKCN4oFHFN4Db1kFUf719zcmKsMYisjl/view?usp=sharing" target="_blank" rel="noopener noreferrer">Downloadable Version</a>
            <div className="accordion accordion-flush">
                <div className="accordion-item">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"><h3>Summary of Qualifications</h3></button>
                    <div id="flush-collapseOne" class="accordion-collapse m-4 show">
                        <ul>
                            <li>5+ Years Graphic Design Experience</li>
                            <li>3+ Years Digital Signage Experience</li>
                            <li>CTS Certified</li>
                            <li>8+ Years in AV Technology performing support, maintenance, setup and breakdown of AV equipment</li>
                            <li>3+ Years presentation and training experience</li>
                        </ul>
                    </div>
                </div>
                <div className="accordion-item">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"><h3>Education</h3></button>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse m-4">
                        <h4>December 2014</h4>
                        <p><span>B.A. IN COMPUTER AND INFORMATION TECHNOLOGIES,</span> SOUTH TEXAS COLLEGE</p>

                        <h4>May 2010</h4>
                        <p><span>A.S. IN COMPUTER MAINTENANCE</span> SOUTH TEXAS COLLEGE</p>
                    </div>
                </div>
                <div className="accordion-item">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"><h3>Experience</h3></button>
                    <div id="flush-collapseThree" class="accordion-collapse collapse m-4">
                        <h4>JUNE 2018 – PRESENT</h4>
                        <h5><span>DIGITAL SIGNAGE and CLASSROOM TECHNOLOGY TRAINING SPECIALIST,</span>SOUTH TEXAS COLLEGE</h5>
                        <br></br>
                        <h4>NOVEMBER 2015 – JUNE 2018</h4>
                        <h5><span>EDUCATIONAL TECHNOLOGIES ASSISTANT II,</span>SOUTH TEXAS COLLEGE</h5>
                        <br></br>
                        <h6>Digital Signage</h6>
                        <ul>
                            <li>Maintain and Manage all Digital Signage hardware and software systems</li>
                            <li>Design Digital Signage installations and provide guidelines and standards to ensure accessibility and uniformity across all five campuses</li>
                            <li>Provide equipment quotes, and coordinate installations for all Digital Signage relative displays and network infrastructures including but not limited to:</li>
                            <li>Maintain Documentation on research, maintenance, equipment, statistics, installations and standard guidelines for Digital Signage</li>
                            <li>Design, program and debug Wayfinding applications for interactive kiosks to be used on campus</li>
                        </ul>

                        <h6>Classroom Training and Proof of Concept Research</h6>
                        <ul>
                            <li>Coordinate and provide equipment training for Proof of Concept rooms with new and existing Faculty</li>
                            <li>Coordinate equipment upgrades and classroom maintenance for Proof of Concept rooms</li>
                            <li>Meet with Faculty and users to gather and document user experiences and suggestions</li>
                            <li>Coordinate and provide training on other media classrooms and equipment as requested</li>
                            <li>Assist in the Design of new Media classrooms by providing user experiences from Proof of Concept rooms in order to improve the overall classroom functionality</li>
                        </ul>

                        <h6>Technology Research and Development</h6>
                        <ul>
                            <li>Research, Evaluate and Document new technologies as requested for educational and campus</li>
                            <li>Provide recommendations on new technologies</li>
                            <li>Test new technologies to determine operability, security, long-time maintenance and support</li>
                            <li>Provide quotes for new technology after evaluation and approval</li>
                        </ul>

                        <h6>Software Administration</h6>
                        <ul>
                            <li>Research and select educational software to enhance classroom curriculum</li>
                            <li>Provide licensing and record usage</li>
                            <li>Advise and train Faculty and Staff on software</li>
                        </ul>

                        <h6>Other</h6>
                        <ul>
                            <li>Maintain and update the Educational Technologies Website</li>
                        </ul>

                        <h4>MAY 2010 – NOVEMBER 2015</h4>
                        <h5><span>EDUCATIONAL TECHNOLOGIES ASSISTANT I,</span> SOUTH TEXAS COLLEGE</h5>
                        <ul>
                            <li>Use the Webcheckout Online Database to create and update asset information, create checkouts, and create reservations for upcoming events and requests</li>
                            <li>Inventory, organize and maintain AV equipment in storage rooms across the Pecan Campus</li>
                            <li>Inventory AV equipment at all 5 campuses annually</li>
                            <li>Compile and edit inventory reports</li>
                            <li>Update equipment logs and assisted in maintaining documentation on all equipment received from Shipping and Receiving, or transferred to Educational Technologies from other departments</li>
                            <li>Update Banner and perform Workflows for transferring or moving equipment resources</li>
                            <li>Receive and tag new equipment</li>
                            <li>Obtain quotes for the purchase of new equipment</li>
                            <li>Setup and breakdown various AV equipment (Data Projectors, Document Cameras, Laptops, Computers, PA Systems, etc)</li>
                            <li>Troubleshoot and support classrooms, conference rooms, and special venues as needed</li>
                            <li>Assist with delivery, set up and break down of equipment for classrooms and special venues as needed</li>
                        </ul>
                    </div>
                </div>
                <div className="accordion-item">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour"><h3>Accomplishments</h3></button>
                    <div id="flush-collapseFour" class="accordion-collapse collapse m-4">
                        <ul>
                            <li>Assisted in researching, designing, and coordinating the installation of the current Digital Signage infrastructure.</li>
                            <li>Assisted in researching and determining the new Digital Signage software platform 22Miles to replace the existing Four Winds platform</li>
                            <li>Created custom power point template for Educational Technologies</li>
                            <li>Provided session on “South Texas College Digital Signage Standards and Installations” at CCUMC (Consortium of College and University Media Centers) in 2017</li>
                            <li>Became Extron Associate Certified in 2017</li>
                            <li>Became CTS Certified (Certified Technology Specialist) at Infocomm Conference 2017</li>
                            <li>Became DSCE (Digital Signage Certified Expert) and DSME (Digital Content and Media Expert) certified at the Digital Signage Expo in 2015</li>
                            <li>2011 - Jag Award Recipient</li>
                            <li>2011 - Designed Towel and temporary Tattoo for CCUMC</li>
                            <li>Maintained STC CCUMC website in preparation for upcoming CCUMC conference in 2011</li>
                        </ul>
                    </div>
                </div>
                <div className="accordion-item">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive"><h3>Certifications and Skills</h3></button>
                    <div id="flush-collapseFive" class="accordion-collapse collapse m-4">
                        <ul>
                            <li>2017 – Extron Associate Certifications</li>
                            <li>2017 – CTS Certification (Certified Technology Specialist)</li>
                            <li>2015 – DSCE Certification (Digital Signage Certified Expert)</li>
                            <li>2015 – DCME Certification (Digital Content Media Expert)</li>
                            <li>2014 – Customer Service Certification</li>
                            <li>Adobe Creative Suite:</li>
                            <ul>
                                <li>Photoshop (10+ years)</li>
                                <li>Illustrator (2+ years)</li>
                                <li>InDesign (2+ years)</li>
                                <li>Premiere Pro (2+ years)</li>
                            </ul>
                            <li>Microsoft Office 2016</li>
                            <li>Typing Speed: 100WPM</li>
                        </ul>
                    </div>
                </div>
                <div className="accordion-item">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix"><h3>Other Achievements</h3></button>
                    <div id="flush-collapseSix" class="accordion-collapse collapse m-4">
                        <ul>
                            <li>2013 – Designed Book Cover for writer Juan Ochoa (English Faculty at South Texas College) labeled “Mariguano”</li>
                            <li>2010 – Assisted in design of Official Banner used by the Office of the Vice President for Information Services and Planning at South Texas College</li>
                            <li>2009 – Assisted in the design of the Logo for the South Texas College Institutional Effectiveness and Assessment Department</li>
                            <li>2008 – Collaborated with Public Relations at South Texas College to provide content for a commercial for the Emergency Alert System</li>
                            <li>2008 – Named “Student of the Week” at South Texas College</li>
                            <li>2005/2006 – National Art Honor Society Member</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;