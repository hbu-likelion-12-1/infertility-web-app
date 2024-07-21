import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SurveyStep1 from './pages/Survey/SurveyStep1';
import SurveyStep2 from './pages/Survey/SurveyStep2';
import SurveyStep3 from './pages/Survey/SurveyStep3';
import SurveyCompletion from './pages/Survey/SurveyCompletion';
import Result from './pages/Result';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navbar from './components/layout/Navbar';
import Footer from './components/common/Footer';
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
        '/survey/completion',
    ];
    const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

    return (
        <>
            {!shouldHideNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/survey/results" element={<SurveyResults />} />
                <Route path="/settings" element={<UserSettings />} />
                <Route path="/survey/step1" element={<SurveyStep1 />} />
                <Route path="/survey/step2" element={<SurveyStep2 />} />
                <Route path="/survey/step3" element={<SurveyStep3 />} />
                <Route path="/survey/completion" element={<SurveyCompletion />} />
                <Route path="/result" element={<Result />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
            {!shouldHideNavbar && <Footer />}
        </>
    );
}

function App() {
    return (
        <Router>
            <AppLayout />
        </Router>
    );
}

export default App;
