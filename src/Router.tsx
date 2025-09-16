import { createBrowserRouter } from 'react-router';
import { PageLayout } from './pages/PageLayout';
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { JobDetailsPage } from './pages/JobDetailsPage';
import { ErrorElement } from './pages/ErrorElement';
import { jobsLoader } from './loaders/jobsLoader';
import { jobLoader } from './loaders/jobLoader';

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorElement />,
        element: <PageLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/jobs",
                loader: jobsLoader,
                element: <JobsPage />,
            },
            {
                path: "/jobs/:id",
                loader: jobLoader,
                element: <JobDetailsPage />,
            }
        ]
    },

])