import React from 'react'
import routes from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import '@fontsource-variable/cairo';
export default function App() {

  return (
    <div dir='rtl'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={routes} />
    </div>
  )
}
