// components/Experience.js

import React from 'react';

const Experience = () => {
    const openResume = () => {
        const pdfPath = process.env.PUBLIC_URL + '/pdf/Resume.pdf';
        window.open(pdfPath, '_blank');
    };

    return (
        <section id="experience" className="mb-24 scroll-mt-24">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-quaternary">Experience</h2>
                <ol>
                    <div className="mb-4">
                        <div className="grid sm:grid-cols-8 sm:gap-8 md:gap-4 p-4 rounded-lg hover:bg-secondary hover:bg-opacity-20">
                            <header className="sm:col-span-2">Oct 2022 – present</header>
                            <div className="sm:col-span-6 text-left">
                                <p className="text-xl font-bold">Cognizant Technology Solutions</p>
                                <p className="text-lg font-bold">Software Engineer</p>
                                <p className="text-sm font-normal my-2">
                                    Developed and maintained multiple responsive websites using HTML, CSS, and React for one of the
                                    leading Timeshare Exchange Companies of North America.Collaborated with designers and backend developers
                                    to implement new features and functionalities.Created reusable components and templates using React, HTML5
                                    & CSS.Setup of TDD for react applications using Jest & Gulp.
                                </p>
                                <ul className="flex">
                                    <li className="border border-white rounded-xl p-2 m-3">React</li>
                                    <li className="border border-white rounded-xl p-2 m-3">Redux</li>
                                    <li className="border border-white rounded-xl p-2 m-3">Tailwind</li>
                                    <li className="border border-white rounded-xl p-2 m-3">JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="grid sm:grid-cols-8 sm:gap-8 md:gap-4 p-4 rounded-lg hover:bg-secondary hover:bg-opacity-20">
                            <header className="sm:col-span-2">Aug 2021 – Sep 2022</header>
                            <div className="sm:col-span-6 text-left">
                                <p className="text-xl font-bold">Cognizant Technology Solutions</p>
                                <p className="text-lg font-bold">Jr. Software Engineer</p>
                                <p className="text-sm font-normal my-2">
                                    Developed UI for one of the leading Vacation Ownership Companies of North America using jQuery,
                                    HTML5 & CSS. Helped in the UI design for certain sections of the application. Provided technical
                                    support and troubleshooting for website issues.
                                </p>
                                <ul className="flex">
                                    <li className="border border-white rounded-xl p-2 m-3">jQuery</li>
                                    <li className="border border-white rounded-xl p-2 m-3">HTML</li>
                                    <li className="border border-white rounded-xl p-2 m-3">CSS</li>
                                    <li className="border border-white rounded-xl p-2 m-3">JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="grid sm:grid-cols-8 sm:gap-8 md:gap-4 p-4 rounded-lg hover:bg-secondary hover:bg-opacity-20">
                            <header className="sm:col-span-2">Aug 2020 – Jul 2021</header>
                            <div className="sm:col-span-6 text-left">
                                <p className="text-xl font-bold">Cognizant Technology Solutions</p>
                                <p className="text-lg font-bold">Programmer Analyst Trainee</p>
                                <p className="text-sm font-normal my-2">
                                    Worked as a junior UI resource for one of the largest real-estate companies in North America.
                                    Developed the initial wireframe with the Client Team.
                                    Development of the prototype as per client direction.
                                    Development of the actual product using Salesforce(LWC), HTML5 & CSS.
                                </p>
                                <ul className="flex">
                                    <li className="border border-white rounded-xl p-2 m-3">Salesforce(LWC)</li>
                                    <li className="border border-white rounded-xl p-2 m-3">HTML</li>
                                    <li className="border border-white rounded-xl p-2 m-3">CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ol>
                <div className="text-left mt-12">
                    <button onClick={openResume} className="border-none text-lg font-semibold hover:text-tertiary">
                        View Full Résumé
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Experience;
