import { Link } from 'react-router-dom'
function CartOverview() {
    return (
        <div className="item-center flex justify-between  bg-stone-800 p-4 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
            <p className="text-stone-300 sm:space-x-4 ">
                <span className="font-semibold">23 pizzas</span>
                <span>$23.45</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartOverview
