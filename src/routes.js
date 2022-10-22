import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const publicRoutes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/admin',
    component: Admin,
  },
  {
    path: 'login',
    component: Login,
    auth: true,
  },
  {
    path: 'register',
    component: Register,
    auth: true,
  },
];

export { publicRoutes };
