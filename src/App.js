import './App.css';
import Carsboot from './carsboot'
const card=[{h1:"FREE",h2:"0",m1:"Single User",m2:"5GBStorage",m3:"Unlimited Public Projects",m4:"Community Acess",m5:"Unlimited Private Projects",m6:"Dedicated Phone Support",m7:"Free Subdomain",m8:"Monthly Status Reports"},{h1:"PLUS",h2:"9",m1:"5Users",m2:"50GB Storage",m3:"Unlimited Public Projects",m4:"Community Acess",m5:"Unlimited Private Projects",m6:"Dedicated Phone Support",m7:"Free Subdomain",m8:"Monthly Status Reports"},{h1:"PRO",h2:"49",m1:"Unlimited User",m2:"150GB Storage",m3:"Unlimited Public Projects",m4:"Community Acess",m5:"Unlimited Private Projects",m6:"Dedicated Phone Support",m7:"Free Subdomain",m8:"Monthly Status Reports"}]
export const tic='✓';

function App() {
  return (<div className="dis">

  {card.map((data)=>{return <Carsboot {...data}/>})}

  </div>
    
  );
}

export default App;
