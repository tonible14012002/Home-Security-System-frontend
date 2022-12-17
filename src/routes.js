import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDetails from './pages/UserDetails';
import UserManager from './pages/UserManager';

const publicRoutes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'admin',
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
  {
    path: 'user-management/:status',
    component: UserManager,
  },
  {
    path: 'user-details/:id',
    component: UserDetails,
  }, 
];

export { publicRoutes };
