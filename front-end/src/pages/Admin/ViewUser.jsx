import { useEffect, useState } from 'react'
import Container from '@/components/Container.jsx'
import AboutCard from '@/components/AboutCard.jsx'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import jsonData from '@/invoices.json'
import { useParams } from 'react-router-dom'

/*
Possible Contents are:
About Card
CV -> Filter Words, Rating, and PDF File
Assessment -> Score for each assessment, and total
*/

const ViewUser = () => {
  const {id} = useParams();
  const [profile, setProfile] = useState(7321);

  useEffect(() => {
    if (jsonData && jsonData.invoices && Array.isArray(jsonData.invoices)) {
      // Find the profile object in the invoices array based on the ID parameter
      const foundProfile = jsonData.invoices.find(item => item.id === parseInt(id));
      setProfile(foundProfile);
    }
  }, [id]);

  if (!profile){
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className='grid justify-center px-2'>
        <div>
          <h2 className='text-slate-500 underline pb-5 mt-7'><Link to="/dashboard"><FaArrowLeft className='inline mr-1'/>Go back to Dashboard</Link></h2>
          <AboutCard image={profile.pfp} name={profile.name} job={profile.job} email={profile.email} contact={profile.contact} type={profile.type}/>
        </div>
      </div>
    </Container>
  )
}

export default ViewUser