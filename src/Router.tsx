import { createBrowserRouter } from 'react-router';
import { PageLayout } from './pages/PageLayout';
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { JobDetailsPage } from './pages/JobDetailsPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/jobs",
                element: <JobsPage />,
            },
            {
                path: "/jobs/:id",
                element: <JobDetailsPage />,
            }
        ]
    },

])