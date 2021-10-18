import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import ServiceProvider from "./context/ServicesProvider";
import About from "./Pages/About/About";
import EnrollSuccess from "./Pages/EnrollSuccess/EnrollSuccess";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Services from "./Pages/Services/Services";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <ServiceProvider>
                    <Router>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/services">
                                <Services />
                            </Route>
                            <Route path="/service-details/:service_id">
                                <ServiceDetails />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/signup">
                                <SignUp />
                            </Route>
                            <Route path="/enroll-success">
                                <EnrollSuccess />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </Router>
                </ServiceProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
