import React from 'react'
import { FunctionComponent } from 'react'

interface ILoadingProps {
    loading: boolean;
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
    const {loading} = props;
    if(loading){
        return <>"Loading..."</>
    }
    return (
        <>
        {props.loading}
        </>
    )
}

export default Loading
