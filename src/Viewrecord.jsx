import { useState } from "react";

const Viewrecord = ({ Cart }) => {
    const [record, setRecord] = useState(Cart);
    const filterData = (category) => {
        let view = Cart.filter((item) => {
            return item.category === category
        })
        setRecord(view)
    }
    const filterallData = () => {
        setRecord(Cart)
    }
    return (
        <div>
            <center>
                <div style={{ padding: "20px 0 " }}>
                    <button onClick={() => filterallData()} style={{ backgroundColor: "black", borderStyle: "solid", color: "#d8d8ca", borderRadius: '12px', width: "100px", height: "50px", fontSize: '15px', margin: '0 10px' }}>All DATA</button>

                    <button onClick={() => filterData('breakfast')} style={{ backgroundColor: "black", borderStyle: "solid", color: "white", borderRadius: '12px', width: "140px", height: "50px", fontSize: '18px', margin: '0 10px' }}>Breakfast</button>

                    <button onClick={() => filterData('lunch')} style={{ backgroundColor: "black", borderStyle: "solid", color: "white", borderRadius: '15px', width: "100px", height: "50px", fontSize: '16px', margin: '0 10px' }}>Lunch</button>

                    <button onClick={() => filterData('dinner')} style={{ backgroundColor: "black", borderStyle: "solid", color: "white", borderRadius: '15px', width: "100px", height: "50px", fontSize: '16px', margin: '0 10px' }}>Dinner</button>
                </div>
                {
                    record.map((val) => {
                        const { name, qty, dec, price, category, img } = val;
                        return (
                            <div key={name} style={{ display: "inline-block", padding: '20px' }}>
                                <div style={{ borderColor: "gray", borderStyle: "solid", color: "black", borderRadius: '15px', border: '2', width: "400px", height: "100%", fontSize: '20px', padding: '20px' }}>
                                    <div>
                                        <img src={img} style={{ width: "100%", height: "300px", borderRadius: "15px" }} />
                                    </div>
                                    <div>
                                        <h1>{name}</h1>
                                        <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                                            <h4>Qty :- {qty}</h4>
                                            <h4>Price :-{price}</h4>
                                        </div>
                                        <h2>{dec}</h2>
                                        <h4>{category}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </center>
        </div>
    )
}
export default Viewrecord;