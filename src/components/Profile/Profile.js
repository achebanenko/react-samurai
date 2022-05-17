import { Component } from 'react'
import styles from './Profile.module.css'
import ProfileContext from '../../profile-context'

export default class Profile extends Component {
    // static contextType = ProfileContext

    // componentDidMount() {
    //     console.log(this.context)
    // }
    render() {
        const profile = this.context

        return (
            <div className={styles.container}>
                <div>
                    {profile.name}
                </div>
                <div>
                    {profile.age}
                </div>
                <div>
                    {profile.city}
                </div>
            </div>
        )
    }
}
Profile.contextType = ProfileContext