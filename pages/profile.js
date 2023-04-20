function Profile () {
    let logged_status = false;
    return <div>
        <h1>Profile</h1>
        <hr/>
        {
            logged_status
            ?
            <>
                <h1>Name:Bibek</h1>
                <p>You are logged in congrats</p>
            </>
            :
            <>
            <h2>Not logged in</h2>
            <p>You should log in first</p>
            </>

        }
        <p>this is profile page</p>
    </div> 
}

export default Profile