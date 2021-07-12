import
{
  LockOpen,
  Lock,
  People,
  Dashboard,
  Chat,
} from '@material-ui/icons';

import LoginPage from './views/Pages/Login/LoginPage';
import DashboardPage from './views/Dashboard/DashboardPage';
import RegisterPage from './views/Pages/RegisterPage';
import UsersPage from './views/Users/UsersPage';
import ChatPage from './views/Chat/ChatPage';

const routes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    name: 'Users',
    path: '/users',
    icon: People,
    component: UsersPage,
    layout: '/admin',
  },
  {
    name: 'Chat',
    path: '/chat',
    icon: Chat,
    component: ChatPage,
    layout: '/admin',
  },
  {
    name: 'Login',
    path: '/login',
    icon: LockOpen,
    component: LoginPage,
    layout: '/auth',
  },
  {
    name: 'Register',
    path: '/register',
    icon: Lock,
    component: RegisterPage,
    layout: '/auth',
  },
];

export default routes;

export type routeTypes = typeof routes;
