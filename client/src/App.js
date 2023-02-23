// import logo from './logo.svg';
// import './App.css';
// import steps from './tour';
// import { useState } from 'react';
// import Tour from 'reactour';

// function App() {
//   const [isTourOpen,setIsTourOpen]=useState(true);
//   return (
//     <div className="App">
//       <header className="App-header">
//       <img id = 'image' src="https://picsum.photos/100/100" alt="" />
//         <h2 id='intro'>DESIGNING THE TOUR</h2>
//         <p id='explainer'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis turpis tincidunt, pulvinar tortor dictum, tristique nisl.
//         Aliquam blandit auctor mauris commodo pharetra. Cras elementum velit non dui facilisis ultrices. Nullam a molestie dui, nec facilisis risus. 
//         Pellentesque volutpat eros quis metus pretium dapibus
//         </p>
//         <Tour
//           steps={steps}
//           isOpen={isTourOpen}
//           onRequestClose={()=>setIsTourOpen(false)}
//         />
//        {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header> 
      
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
// import TOURS from './tour';
// import { useState } from 'react';
// import JoyRide from 'react-joyride';
// import Confetti from 'react-confetti'
// function App() {
//   const [isTourOpen,setIsTourOpen]=useState(true);
//   return (
//     <div className="App">
//       <Confetti/>
//       <header className="App-header">
//       <img id = 'image' src="https://picsum.photos/100/100" alt="" />
//         <h2 id='intro'>DESIGNING THE TOUR</h2>
//         <p id='explainer'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis turpis tincidunt, pulvinar tortor dictum, tristique nisl.
//         Aliquam blandit auctor mauris commodo pharetra. Cras elementum velit non dui facilisis ultrices. Nullam a molestie dui, nec facilisis risus. 
//         Pellentesque volutpat eros quis metus pretium dapibus
//         </p>
//         <JoyRide steps={TOURS} continuous={true} showSkipButton={true} locale ={{
//           last:'End Tour',
//           skip:'Close Tour'
//         }}
//           styles= {{
//             buttonNext:{
//               backgroundColor:'#2D90F9'
//             },buttonBack:{
//               marginRight:20
//             }
//           }}
//         />
//         {/* <Tour
//           steps={steps}
//           isOpen={isTourOpen}
//           onRequestClose={()=>setIsTourOpen(false)}
//         /> */}
//        {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header> 
      
//     </div>
//   );
// }

// // const INITIAL_STATE={
// //   run:false,
// //   continuous:true,
// //   loading:false,
// //   stepIndex:0,
// //   steps:TOURS,
// //   key:new Date()
// // }
// export default App;
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'
import './App.css'
function App() {
  const [item,setItem] = useState([])

  const fetchComments = async ( currentPage) =>{
    const res=await fetch(`http://localhost:3004/comments?_page=${currentPage}&_limit=12`)
    const data = await res.json();
    return data;
  }

  const handlePageClick = async (data) =>{
    console.log('Page Clicked',data.selected);
    let currentPage = data.selected+1;
    const commentsFormServer = await fetchComments(currentPage)
    setItem(commentsFormServer)
  }

  useEffect(()=>{
    const getComments = async () =>{
      const res = await fetch(`http://localhost:3004/comments?_page=1&limit=12`)
      const data = await res.json();
      const total = res.headers.get('x-total-count')
      setItem(data)
    }

    getComments();
  },[])
  return(
    <><h2 align='center'>Pagination</h2><br></br>
    <div className='row m-2'>
    {item.map((v)=>{
      return <div className='col-sm-6 col-md-4 v my-2'>
        <div className='card shadow-sm w-100' style={{minHeight: 255}}>
          <div className='card-body'>
            <h5 className='card-title text-center h2'>ID:{v.id} </h5>
            <h6 className='card-subtitle mb-2 text-muted text-center'>EMAIL: {v.email}</h6>
            <p className='card-text mb-2'>NAME : {v.name}</p>
          </div>
        </div>
      </div>
      })}</div>
    <ReactPaginate
    breakLabel={'...'}
    pageCount={10}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={handlePageClick}
    containerClassName={'pagination justify-content-center'} //classname for ul 
    pageClassName={'page-item'}//classname for each pages
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
    /></>
  )
}

export default App;