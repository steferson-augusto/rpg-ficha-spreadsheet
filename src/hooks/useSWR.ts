/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr'

export default function useSwr<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await fetch(url)
    const data = await response.json()

    return data
  })

  return { data, error, loading: !error && !data, mutate }
}
