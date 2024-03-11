import { createBrowserRouter } from 'react-router-dom'
import Cricket from '../Cricket'
import ContactUs from '../ContactUs'
import MyAccount from '../MyAccount'
import Match from '../Match'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Cricket/>
  },
  {
    path: '/cricket',
    element: <Cricket/>

  },
  {
    path: '/contact',
    element: <ContactUs/>

  },
  {
    path: '/myaccount',
    element: <MyAccount/>

  },
  {
    path: '/match',
    element: <Match/>

  }
])
