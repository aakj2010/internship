import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Dashboard() {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <>

      <section className='heading'>
        <h2>Welcome    {user &&  user.name}</h2>
        <p>Profile</p>
      </section>

    </>
  )
}

export default Dashboard