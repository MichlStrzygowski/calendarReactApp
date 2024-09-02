import { NavLink, Route, Routes } from 'react-router-dom'
import Calendar from './pages/Calendar'
import Event from './pages/Event'
import AddEvent from './pages/AddEvent'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
//import ListComponents from './components/ListComponents'

function App() {
  const { t, i18n } = useTranslation();
  const lng: string = navigator.language.split('-')[0];
  useEffect(() => {
    i18n.changeLanguage(lng);
  }
  , [i18n]);

  return (
    <>
    <h1>{lng}</h1>
    <nav>
      <ul>
        <li><NavLink to='/'>{t('calendar')}</NavLink></li>
        <li><NavLink to='/add'>Add Event</NavLink></li>
     
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Calendar/> } />
      <Route path='/event/:id' element={<Event/> } />
      <Route path='/add' element={<AddEvent/> } />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
    </>
  )
}

export default App
