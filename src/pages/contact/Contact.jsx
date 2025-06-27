import ContactItem from '@/components/ContactItem/ContactItem'
import HeroShop from '@/components/heroShop/HeroShop'
import Support from '@/components/support/Support'
import React from 'react'

const Contact = () => {
  return (
    <>
     <HeroShop title={"Contact"}/>
      <ContactItem/>
     <Support/>
    </>
  )
}

export default Contact