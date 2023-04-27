import axios from "axios";
import React from "react"

export default function quotes ({quotes}) {
    return(<>
        <div>quotes</div>
        <hr/>
        <ul>
            {
                quotes.map(quote => {
                    return <li key={quote.id}>{quote.quote}</li>
                })
            }
        </ul>
    </>
    )
}

export async function getStaticProps () {
    console.log("feth api");
    let data  = await axios.get("https://dummyjson.com/quotes")

    return({
        props: {
            quotes: data.data.quotes
        }
    })
}