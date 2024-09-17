const RatingEmoji = () => {
    //estado no campo de input

    // estado no rating dos emojis 
    //const [value,setRating] = useState<number | string >(0);
    const handlerClickEvent = () =>{
        return setRating(/**valor do input */)
    }




    return(
        <div className="">
            <input 
            type="number" 
            name="deixeiPorConvenção" 
            id="deixeiPorConvenção" 
            />

            <button onClick={handlerClickEvent} className="text-yellow-50">Avaliar</button>
            
            {//value &&
                <div>

                </div>}
        </div>
    )
}

export {RatingEmoji}

//a div é um componente children

//o usuario digita um valor de 0 a 5

// clica no botão avaliar

//se tiver valor no input colocar emojis com base no valor do input