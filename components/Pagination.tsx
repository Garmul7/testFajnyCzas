import React from 'react'
import EventType from '../typings.d'
import Thumbnail from './Thumbnail'
import Row from './Row'

interface Props {
    items: EventType[],
    pageSize: number,
    currentPage: number
    onPageChange: Function
}



function Pagination({items, pageSize, currentPage, onPageChange}: Props) {
    // console.log('Pagination')
    if(pageSize<1){
        pageSize = 1;
    }
    var pagesCount = 0;
    if(items){
        pagesCount = Math.ceil(items.length / pageSize);
    }else{return(<div>No events</div>)}

    // console.log(`pages count: ${pagesCount}`)

    const pages = Array.from({length: pagesCount}, (_, i) => i + 1);
    // console.log(`list of all pages ${pages}`);

    if(currentPage>pages.length){
        onPageChange(pages[pages.length-1]);
        console.log(currentPage)
    }
  return (
    <div className="mt-[20px]">

      

        <div className="flex space-x-4 mt-[20px]">
            {pages.map((page) => (
                <div key={page}>
                    <a className={`cursor-pointer p-2 border rounded-lg ${page === currentPage ? 'border-blue-500': ''}` } onClick={() => {onPageChange(page)}}>
                        {page}
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pagination