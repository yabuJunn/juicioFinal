import './index.css'

import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { PointsProvider } from "../src/context/pointsContext"

const router = createHashRouter([
  ...routes
]);



createRoot(document.getElementById('root')!).render(
  <PointsProvider>
    <RouterProvider router={router} />
  </PointsProvider>
)
