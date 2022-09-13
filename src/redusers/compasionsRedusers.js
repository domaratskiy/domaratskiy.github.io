
export let initialState = {
    
        naturalHoney : {
            title: "Натуральный Мёд",
            row1: "1% Минералы, витамины, ферменты",
            row2: "6% трисахаридов и других углеводов",
            row3: "7% мальтоза",
            row4: "17% вода",
            row5: "31% глюкозы",
            row6: "38% фруктоза"
        },
        industrialHoney: {
            title: "Промышленный Мёд",
            row1: "До 35% смеси меда из ЕС и других стран",
            row2: "Потенциально содержащие пестициды и антибиотики",
            row3: "До 50% воды",
            row4: "До 35% кукурузного сиропа с высоким содержанием фруктозы",
            row5: "*Процент может варьироваться"
        }
    
}

const compasions = (state = initialState) => {
    return state;
}

export default compasions;