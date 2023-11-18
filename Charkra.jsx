// javascript hamesha { } ke andar likhi jayegi

import "./App.css";
import Head from "./Head.jsx";
import Foot from "./Foot.jsx";
import El from './components/El'
import Realhead from './components/Realhead.jsx'
import BasicExample from "./components/BasicExample.jsx";
import MyImageCarousel from "./components/MyImageCarousel.jsx";
import HeaderOne from "./components/HeaderOne.jsx";
import Example from "./components/Example.jsx";
import { Badge } from 'primereact/badge';
import { Center, Square, Circle } from '@chakra-ui/react'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import { Calendar } from 'primereact/calendar';
import { Card } from 'primereact/card';
import { Select } from '@chakra-ui/react'
import { Box, Text } from "@chakra-ui/react"

import "primereact/resources/themes/lara-light-indigo/theme.css";
import { ScrollPanel } from 'primereact/scrollpanel';
import { Fieldset } from 'primereact/fieldset';
import { Tabs, TabList, TabPanels, Tab, TabPanel,Switch,FormControl,FormLabel, FormErrorMessage,
  FormHelperText,Input } from '@chakra-ui/react'
  import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'

function App() {
  
  return (
    //jsx expression hamesha tags ke andar aati hai next line me wo div tag jsx contain karne ke liye rakha hai

    <div className="App">
<BasicExample style={{ marginBottom: '10rem' }}/>
<MyImageCarousel  />
{/* <Example/> */}
<Card title="Title">
    <p className="m-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
</Card>
<Card title="wasi"  width={800}>
    <p className="m-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
</Card>

<center >
<Select placeholder='Select option' width={400} alignItems='center' style={{marginTop:'4rem'}}>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
</center>

<Box w="100%" h="100px" bgGradient="linear(to-t, green.200, pink.500)" />

// adding radial gradient and color transitions
<Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" />

// adding the text gradient
<Text
  bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold"
>
  Welcome to Chakra UI
</Text>




<Center bg='tomato' color='white'>
<Fieldset legend={'wasi'}>
    <p className="m-0">
        
        hell
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>
</Center>

<FormControl textAlign="center" style={{ alignItems: 'center' }}>
<FormLabel mb="0" style={{ display: 'inline-block', textAlign: 'left', minWidth: '100%' }}>
   <center >Email address</center> 
  </FormLabel>  <Input type="email" size="sm" mt="0" style={{ width: '400px' }} />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>



<Tabs >
  <TabList display='flex' alignItems='center' justifyContent='center' >
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>



<FormControl  alignItems='center' >
  <FormLabel htmlFor='email-alerts' mb='0'>
    Enable email alerts?
  </FormLabel>
  <Switch id='email-alerts' />
</FormControl>

<center h='400' bg='tomato'>

</center>


<RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]} width={1000} my={'20rem'}>
  <RangeSliderTrack>
    <RangeSliderFilledTrack />
  </RangeSliderTrack>
  <RangeSliderThumb index={0} />
  <RangeSliderThumb index={1} />
</RangeSlider >


    </div>
  );
}

export default App;
