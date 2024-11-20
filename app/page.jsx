import React from 'react'
import Container from '@/app/component/layers/Container'
import BredCumb from '@/app/component/layers/BredCumb'

const page = () => {
  return (
    <div>
      <Container>
        Home Page
        <div className="bg-demo h-[20vh] bg-no-repeat bg-contain"></div>
        <BredCumb/>
      </Container>
    </div>
  )
}

export default page