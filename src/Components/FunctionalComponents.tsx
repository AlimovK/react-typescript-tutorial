import React, { FC } from 'react';

interface Props {
  title:string
  children:React.ReactNode
}
const Title:FC<Props> =({title,children})=><div>{title}{children}</div>

const FunctionalComponents:FC = () =><Title title={'Functional component'}>
  <h1>React children</h1>
</Title>
export default FunctionalComponents

