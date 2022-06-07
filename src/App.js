import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputContainer from "./components/InputContainer";
import RadioInput from "./components/RadioInput";


function App() {

  const { options, menus, sauces } = useSelector(state => state.menu)

  const [dishes, setDishes] = useState([])
  const [validSauces, setValidSauces] = useState([])
  const [dish, setDish] = useState('')
  const [sauce, setSauce] = useState('')
  const [option, setOption] = useState('')

  useEffect(() => {
    const dishesIds = menus.map(menu => menu.id)   
    setDishes(dishesIds)
    disableSauces()
  },[])

  const disableSauces = () => {
    const saucesIds = sauces.map(sauce => sauce.id)
    setValidSauces(saucesIds)  
  }

  const handleOptions = (e) => {
    const value = e.target.value
    setOption(value)
    setDish('')
    setSauce('')
    disableSauces()
    switch(value) {
      case '101':
        setDishes(['201', '202', '206']) 
        break;
      case '102':
        setDishes(['201', '301'])       
        break; 
      case '103':
        setDishes(['202'])       
        break;
      default:     
        setDishes([])  
        break;               
    }
  }

  const handleDish = (event) => {
    const value = event.target.value
    setDish(value)
    setSauce('')
    switch(true) {      
      case option === '101' && value === '204' || option === '101' && value === '205':
        setValidSauces(['302', '304'])
        break;
      case option === '101':
        setValidSauces(['302'])
        break;
      case option === '102' && value === '204' || option === '102' && value === '205':
        setValidSauces(['301', '304'])
        break;
      case option === '102':
        setValidSauces(['301'])
        break;
      default:
        setValidSauces([])
        break;
    }    
  }

  return (
    <div className="container">
        <div className="container">
          <form action="">
            <InputContainer> 
             {options.map(menu => (
                 <RadioInput key={menu.id} name='options' menu={menu} handleChange={handleOptions} />
              ))}            
            </InputContainer>

            <InputContainer> 
              {menus.map(menu => (
                <RadioInput 
                  key={menu.id} menu={menu} 
                  name='menu' 
                  checked={dish === menu.id} 
                  handleChange={handleDish}
                  handleDisable={dishes && dishes.includes(menu.id)}
                />
              ))}             
            </InputContainer>

            <InputContainer>
              {sauces.map(menu => (
                <RadioInput 
                  key={menu.id} 
                  menu={menu} 
                  name='sauces' 
                  handleChange={(e) => setSauce(e.target.value)}
                  checked={sauce === menu.id }
                  handleDisable={ validSauces.includes(menu.id)}
                />
              ))}
            </InputContainer>

            <InputContainer>            
              <div className="col-12 text-center">                
                <button className="btn btn-primary" disabled={!sauce}>SUBMIT</button>
              </div>
            </InputContainer>

          </form>
        </div>
    </div>
  );
}

export default App;
