import { Image } from "react"

export default function Album(name, image) {
    return (
        <div style = {{
            flex: 1,

        }}>
            <Image src={image}/>
        </div>
    )
};