'use client'
import dynamic from 'next/dynamic'
import { Cursor } from 'react-creative-cursor'
import 'react-creative-cursor/dist/styles.css'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

const TatCursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={4}
        outerSize={35}
        innerScale={1}
        outerScale={2.5}
        outerAlpha={0}
        outerStyle={{
          backgroundColor: '#EEF0F2',
          mixBlendMode: 'exclusion',
        }}
        innerStyle={{
          backgroundColor: '#1E1E1E',
        }}
        hasBlendMode={true}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          '.photo'
        ]}
      />
    </>
  )
}

export default TatCursor
