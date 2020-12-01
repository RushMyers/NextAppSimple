import React from 'react'
import useSWR from 'swr'

const MyPageDetail = (props) => {
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR('/api/hello', fetcher)
  console.log(data)
  if (error) {
    console.log(error)
  }
  if (!data) return <div>....loading</div>
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
    </div>
  )
}

export default MyPageDetail
