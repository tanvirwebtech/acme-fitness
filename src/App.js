import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import ServiceProvider from "./context/ServicesProvider";
import About from "./Pages/About/About";
import EnrollConfirm from "./Pages/EnrollConfirm/EnrollConfirm";
import EnrollSuccess from "./Pages/EnrollSuccess/EnrollSuccess";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MemberShip from "./Pages/MemberShip/MemberShip";
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
                            <PrivateRoute path="/service-details/:service_id">
                                <ServiceDetails />
                            </PrivateRoute>
                            <PrivateRoute path="/enroll-confirm">
                                <EnrollConfirm />
                            </PrivateRoute>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/signup">
                                <SignUp />
                            </Route>
                            <Route path="/get_membership">
                                <MemberShip />
                            </Route>
                            <Route path="/enroll-success">
                                <EnrollSuccess />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                        <Footer />
                    </Router>
                </ServiceProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
