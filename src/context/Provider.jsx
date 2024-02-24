import * as React from 'react'

const ProviderContext = React.createContext(null)
const Provider = ({
  children
}) => {
  const [auth, setAuth] = React.useState(false)
  const [name, setName] = React.useState('Eli')
  return (
    <ProviderContext.Provider value={{auth, setAuth, name, setName}}>
      {children}
    </ProviderContext.Provider>
  )
}
export {ProviderContext, Provider}
