import React from 'react';
import { Text, Box, usePrefersReducedMotion, Wrap, WrapItem, Center } from '../../../framework';
import { MotionBox } from '../../round';
import { anim1, anim2, anim3, anim4, anim5, anim6, anim7, anim8 } from './keyframes';

export const FlyingWords = React.memo<any>(() => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation1 = prefersReducedMotion
    ? undefined
    : `${anim1} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation2 = prefersReducedMotion
    ? undefined
    : `${anim2} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation3 = prefersReducedMotion
    ? undefined
    : `${anim3} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation4 = prefersReducedMotion
    ? undefined
    : `${anim4} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation5 = prefersReducedMotion
    ? undefined
    : `${anim5} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation6 = prefersReducedMotion
    ? undefined
    : `${anim6} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation7 = prefersReducedMotion
    ? undefined
    : `${anim7} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  const animation8 = prefersReducedMotion
    ? undefined
    : `${anim8} 4s cubic-bezier(0.470,0.000,0.745,0.715) 1s 1`;
  

  return (
    <Wrap 
      maxW='25.3rem' 
      width='26rem' 
      justify={{sm: 'center', md: 'center'}}
      sx={{
        '@media(max-width: 380px)': {
          maxW: '21.3rem'
        },
      }}
    >
      <WrapItem>
        <MotionBox 
          w='max' 
          h='max'
          animate={{
            rotate: -2.5,
          }}
          transition={{ type: "spring", damping: 70, repeat: Infinity, repeatType: "reverse" }}
        >
          <Text fontSize={{sm: '3xl', md: '4xl'}} fontWeight='bold' animation={animation1}>Сообщество</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem>
        <MotionBox 
          w='23rem' 
          h='2.1rem' 
          sx={{
            '@media(max-width: 380px)': {
              w: '18rem'
            }
          }}
          animate={{
            rotate: 1.5,
          }}
          transition={{ delay: 5, duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <Text align='right' fontSize={{sm: '2xl', md: '3xl'}} lineHeight='normal' animation={animation2}>последователей</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem>
        <MotionBox 
          w='max' 
          h='max' 
          alignSelf='center'
          animate={{
            rotate: -2,
          }}
          transition={{ delay: 5, duration: 2, repeat: Infinity, repeatType: "mirror" }}
        >
          <Text fontSize={{sm: '1xl', md: '2xl'}} animation={animation3}>культа</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem>
        <MotionBox 
          w='max' 
          h='max' 
          ml='2' 
          mr='2'
          sx={{
            '@media(max-width: 325px)': {
              ml: '0',
              mr: '0',
            }
          }}
          animate={{ scale: 1.05 }}
          transition={{ type: "spring", damping: 40, repeat: Infinity, repeatType: "reverse" }}
        >
          <Text fontSize={{sm: '4xl', md: '5xl'}} fontWeight='bold' lineHeight='normal' animation={animation4}>глубины</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem>
        <MotionBox 
          w='max' 
          h='max' 
          alignSelf='center'
          animate={{
            rotate: 2.5,
            // scale: 1.15
          }}
          transition={{ type: "spring", damping: 40, repeat: Infinity, repeatType: "reverse" }}
        >
          <Text fontSize={{sm: '1xl', md: '2xl'}} animation={animation5}>вокруг</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem>
        <MotionBox 
          w='max' 
          h='3rem'
          animate={{
            rotate: 1.5,
          }}
          transition={{ delay: 5, duration: 2, repeat: Infinity, repeatType: "mirror" }}
        >
          <Text fontSize={{sm: '2xl', md: '3xl'}} lineHeight='normal' animation={animation6}>продуктов</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem h='3rem' alignItems='flex-end'>
        <MotionBox 
          w='14rem' 
          h='max'
          sx={{
            '@media(max-width: 380px)': {
              w: '11rem'
            },
            '@media(max-width: 325px)': {
              w: '9rem'
            }
          }}
          align='right'
          animate={{
            rotate: -1,
          }}
          transition={{ delay: 5, duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <Text fontSize={{sm: '2xl', md: '3xl'}} lineHeight='normal' animation={animation7}>экосистемы</Text>
        </MotionBox>
      </WrapItem>
      <WrapItem>
        <MotionBox 
          w='max' 
          h='max'
          animate={{
            rotate: 2,
          }}
          transition={{ type: "spring", damping: 65, repeat: Infinity, repeatType: "mirror" }}
        >
          <Text fontSize={{sm: '3xl', md: '4xl'}} fontWeight='bold' animation={animation8}>Deep.Foundation</Text>
        </MotionBox>
      </WrapItem>
    </Wrap>
  )
})