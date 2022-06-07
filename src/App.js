import { useEffect, useState } from "react";


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

  useEffect(() => {
   const menu2Ids =  menus[1].map(menu => menu.id).concat(menus[2].map(menu => menu.id))

   setMenuTwo(menu2Ids)

  },[])

  const handleChange = (e) => {
    const value = e.target.value
    setSelectedMenu(value)

    switch(value) {
      case '101':
        setMenuTwo(['201', '202', '206', '302'])
        setMenuThree([])
        break;
      case '102':
        setMenuTwo(['201', '301'])
        setMenuThree([])
          break; 
      case '103':
        setMenuTwo(['202'])
        setMenuThree([])
      default:
        setMenuThree([])
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
            <div className="row justify-content-md-center">
             

              {menus[0].map(menu => (
                 <div key={menu.id} className="col col-lg-2 mt-5">
                    <div className="form-check ">
                      <input className="form-check-input" name="menu" type="radio" id={menu.value} value={menu.id} onChange={handleChange} />
                      <label className="form-check-label" htmlFor={menu.value}>{menu.value}</label>
                    </div>     
                </div>
              ))}
              

                       
            </div>

            <div className="row justify-content-md-center mt-5">
             

             {menus[1].map(menu => (
                <div key={menu.id} className="col col-lg-2">
                   <div className="form-check ">
                     <input className="form-check-input" name="menu1" type="radio" id={menu.value} value={menu.id} onChange={handleChange2} disabled={ menuTwo && menuTwo.includes(menu.id) ? true : false} checked={selectedMenu === menu.id} />
                     <label className="form-check-label" htmlFor={menu.value}>{menu.id} {menu.value}</label>
                   </div>     
               </div>
             ))}
             

                      
           </div>

           
           <div className="row justify-content-md-center mt-5">
             

             {menus[2].map(menu => (
                <div key={menu.id} className="col col-lg-2">
                   <div className="form-check ">
                     <input className="form-check-input" name="menu3" type="radio" id={menu.value} value={menu.id} onChange={(e) => setSelectedMenu(e.target.value)} disabled={  menuTwo.concat(menuThree).includes(menu.id) ? true : false} checked={selectedMenu === menu.id} />
                     <label className="form-check-label" htmlFor={menu.value}>{menu.id} {menu.value}</label>
                   </div>     
               </div>
             ))}
             

                      
           </div>
          </form>
        </div>
    </div>
  );
}

export default App;
