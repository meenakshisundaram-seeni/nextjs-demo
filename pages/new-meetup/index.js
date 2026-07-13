import { useRouter } from 'next/router';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function Meetup(){
    const router = useRouter()
  async function addMeetupHandler(enteredData){
    try {
      const res = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredData),
        headers: { 'Content-Type': 'application/json'}
      })

      // 1. Check if the server returned an error code (404, 500, etc.)
      if (!res.ok) {
        const errorText = await res.text(); // Get the raw HTML/text error
        throw new Error(`Server error (${res.status}): ${errorText}`);
      }

      // 2. If it's successful, parse the JSON
      const data = await res.json()
      console.log('Success!', data);
      router.push('/')

    } catch (error) {
      console.error('Something went wrong:', error.message);
    }
  }

  return (
    <>
     <Head>
            <title>add Meetups</title>
            <meta name="description" content="Browse Details of Meetups on Reacr"/>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </>
  
)
}