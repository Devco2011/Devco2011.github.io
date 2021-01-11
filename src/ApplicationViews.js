import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from "./Home"
import { NavBar } from "./nav/Nav";
import { Header } from "./main/Header";
import { About } from "./main/About";
import { Process } from "./main/Process";
import { Work } from "./main/Work";
import { TFCaseStudy } from "./caseStudies/TidyFamily";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/CaseStudies/TidyFamily">
                <TFCaseStudy />
            </Route>
        </>
    )
}
