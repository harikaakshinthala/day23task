
import './App.css';

function App() {

  const data=[
    
  {
   plan:"FREE",
   price:"$0",
   detail1:"✅ Single User",
   detail2:"✅ 5GB Storage",
   detail3:"✅ Unlimited Public Projects",
   detail4:"✅ Community Access",
   detail5:"❌ Unlimited Private Projects",
   detail6:"❌ Dedicated Phone Support",
   detail7:"❌ Free Subdomain",
   detail8:"❌ Monthly Status Reports"
  },
  {
    plan:"PRO",
    price:"$9",
    detail1:"✅ 5 Users",
    detail2:"✅ 50GB Storage",
    detail3:"✅ Unlimited Public Projects",
    detail4:"✅ Community Access",
    detail5:"✅ Unlimited Private Projects",
    detail6:"✅ Dedicated Phone Support",
    detail7:"✅ Free Subdomain",
    detail8:"❌ Monthly Status Reports"
   },
   {
    plan:"PRO PLUS",
    price:"$49",
    detail1:"✅ Unlimited Users",
    detail2:"✅ 150GB Storage",
    detail3:"✅ Unlimited Public Projects",
    detail4:"✅ Community Access",
    detail5:"✅ Unlimited Private Projects",
    detail6:"✅ Dedicated Phone Support",
    detail7:"✅ Free Subdomain",
    detail8:"✅ Monthly Status Reports"
   }
  ]

  return (
    <div className="App">
     {data.map((item,idx)=>(
      <PriceCard
       key={idx}
       plan={item.plan}
       price={item.price}
       detail1={item.detail1}
       detail2={item.detail2}
       detail3={item.detail3}
       detail4={item.detail4}
       detail5={item.detail5}
       detail6={item.detail6}
       detail7={item.detail7}
       detail8={item.detail8}
      />
     ))}
    </div>
  );
}

export default App;

let PriceCard=(props)=>{
    return(
      <div className="card">
       <div className="title">{props.plan}</div>
       <div className="price-table"><span>{props.price}</span>/Month</div><hr></hr>
       <div className="description">
        <p>{props.detail1}</p>
        <p>{props.detail2}</p>
        <p>{props.detail3}</p>
        <p>{props.detail4}</p>
        <p>{props.detail5}</p>
        <p>{props.detail6}</p>
        <p>{props.detail7}</p>
        <p>{props.detail8}</p>
       </div>
       <div className="btn"><button>SUBSCRIBE</button></div>

      </div>
    )
}