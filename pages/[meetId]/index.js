import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

// ✅ FIX 1: Correctly unpack/destructure meetupData from props
export default function MeetDetails({ meetupData }) {
  // If fallback was true, we'd need a guard, but with fallback: false, 
  // Next.js ensures meetupData exists before rendering.
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description} // ✅ Make sure this matches the prop name inside MeetupDetail!
    />
  );
}

export async function getStaticPaths() {
  const uri = 'mongodb+srv://meenakshi_sundaram:Ts4aU9Q5ios4VbbP@cluster0.rbuqx46.mongodb.net/meetups?appName=Cluster0&compressors=zlib';
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupData = db.collection('meetups');
  
  const data = await meetupData.find({}, { projection: { _id: 1 } }).toArray();
  client.close(); 

  return {
    fallback: 'blocking',
    paths: data.map((meet) => ({
      params: {
        meetId: meet._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetId = context.params.meetId;

  const uri = 'mongodb+srv://meenakshi_sundaram:Ts4aU9Q5ios4VbbP@cluster0.rbuqx46.mongodb.net/meetups?appName=Cluster0&compressors=zlib';
  const client = await MongoClient.connect(uri);
  const db = client.db();
  const meetupData = db.collection('meetups');
  
  // ✅ FIX 2: Added 'new' keyword and REMOVED '.toArray()'
  let selectedMeetup = null;
  if (ObjectId.isValid(meetId)) {
    selectedMeetup = await meetupData.findOne({ _id: new ObjectId(meetId) });
  }

  client.close();

  if (!selectedMeetup) {
    return { notFound: true };
  }

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title || '',
        address: selectedMeetup.address || '',
        image: selectedMeetup.image || '',
        description: selectedMeetup.description || '',
      },
    },
  };
}