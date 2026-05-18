import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, RootRoute, Route, createRouter } from '@tanstack/react-router'
import RootComponent from './routes/__root'
import IndexComponent from './routes/index'
import './styles.css'

// Root route
const rootRoute = new RootRoute({
  component: RootComponent,
})

// Index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexComponent,
})

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute])

// Create router
const router = createRouter({ routeTree })

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router router={router} />
  </React.StrictMode>
)
