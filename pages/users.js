function Users() {
    let users = [
        // array of user
    ]
    return <>
        <ul>
            <li>one</li>
            <li>Two</li>
            <li>Three</li>
            {
                users.map(user => {
                    return <li key={1}> user.name </li>
                })
            }
        </ul>
    </>
}