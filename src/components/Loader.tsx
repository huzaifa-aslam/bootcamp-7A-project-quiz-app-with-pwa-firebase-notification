import React,{Suspense} from 'react'
// const Image=React.lazy(()=>import("./download.png"))
export const Loader = () => {
    return (
        <div>
            <Suspense fallback="<div>Loading...</div>">

            </Suspense>
        </div>
    )
}
