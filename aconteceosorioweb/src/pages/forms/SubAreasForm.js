import { useState } from "react";

export default function SubAreasForm({addSubArea, removeSubArea, itemList, filterArea}){

    const [subAreaValue, setSubAreaValue] = useState("");

    const addSub = () => {
        console.log(`subareaform (addsub) => area : ${itemList.area} / subarea : ${subAreaValue}`);
        addSubArea(itemList.area,subAreaValue);
        setSubAreaValue('');
    }

    const removeSub = (subValue) => {
        console.log(`subareaform (removesub) => area : ${itemList.area} / subarea : ${subValue}`);
        removeSubArea(itemList.area,subValue);
        setSubAreaValue('');
    }

    return(
        <>
            <select
                value={subAreaValue}
                onChange={e => setSubAreaValue(e.target.value)}
            >
                <option />
                {
                    filterArea(itemList.area).map((subAreaItem) => {
                        return(
                            <option value={subAreaItem}>{subAreaItem}</option>
                        );
                    })
                }


            </select>
            <button onClick={addSub} >
                Adicionar subarea
            </button>
            {
                itemList.subAreas.map((sub,index)=>{
                    return (
                        <div key={`sub-${index}`} style={{border: '1px solid grey',padding: '5px'}}>
                            <p name={sub} onClick={()=>removeSub(sub)} >{sub}</p>
                        </div>
                    );
                })
            }
        </>
    );
} 