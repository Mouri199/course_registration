/* eslint-disable react/jsx-key */


const Sideinfo = ({ selectedCard,totalCredit,remaining,totalPrice}) => {
    console.log(selectedCard);
    console.log(totalCredit);

    return (
        <div className="mt-10 card shadow-xl w-[312px]">
            <h2 className="ml-5 text-[#2F80ED] text-xl font-bold m-5">Credit Hour Remaining <span>{remaining}</span> hr</h2><hr className="w-11/12 mx-auto" />
            <h2 className="ml-5 text-xl font-bold text-[#1C1B1B] mb-3 mt-3">Course Name</h2>
            {selectedCard.map((card) => (

                <li className="ml-5">{card.title}</li>

            ))}
            <hr className="w-11/12 mx-auto" />
            <h2  className="ml-5 font-medium text-[#1C1B1B80] mb-3 mt-3">Total Credit Hour:{totalCredit} hr</h2>
            <hr className="w-11/12 mx-auto" />
            <h2 className=" ml-5 font-semibold text-[#1C1B1B80] mb-3 mt-3" >Total Price:{totalPrice} USD</h2>
        </div>
    );
};

export default Sideinfo;