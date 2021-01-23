import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from "./Home"
import { NavBar } from "./nav/Nav";
import { Header } from "./main/Header";
import { About } from "./main/About";
import { Process } from "./main/Process";
import { Work } from "./main/Work";
import { TFCaseStudy } from "./caseStudies/TidyFamily";
import { CSNavBar } from './nav/CSNav';
import { Contact } from './main/Contact';
import { Footer } from './main/Footer';
import { VaccineCaseStudy } from './caseStudies/Vaccine';

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
                <Contact />
                <Footer />
            </Route>

            <Route path="/CaseStudies/TidyFamily">
                <CSNavBar />
                <TFCaseStudy />
                <Contact />
                <Footer />
            </Route>

            <Route path="/CaseStudies/Vaccine">
                <CSNavBar />
                <VaccineCaseStudy />
                <Contact />
                <Footer />
            </Route>
        </>
    )
}
