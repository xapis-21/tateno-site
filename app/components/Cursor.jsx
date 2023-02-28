'use client'
import dynamic from 'next/dynamic'
import { Cursor } from 'react-creative-cursor'
import 'react-creative-cursor/dist/styles.css'
import AnimatedCursor from 'react-animated-cursor'

const TatCursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={4}
        outerSize={25}
        innerScale={1}
        outerScale={1.8}
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
          'button',
          '.link',
          '.photo'
        ]}
      />
    </>
  )
}

export default TatCursor
