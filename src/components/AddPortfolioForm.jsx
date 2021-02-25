import { useForm } from 'react-hook-form'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'



const AddPortfolioForm = ({ coinSearch }) => {
    const { addCoinPortfolio } = useContext(GlobalContext)


    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {
        addCoinPortfolio(coinSearch.coin)
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input type="number" name="qty" placeholder="Quantity" ref={register} />
            <input type="number" name="price" placeholder="Price at time of purchase" ref={register} />
            <input type="date" name="date" placeholder="Date purchased" ref={register} />
            <input type="submit" />
        </form>
    )
}

export default AddPortfolioForm
