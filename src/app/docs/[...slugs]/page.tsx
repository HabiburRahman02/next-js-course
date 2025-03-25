import React from 'react'

export default function DocsPage({params}:{
    params: {
        slugs: string[];
    }
}) {

   if(params.slugs.length === 2){
    return <h1>View Docs for First params: {params.slugs[0]} and second params {params.slugs[1]}</h1>
   }
   if(params.slugs.length === 1){
    return <h1>View Docs for First params{params.slugs[0]}</h1>
   }
  return (
    <div>DocsPage {params.slugs[0]}</div>
  )
}
