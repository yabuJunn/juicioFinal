import './index.css'

import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';

const router = createHashRouter([
  ...routes
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
