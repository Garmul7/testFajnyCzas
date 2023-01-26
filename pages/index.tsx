import type { NextPage } from 'next'
import Head from 'next/head'
import Row from '../components/Row'
import EventType from '../typings.d'
import Pagination from '../components/Pagination'
import { useEffect, useState } from 'react'
import useWindowDimensions from '../utils/useWindowDimensions'

interface Props {
  ourEvents: EventType[]
}

const Home = ({ ourEvents }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  var { width, pageSize, reverseFlow } = useWindowDimensions();

  console.log(ourEvents)
  if(reverseFlow){pageSize=5};
  
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  }

  return (
    <div className="relative h-screen ">
      <Head>
        <title>First test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative p-[20px]">

        <section>
          Pagination
          <Row events={paginate(ourEvents, currentPage, pageSize)} screenWidth={width} reverseFlow={reverseFlow}></Row>
          <Pagination items={ourEvents} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange}></Pagination>
        </section>

      </main>
    </div>
  )
}

export default Home


export async function getServerSideProps() {
  const res = await fetch(`https://az9zpuog20.execute-api.eu-central-1.amazonaws.com/v1.0/public/search?provider=Atena+Fabryka+Przyg%C3%B3d&sort=published_at_desc&limit=30`)
  const jsonres = await res.json()
  const ourEvents = jsonres.data
  
  if(!ourEvents){
    return {
      notFound: true,
    }
  }

  return {
    props: {ourEvents},
  }
}


function paginate(items: EventType[], pageNumber: number, pageSize: number){
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
}


