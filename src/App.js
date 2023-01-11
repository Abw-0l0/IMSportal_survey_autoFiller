import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';

function App() {
  const [option, setOption ] = useState();
  const [comment, setComment ] = useState("");

  const Apply = async () => {
    // const dataofex = [ option, comment ];
    // chrome.tabs.query({"active": true, "currentWindow": true }, tab => {
    //   chrome.tabs.sendMessage(tab[0].id, dataofex);
    // });
  };

  return (
    <div className='flex p-1 bg-gray-800/20 w-fit h-fit'>
    <div className="w-96 h-64 bg-gray-100 flex flex-col items-center rounded-xl overflow-hidden shadow-sm">
      <h1 className="p-1 text-lg pt-0 font-bold uppercase text-black/60">Ims survey Auto Complete</h1>

      <hr className="w-44 border-gray-800"/>

      <div className="flex-col pt-3 items-center flex">
        <h1 className="flex text-sm font-medium">Select Option <p className="pl-1 text-gray-600 text-xs flex items-center">( will apply to all )</p></h1>
        <div className="flex pt-2">
          <input type="radio" name="option" value={1} onChange={e=>setOption(e.target.value)} /><p className="px-2 text-xs flex items-center">Very low</p>
          <input type="radio" name="option" value={2} onChange={e=>setOption(e.target.value)} /><p className="px-2 text-xs flex items-center">low</p>
          <input type="radio" name="option" value={3} onChange={e=>setOption(e.target.value)} /><p className="px-2 text-xs flex items-center">Average</p>
          <input type="radio" name="option" value={4} onChange={e=>setOption(e.target.value)} /><p className="px-2 text-xs flex items-center">High</p>
          <input type="radio" name="option" value={5} onChange={e=>setOption(e.target.value)} /><p className="px-2 text-xs flex items-center">Very High</p>
        </div>
      </div>

      <div className="flex-col pt-3 w-full items-center flex">
        <h1 className="flex text-sm font-medium">Comment for teachers <p className="pl-1 text-gray-600 text-xs flex items-center">( will apply to all )</p></h1>
        <div className="flex pt-2 w-11/12">
          <textarea value={comment} onChange={e=>setComment(e.target.value)} rows={2} className="w-full resize-none outline-none p-1 text-sm" name="option"/>
        </div>
      </div>

      <button onClick={Apply} className="bg-gray-500 w-11/12 text-white py-1 mt-2 rounded-lg hover:bg-gray-700 hover:translate-y-[2px] hover:shadow-md">Apply</button>

      <p className="text-xs pl-4 pt-3 w-full flex items-center">
        Created by 
        <a href="https://www.instagram.com/f4rrukh_t" target="blank" className="px-1 font-semibold hover:underline hover:text-blue-900 py-[1px]" rel="noreferrer" >
          <InstagramIcon sx={{ fontSize : 15 }}/> Farrukh Tahir 
        </a> 
        and
        <a href="https://www.instagram.com/abw_0l0" target="_blank" className="px-1 font-semibold hover:underline hover:text-blue-900 py-[1px]" rel="noreferrer" >
          <InstagramIcon sx={{ fontSize : 15 }}/> Abdul Basit Iqbal
        </a>
      </p>

    </div>
    </div>
  );
}

export default App;
