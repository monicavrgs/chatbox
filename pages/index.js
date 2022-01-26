import appConfig from '../config.json'
import { TextField, Text, Box, Button, Image } from '@skynexui/components';
import React, { useState } from 'react';
import { useRouter } from 'next/router'

// function Box(props){
//   const Tag = props.tag
//   return(
//     <Tag>
//       {props.children}
//     </Tag>
//   )
// }

function Title(props){
    const Tag = props.tag || 'h1'
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag}{
                    color: ${appConfig.theme.colors.neutrals['050']};
                }
            `}</style>
        </>
    )
}

function HomePage() {
  const [username, SetUsername] = React.useState()
  const roteamento = useRouter()  

    return (
      <>
        <Box styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `${appConfig.theme.colors.primary[500]}`
        }}>
          <Box styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: `${appConfig.theme.colors.neutrals[500]}`,
            width: '100%',
            maxWidth: '700px',
            borderRadius: '5px',
            padding: '25px'
          }}>
            <Box tag='form' 
              onSubmit={function (event) {
                event.preventDefault()
                // window.location.href = '/chat'
                roteamento.push('/chat')
              }}
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
              }}
            >
                  <Title>Boas vindas de volta</Title>
                  <Text styleSheet={{
                    color: appConfig.theme.colors.neutrals['050'], 
                  }}>{appConfig.name}</Text>

                  <TextField 
                    onChange={
                      (event) => {
                        const inputValue = event.target.value
                        SetUsername(inputValue) 
                      }
                    }

                    styleSheet={{
                      display: 'flex',
                      marginTop: '20px',
                      marginBottom: '5px',
                    }}
                  />
                  <Button type='submit' label='Entrar' 
                    styleSheet={{
                      width: '100%',
                    }} 
                    buttonColors={{
                      mainColor: appConfig.theme.colors.primary[600]
                    }}>

                  </Button>
            </Box>

            <Box styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: '1',
              maxWidth: '200px',
              backgroundColor: `${appConfig.theme.colors.neutrals[600]}`,
              border: '1px solid',  
              borderColor: appConfig.theme.colors.neutrals[700] ,
              borderRadius: '5px',
              padding: '14px',
            }}>
               <Image src={`https://github.com/${username}.png`} styleSheet={{
                
                  borderRadius: '50%',
                  marginBottom: '14px'
               }}/>
               <Text styleSheet={{
                 color: '#fff'
               }}>{username}</Text>    
            </Box>
          </Box>
        </Box>

        </>
        )
  }
  
  export default HomePage