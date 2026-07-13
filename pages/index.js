import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"
import Head from "next/head";
export default function HomePage(props){
    return(
    <>  
        <Head>
            <title>React Meetups</title>
            <meta name="description" content="Browse Details of Meetups on Reacr"/>
        </Head>
       <MeetupList meetups={props.meetups}/>
    </>
    )
}



export async function getStaticProps(){
     const uri = 'mongodb+srv://meenakshi_sundaram:Ts4aU9Q5ios4VbbP@cluster0.rbuqx46.mongodb.net/meetups?appName=Cluster0&compressors=zlib';
     const client = await MongoClient.connect(uri);
     const db = client.db();
     const meetupData = db.collection('meetups');
    const data = await meetupData.find().toArray()
    client.close()
    return {
        props:{
            meetups: data.map(meet =>({
                id: meet._id.toString(),
                title: meet.title,
                image: meet.image,
                address: meet.address,
                description: meet.description
            }))
        },
        revalidate: 10
    };
     
}

// export function getServerSideProps(context){
//     const req = context.req
//     const res = context.res
//       return {
//         props:{
//             meetups: DUMMYMEETS
//         },
//         revalidate: 10
//     };
// }