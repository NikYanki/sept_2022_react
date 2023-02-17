import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequiereLayout, MainLayout} from "./layouts";
import {CarsPageComponent, LoginPageComponent, RegisterPageComponent} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"cars"}/>}/>

                <Route element={<AuthRequiereLayout/>}>
                    <Route path={"cars"} element={<CarsPageComponent/>}/>
                </Route>

                <Route path={"login"} element={<LoginPageComponent/>}/>
                <Route path={"register"} element={<RegisterPageComponent/>}/>

            </Route>
        </Routes>
    );
};

export {App};
