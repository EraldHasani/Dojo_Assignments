import { useState } from 'react'
import './App.css'
import Tabs from "./components/Tabs"
import Display from './components/Display'

function App() {
  const tabList  = [
    {tittle: "Tab 1" , content : " Tab 1 content..."},
    {tittle: "Tab 2",  content: "Tab 2 content... "},
    {tittle: "Tab 3",  content: "Tab 3 content..."}
  ]

  const[ tab, setTab]=useState(tabList);
  const[ tabCont, setTabCont]= useState(0);

  return (
    <>
     <Tabs tab={tab} tabCont={tabCont} setTabCont={setTabCont}/>
     <Display tab={tab} tabCont={tabCont}/>
    </>
  )
}

export default App
