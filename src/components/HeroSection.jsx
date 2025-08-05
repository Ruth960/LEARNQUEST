
export default function HeroSection() {
    return (
        <div style={{ height:' 400px', display:'flex', flexDirection:'row', justifyContent:' space-between', width:'auto', backgroundColor: '#f0f0f0', color: '#2f65daff',  padding: '40px', textAlign: 'center' }}>
            <div style={{padding: '20px', width: '70%', alignItems:'start' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Welcome to Learn Question</h1>
                <p style={{ fontSize: '18px', marginTop: '20px' }}>
                    Where we ensure to explain every topic so that yuo can be able to understand any quetion  related to that top
                </p>
            </div>
            <div style={{ padding: '10px', width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://s39613.pcdn.co/wp-content/uploads/2025/04/iStock-1497617080-scaled.jpg" alt="Hero" style={{ marginTop: '20px', borderRadius: '8px', width:'300px', height:'400px' }} />
            </div>
        </div>
    );
}