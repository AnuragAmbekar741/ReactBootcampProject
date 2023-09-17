import { Component } from 'react'

class Profile extends Component {
    constructor(props) {
        console.log('Profile - constructor')
        super(props);
        this.state = {
            userInfo: {}
        }

    }

    async componentDidMount() {
        console.log('Profile - componentDidMount')

        const data = await fetch('https://api.github.com/users/AnuragAmbekar741')
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        console.log('Profile - componentDidUpdate')

    }

    render() {
        console.log('Profile - render')

        const { login, avatar_url } = this.state.userInfo;
        return (<>
            <div className='bg-purple-100'>
                <h1>Profile</h1>
                <h2>{avatar_url}</h2>
                <h3>{login}</h3>
            </div>
        </>)
    }
}

export default Profile;