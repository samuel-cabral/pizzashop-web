import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Helmet title="Dashboard" />
      <h1>Dashboard</h1>
    </div>
  )
}
