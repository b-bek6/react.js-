const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

export default function Posts(props) {

    const [posts, setPost] = useState([]);
    // const [count, setCount] = useState(0);
    // const [isLoading, setLoading] = usestate(true)

    useEffect(() => {
        console.log("use-effect");
        axios.get("https://dummyjson.com/posts")
        .then(res => {console.log(res.data.posts)
            setPost(res.data.posts)
            // setLoading(false)
        })
    }, [  ]) // [] <- variable

    useEffect(()=>{
        console.log("did update")
        console.log("there is a change in count")
    },[])

    function increment() {
        setCount(count + 1);
    }

return <>
        Posts
        <hr/>
        <button onClick={increment}> increment </button>
        <ul>
            {
                props.posts.map( post => {
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>
    </>
    }
// format must be same
    export async function getServerSideProps() {
        return {
            props: {
                posts : [{id:1, title:"his mother had always taught him"}]
            }
        }
    }