import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SurveyStep1 from './pages/Survey/SurveyStep1';
import SurveyStep2 from './pages/Survey/SurveyStep2';
import SurveyStep3 from './pages/Survey/SurveyStep3';
import SurveyStep4 from './pages/Survey/SurveyStep4';
import SurveyStep5 from './pages/Survey/SurveyStep5';
import SurveyStep6 from './pages/Survey/SurveyStep6';
import SurveyStep7 from './pages/Survey/SurveyStep7';
import SurveyStep8 from './pages/Survey/SurveyStep8';
import SurveyStep9 from './pages/Survey/SurveyStep9';
import SurveyStep10 from './pages/Survey/SurveyStep10';
import Depression from './pages/Survey/SurveyDepression';
import DepressionTotal from './pages/Survey/SurveyDepressionTotal';
import Result from './pages/Result';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Splash from './pages/Splash';
import PartnerConnectionShare from './pages/PartnerConnectionShare';
import PartnerConnectionInput from './pages/PartnerConnectionInput';
import AppLayout from './components/layout/Layout';
import Onboarding1 from "./pages/Onborading/Onboarding1";
import Onboarding2 from "./pages/Onborading/Onboarding2";
import Onboarding3 from "./pages/Onborading/Onboarding3";
import Onboarding4 from "./pages/Onborading/Onboarding4";


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
                <Route path="/survey/depression" element={<Depression />} />
                <Route path="/survey/depression/total" element={<DepressionTotal />} />
                <Route path="/partner" element={<PartnerConnectionShare />} />
                <Route path="/partner/connection-input" element={<PartnerConnectionInput />} />
                <Route path="/partner" element={<PartnerConnectionShare />} />
                <Route path="/partner/connection-input" element={<PartnerConnectionInput />} />
                <Route path="/survey/step1" element={<SurveyStep1 />} />
                <Route path="/survey/step2" element={<SurveyStep2 />} />
                <Route path="/survey/step3" element={<SurveyStep3 />} />
                <Route path="/survey/step4" element={<SurveyStep4 />} />
                <Route path="/survey/step5" element={<SurveyStep5 />} />
                <Route path="/survey/step6" element={<SurveyStep6 />} />
                <Route path="/survey/step7" element={<SurveyStep7 />} />
                <Route path="/survey/step8" element={<SurveyStep8 />} />
                <Route path="/survey/step9" element={<SurveyStep9 />} />
                <Route path="/survey/step10" element={<SurveyStep10 />} />
                <Route path="/onboarding1" element={<Onboarding1 />} />
                <Route path="/onboarding2" element={<Onboarding2 />} />
                <Route path="/onboarding3" element={<Onboarding3 />} />
                <Route path="/onboarding4" element={<Onboarding4 />} />
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
