import '../styles/card.css'

const Cards = ({item}) => {
    const {images,price,title}=item;
    const ne = images.slice(0);
    return(
        <div className="card w-96 mx-10 p-5 ">
            <div className="pic flex justify-center items-center h-80">
                <img src={ne}  width={220}  alt="" className='rounded-xl' />
            </div>
            <div className="text-center details ">
                <p className="font-bold text-xl mb-5">{title}</p>
                <p className="text-green-800 font-extrabold" ><b>₹{" "}</b>{price}</p>
            </div>
            <div className="flex justify-center items-center h-10">
            <button>Add to cart</button>
            </div>
        </div>
    ) 
}

export default Cards;