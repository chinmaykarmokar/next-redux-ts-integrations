import type { NextPage } from 'next'


// Import Components
import CreateNewPlayerProfileComponent from '../components/NewFootballer/createNewPlayerData'

const NewPlayer: NextPage = () => {
  return (
      <>
        <CreateNewPlayerProfileComponent/>
      </>
  )
}

export default NewPlayer
