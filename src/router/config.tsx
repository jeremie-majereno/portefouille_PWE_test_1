import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const PortfolioPage = lazy(() => import('../pages/portfolio/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const ProjectDetailPage = lazy(() => import('../pages/portfolio/project-detail/page'));
const ServiceDetailPage = lazy(() => import('../pages/services/service-detail/page'));
const AdminPage = lazy(() => import('../pages/admin/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/services/:slug',
    element: <ServiceDetailPage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
  {
    path: '/portfolio/:id',
    element: <ProjectDetailPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
