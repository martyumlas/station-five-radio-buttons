import { useEffect, useState } from "react";
import InputContainer from "./components/InputContainer";
import RadioInput from "./components/RadioInput";


  const menus =  [
    // first group of radio-buttons
    [
      { id: '101', value: 'Vegetarian' },
      { id: '102', value: 'Nut allergy' },
      { id: '103', value: 'Halal' }
    ],
    // second group of radio-buttons
    [
      { id: '201', value: 'Cashew chicken' },
      { id: '202', value: 'Sweet and sour pork' },
      { id: '203', value: 'Stir fried Tofu' },
      { id: '204', value: 'Vegetable fried rice' },
      { id: '205', value: 'Pad Thai' },
      { id: '206', value: 'Massaman beef' },
    ],
    // third group of radio-buttons
    [
      { id: '301', value: 'Peanut sauce' },
      { id: '302', value: 'Oyster sauce' },
      { id: '303', value: 'Vegetable spring rolls' },
      { id: '304', value: 'Steamed rice' },
    ],
  ]
function App() {


  const [menuTwo, setMenuTwo] = useState([])
  const [menuThree, setMenuThree] = useState([])
  const [selectedMenu, setSelectedMenu] = useState('')
  const [selectedMenu3, setSelectedMenu3] = useState('')

  useEffect(() => {
   const menu2Ids =  menus[1].map(menu => menu.id).concat(menus[2].map(menu => menu.id))

   setMenuTwo(menu2Ids)

  },[])

  const handleChange = (e) => {
    const value = e.target.value
    setSelectedMenu(value)
    setMenuThree([])
    setSelectedMenu3('')
    switch(value) {
      case '101':
        setMenuTwo(['201', '202', '206', '302'])
       
        break;
      case '102':
        setMenuTwo(['201', '301'])
       
          break; 
      case '103':
        setMenuTwo(['202'])
       
        break;
      default:
       
        break;               
    }
  }

  const handleChange2 = (e) => {
    const value = e.target.value
    setSelectedMenu(value)

    if(value === '204' || value === '205') {
      
      setMenuThree(['304'])
    }else {
      setMenuThree([])
    }

    console.log(menuThree)
  }



  return (
    <div className="container">
        <div className="container">
          <form action="">
            <InputContainer> 
             {menus[0].map(menu => (
                 <RadioInput key={menu.id} name='main-menu' menu={menu} handleChange={handleChange} />
              ))}            
            </InputContainer>

            <InputContainer> 
              {menus[1].map(menu => (
                <RadioInput 
                  key={menu.id} menu={menu} 
                  name='menu-two' 
                  checked={selectedMenu === menu.id} 
                  handleChange={handleChange2}
                  handleDisable={menuTwo && menuTwo.includes(menu.id)}
                />
              ))}             
            </InputContainer>

            <InputContainer>
              {menus[2].map(menu => (
                <RadioInput 
                  key={menu.id} 
                  menu={menu} 
                  name='menu-three' 
                  handleChange={(e) => setSelectedMenu3(e.target.value)}
                  checked={selectedMenu3 === menu.id }
                  handleDisable={ menuTwo.concat(menuThree).includes(menu.id)}
                />
              ))}
            </InputContainer>
          </form>
        </div>
    </div>
  );
}

export default App;
