import prodcardimgOne from './look1.1.jpg'
import prodcardimgTwo from './look2.1.jpg'
import prodcardimgThree from './look3.1.jpg'
import prodcardimgfour from './look4.1.jpg'
import prodcardimgFive from './look5.1.jpg'
import prodcardimgSix from './look6.1.jpg'

const productsData = [
    {
        name: "White Crop Top",
        price: "Rs 1299",
        img: prodcardimgOne,
    },
    {
        name: "White Flared Pants",
        price: "Rs 1999",
        img: prodcardimgTwo
    },
    {
        name: "Transperent Brown Top",
        price: "Rs 1799",
        img: prodcardimgThree
    },
    {
        name: "Brown Top",
        price: "Rs 2099",
        img: prodcardimgfour
    },
    {
        name: "Brown Skirt",
        price: "Rs 1899",
        img: prodcardimgFive
    },
    {
        name: "Long Brown Dress",
        price: "Rs 4199",
        img: prodcardimgSix
    }
];


const ProductCard = (props) => {
    const { img, name, price } = props.product
    console.log(name)
    console.log(price)
    console.log(img)
    return (
        <div className='prodCard'>
            <img src={img} alt="" />
            <div className='prodDetailsWrap'>
                <h4>{name}</h4>
                <h5>{price}</h5>
            </div>
        </div>)
}


const CardContainer = () => {

    const card = productsData.map((product, index) => {
        return <ProductCard product={product} key={index} />
    })
    return <div className='productSection'>
        <p>Products</p>
        <div className='cardContainer'>
            {card}
        </div>
    </div>
}

export default CardContainer;