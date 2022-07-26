import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Flex, Stack, Hide, Show, useMediaQuery } from '../framework';
import TrackVisibility from 'react-on-screen';
import { TypistEffect } from './deep-guild/typist-effect';


const GradientText = React.memo(({
  text, 
}:{
  text: string; 
}) => {
  const { t } = useTranslation();
  return (
    <Text
      bgGradient='linear(180deg, rgba(11,0,46,1) 0%, rgba(81,0,134,1) 45%, rgba(213,101,0,1) 100%)'
      bgClip='text'
      fontSize='calc(2.5em + 6vmax)'
      fontWeight='black'
      lineHeight='normal'
    >{t(text)}</Text>
  )
}) 

export const MainTasks = React.memo(({scrollDocument}:{scrollDocument?: any}) => {
  const { t } = useTranslation();
  const [max825] = useMediaQuery('(max-width: 825px)');

  return (
      <Flex 
        direction='column' 
        maxW='1620px' 
        textAlign='center'
        p='0 2rem'
        sx={{
          '@media(max-width: 825px)': {
            p: '0 1rem',
          }
        }}  
      >
        <Stack 
          spacing={{sm: '0', md: '2rem'}} 
          direction={{sm: 'column', lg: 'row'}}
          alignItems='center'
          sx={{
            '@media(max-width: 825px)': {
              '& > *:nth-child(2)': {
                mb: '1rem'
              }
            }
          }}
        >
          <GradientText text='studios--main-tasks-main' />
          <Show breakpoint='(max-width: 750px)'>
            <GradientText text='studios--main-tasks-tasks' />
          </Show>
          <TypistEffect text='studios--main-tasks-first' />
        </Stack>
        <Stack spacing={{sm: '0', md: '2rem'}} direction={{sm: 'column', lg: 'row'}} alignItems='center'>
          <TypistEffect text='studios--main-tasks-second' textAlign={max825 ? 'left' : 'right'} />
          <Hide breakpoint='(max-width: 750px)'>
            <GradientText text='studios--main-tasks-tasks' />
          </Hide>
        </Stack>
      </Flex>
  )
})
