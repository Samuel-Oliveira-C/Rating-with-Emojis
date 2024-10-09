import { useState } from "react";

const RatingEmoji = () => {
    const [value, setRating] = useState<number | string>(0); // Estado para controlar o input
    const [emojiRating, setEmojiRating] = useState(0); // Estado para controlar o rating final

    const handlerClickEvent = () => {
    const ratingValue = parseFloat(value as string); // Converter valor do input para número
    if (ratingValue >= 0 && ratingValue <= 5) {
        setEmojiRating(ratingValue); // Atualizar o rating
        }
    };

    const emojis = (arg: number) => {
        switch (arg) {
        case 1:
            return "\u{1F614}"; // 😔
        case 2:
            return "\u{1F610}"; // 😐
        case 3:
            return "\u{1F60A}"; // 😊
        case 4:
            return "\u{1F603}"; // 😃
        case 5:
            return "\u{1F60D}"; // 😍
        default:
            return "\u{1F914}"; // 🤔
        }
    };
    

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numero = parseFloat(e.target.value);
    const convString:string = e.target.value;
    if (numero > 5) {
        setRating(5);
    } else if (numero < 0) {
        setRating(0);
    } else {
        setRating(convString);
    }
};

    return (
    <div className="p-4">
        <input
        type="number"
        name="deixeiPorConvenção"
        id="deixeiPorConvenção"
        value={value}
        onChange={handleInputChange} // Atualiza o valor do input
        className="rounded-xl text-center"
        />

        <button onClick={handlerClickEvent} className="bg-slate-500 rounded">
            Avaliar
        </button>

        {emojiRating > 0 && emojiRating <= 5 && (
        <div className="mt-4 text-4xl bg-blue-500">
          {emojis(emojiRating)} {/* Renderiza os emojis com base no valor */}
        </div>
        )}
    </div>
    );
};

export { RatingEmoji };

//TODO Fazer o Refatoração desse projeto assim:

/**
    Um componente chamado RatingArea que deve ser um children 
    contendo 
        1 div com o input e botton como filhos
        1 div com os emojis
*/
