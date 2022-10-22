import Home from './pages/Home';
import Login from './pages/Login';

const publicRoutes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
    auth: true,
  },
];

export { publicRoutes };
