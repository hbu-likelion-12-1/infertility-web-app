import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import SurveyStep1 from './pages/Survey/SurveyStep1';
import SurveyStep2 from './pages/Survey/SurveyStep2';
import SurveyStep3 from './pages/Survey/SurveyStep3';
import SurveyStep4 from "./pages/Survey/SurveyStep4";
import SurveyStep5 from "./pages/Survey/SurveyStep5";
import SurveyStep6 from "./pages/Survey/SurveyStep6";
import SurveyStep7 from "./pages/Survey/SurveyStep7";
import SurveyStep8 from "./pages/Survey/SurveyStep8";
import SurveyStep9 from "./pages/Survey/SurveyStep9";
import SurveyStep10 from "./pages/Survey/SurveyStep10";
import SurveyStep11 from "./pages/Survey/SurveyStepDepression.tsx";
import SurveyCompletion from './pages/Survey/SurveyCompletion';
import Result from './pages/Result';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navbar from './components/layout/Navbar';
// import Footer from './components/common/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SurveyResults from './pages/Survey/SurveyResults.tsx';
import UserSettings from './pages/UserSettings';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';


const AppLayout = () => {
    const location = useLocation();
    const hideNavbarPaths = [
        '/',
        '/splash',
        '/onboarding',
        '/login',
        '/survey/intro',
        '/survey/step1',
        '/survey/step2',
        '/survey/step3',
        '/survey/step4',
        '/survey/step5',
        '/survey/step6',
        '/survey/step7',
        '/survey/step8',
        '/survey/step9',
        '/survey/step10',
        '/survey/completion',
    ];
    const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

    return (
        <>
            {!shouldHideNavbar && <Navbar/>}
            <Routes>
                <Route path="/" element={<Splash/>}/>
                <Route path="/onboarding" element={<Onboarding/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/survey/results" element={<SurveyResults/>}/>
                <Route path="/settings" element={<UserSettings/>}/>
                <Route path="/survey/step1" element={<SurveyStep1/>}/>
                <Route path="/survey/step2" element={<SurveyStep2/>}/>
                <Route path="/survey/step3" element={<SurveyStep3/>}/>
                <Route path="/survey/step4" element={<SurveyStep4/>}/>
                <Route path="/survey/step5" element={<SurveyStep5/>}/>
                <Route path="/survey/step6" element={<SurveyStep6/>}/>
                <Route path="/survey/step7" element={<SurveyStep7/>}/>
                <Route path="/survey/step8" element={<SurveyStep8/>}/>
                <Route path="/survey/step9" element={<SurveyStep9/>}/>
                <Route path="/survey/step10" element={<SurveyStep10/>}/>
                <Route path="/survey/step11" element={<SurveyStep11/>}/>
                <Route path="/survey/completion" element={<SurveyCompletion/>}/>
                <Route path="/result" element={<Result/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
            {/*{!shouldHideNavbar && <Footer />}*/}
        </>
    );
}

function App() {
    return (
        <Router>
            <AppLayout/>
        </Router>
    );
}

export default App;
