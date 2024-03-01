import { Helmet } from 'react-helmet-async'

export function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Helmet title="Sign In" />
      <h1>Sign In</h1>
    </div>
  )
}
