import Admin from './pages/Admin';
import Chat from './pages/Chat';
import CommingSoon from './pages/CommingSoon';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDetails from './pages/UserDetails';
import UserManager from './pages/UserManager';
import WaitingAcception from './pages/WaitingAcception';

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
    path: 'waiting',
    component: WaitingAcception,
    auth:true
  },
  {
    path: 'messages/:chatId',
    component: Chat,
  },
  {
    path: 'messages',
    component: Chat,
  },
  {
    path: 'settings',
    component: CommingSoon,
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
