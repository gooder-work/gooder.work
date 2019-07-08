import { createContext } from 'react'


export const ResponsesContext = createContext({
  responses: {} as { [endpoint: string]: any },
})
