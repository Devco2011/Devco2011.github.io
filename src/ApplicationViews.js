import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from "./Home"
import { TFCaseStudy } from "./caseStudies/TidyFamily";
import { CSNavBar } from './nav/CSNav';
import { Footer } from './main/Footer';
import { VaccineCaseStudy } from './caseStudies/Vaccine';

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
                <Footer />
            </Route>

            <Route path="/CaseStudies/TidyFamily">
                <CSNavBar />
                <TFCaseStudy />
                <Footer />
            </Route>

            <Route path="/CaseStudies/Vaccine">
                <CSNavBar />
                <VaccineCaseStudy />
                <Footer />
            </Route>
        </>
    )
}
