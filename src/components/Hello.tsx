import React from 'react'

interface HelloProps {
    message:string;
}

const Hello:React.FunctionComponent<HelloProps> = (props)=>{
return <h1>{props.message}</h1>
}
Hello.defaultProps={
    message:'自在轻安'
}
export default Hello;