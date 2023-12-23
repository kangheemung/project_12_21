import { ChageProfile } from "../components/ChageProfile";
import { useContext } from 'react'
import { AppContext } from '../App'

export const Profile = ()=> {
    const {username}=useContext(AppContext);
  return (
    <div>
        PROFILE,user is: {username}
        <ChageProfile/>
    </div>
  )
}

export default Profile
