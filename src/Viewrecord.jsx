import { useState } from "react";
import './style.css'

const Viewrecord = ({ Cart }) => {
    const [record, setRecord] = useState(Cart);
    const restaurantsview = (category) => {
        let view = Cart.filter((item) => {
            return item.category === category
        })
        setRecord(view)
    }
    const restaurants = () => {
        setRecord(Cart)
    }
    return (
       
        <>
            <center>
                <div style={{ padding: "20px 0 " }}>
                    <button onClick={() => restaurants()} style={{ backgroundColor: "black", borderStyle: "solid", color: "red", borderRadius: '12px', width: "100px", height: "50px", fontSize: '15px', margin: '0 10px' }}>All DATA</button>

                    <button onClick={() => restaurantsview('breakfast')} style={{ backgroundColor: "black", borderStyle: "solid", color: "red", borderRadius: '12px', width: "140px", height: "50px", fontSize: '18px', margin: '0 10px' }}>Breakfast</button>

                    <button onClick={() => restaurantsview('lunch')} style={{ backgroundColor: "black", borderStyle: "solid", color: "red", borderRadius: '15px', width: "100px", height: "50px", fontSize: '16px', margin: '0 10px' }}>Lunch</button>

                    <button onClick={() => restaurantsview('dinner')} style={{ backgroundColor: "black", borderStyle: "solid", color: "red", borderRadius: '15px', width: "100px", height: "50px", fontSize: '16px', margin: '0 10px' }}>Dinner</button>
                </div>
                {
                    record.map((val) => {
                        const { name, qty, dec, price, category, img } = val;
                        return (
                            <div key={name} style={{ display: "inline-block", padding: '20px' }}>
                                <div style={{ borderColor: "gray", borderStyle: "solid", color: "black", borderRadius: '15px', border: '2', width: "400px", height: "650px", fontSize: '20px', padding: '20px' }}>
                                    <div>
                                        <img src={img} style={{ width: "100%", height: "300px", borderRadius: "15px" }} />
                                    </div>
                                    <div>
                                        <h1>{name}</h1>
                                        <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                                            <h4>Qty :- {qty}</h4>
                                            <h4>Price :-{price}</h4>
                                        </div>
                                        <h6>{dec}</h6>
                                        <h4>{category}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </center>
        </>
    )
}
export default Viewrecord;