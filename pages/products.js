import Product from "@/components/Product";
// function Proudcts () {
//     let product_style = {
//         border: "1px solid black"
//     }
//     let count = 1000;
//     let page_title = "Home Page"
//     return (
//         <>
//         <div style={{color:"red"}}>Proudcts</div>
//         <hr/>
//         <div style={product_style}>
//             one
//         </div>

//         <p> {page_title} </p>
//         </>
//     )
// }


const Proudcts = () => {
    return <> // fragment
    <h1>Products</h1>
    <p>lorem epsym ...... page_tijjsk  </p>
    <hr/>
    {/* produnt() just like function 
    product('one') */}
    <Product name="one" description="Hi this is description of one"/>
    <Product name="two" description="Hi this is description of two"/>
    <Product name="three" description="Hi this is description of three"/>
    <Product name="four" description="Hi this is description of four"/>
    </>
};
export default Proudcts

