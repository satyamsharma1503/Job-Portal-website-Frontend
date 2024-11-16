import './App.css';
import '@mantine/tiptap/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/dates/styles.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalent from './Pages/FindTalent';
import TalentProfilePage from './Pages/TalentProfilePage';
import UploadJob from './Pages/UploadJob';
import JobDescriptionPage from './Pages/JobDescriptionPage';
import ApplyJobs from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SingUpPage from './Pages/SingUpPage';
import Login from './SingUpLogin/Login';
import ProfilePage from './Pages/ProfilePage';

function App() {
  const theme = createTheme({
    primaryColor:'brightSun',
    primaryShade:4,
    colors: {
      'brightSun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902',
      ],

      'mineShaft': [
        '#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545', '#3d3d3d', '#2d2d2d',]
            },
            fontFamily:"poppins , sans-serif"
  })
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
    <BrowserRouter>
    <div className='relative'>
    <Header/>
    <Routes>
      <Route path='/find-jobs' element={<FindJobs/>}/>
      <Route path='/find-talent' element={<FindTalent/>}/>
      <Route path='/upload-jobs' element={<UploadJob/>}/>
      <Route path='/jobs' element={<JobDescriptionPage/>}/>
      <Route path='/company' element={<CompanyPage/>}/>
      <Route path='/apply-jobs' element={<ApplyJobs/>}/>
      <Route path='/posted-job' element={<PostedJobPage/>}/>
      <Route path='/job-history' element={<JobHistoryPage/>}/>
      <Route path='/talent-profile' element={<TalentProfilePage/>}/>
      <Route path='/login' element={<SingUpPage/>}/>
      <Route path='/signup' element={<SingUpPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='*' element={<HomePage/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
