/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sideinfo from "../Sideinfo/Sideinfo";

const Cards = () => {

    const [allCards, setCards] = useState([]);
    const [selectedCard,setSelectedCard] = useState([]);
    const [totalCredit,setTotalCredit] = useState(0);
    const [remaining,setRemaining] =useState(0);
    const [totalPrice,setTotalPrice] = useState(0);
  
   
    useEffect(() => {
        fetch("./fakedata.json")
            .then(res => res.json())
            .then((data) => setCards(data))
    }, []);

    const handleSelectCard = (card) =>{
       const isExist = selectedCard.find((item) => item.id == card.id);

       let countCredit =card.credit;
       let countPrice = card.price;

       if (isExist){
        toast.warning("You already added this Course", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
       }else{
        
        selectedCard.forEach((item)=> {
            countCredit = countCredit + item.credit;
            countPrice = countPrice + item.price;
          
        });

        const totalRemaining = 20 - countCredit;
        if (totalRemaining < 0) {
            // Alert if remaining goes below 0
            toast.error("You don't have enough credit.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else if (totalRemaining > 20) {
            // Alert if remaining is more than 20
            toast.error("You cannot added credit more than 20", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            setTotalPrice(countPrice);
            setRemaining(totalRemaining);
            setTotalCredit(countCredit);
            setSelectedCard([...selectedCard, card]);
        }




        setTotalPrice(countPrice);
        setRemaining(remainingValue);
        setTotalCredit(countCredit);

       

        setSelectedCard([...selectedCard,card]);
       }
      
       
    };


    return (
     <div className="flex gap-20 container mx-auto mb-10" >
        <ToastContainer/>
           <div className="grid grid-cols-3 gap-5">
            {
                allCards.map(card => (

                    // eslint-disable-next-line react/jsx-key
                    <div>
                        <div key={card.id} className=" card w-[300px] shadow-lg mt-7">
                            <figure><img className="mt-5" src={card.image} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.title}</h2>
                                <p>{card.description}</p>
                                <div className="flex">
                                    <img src="./dollar-sign 1.svg" alt="" /><p>Price:{card.price} </p>
                                    <img src="./Frame.svg" alt="" /><p>Credit:{card.credit} hr</p>
                                </div>
                                <button onClick={()=>handleSelectCard(card)} className="btn btn-primary">Select</button>

                            </div>
                        </div>
                    </div>
                    ))}
            </div>
            <div>
                <Sideinfo selectedCard={selectedCard} totalCredit={totalCredit} remaining={remaining} totalPrice={totalPrice}></Sideinfo>
            </div>
     </div>
    );
};

export default Cards;