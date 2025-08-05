
export default function NavBar(){
    return(
        // <div className={'bg-gray-800 text-white p-4 flex flex-row justify-between items-center rounded-lg'}>
        //     <div className="text-3xl font-bold">
        <div style={{ backgroundColor: '#2f65daff', color: 'white', width: '90vw', borderRadius: '8px', display:'flex', flexDirection:'row', justifyContent:' space-between', alignItems:'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', paddingLeft:'10px' }}>
                <h2>Hello Learners</h2>
            </div>
            <div>
                {/* <ul className={'flex space-x-4 font-semibold'}> */}
                <ul style={{ display: 'flex', listStyleType: 'none', gap:10, paddingRight: '10px',  }}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}