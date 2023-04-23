import styles from "../styles/Product.module.css"
import AddToCart from "@/components/AddToCart"
import { DeleteButton } from "@/components/AddToCart"
import { NormalizeError } from "next/dist/shared/lib/utils"

export default function Product(props) {
    return <div className={"styles.product"}>
        <p>{props.name}</p>
        <p>{props.name} description</p>
        <AddToCart/>
        <DeleteButton/>
    </div>
}