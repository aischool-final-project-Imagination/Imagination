import BigGnb from '../shared/BigGnb';
import LnbRight from '../shared/LnbRight';
const Imagination = () => {
  return (
    <div>
      <section style={{display:'flex',justifyContent:'right', width: '57.5%', marginTop: 20}}>
        <div style={{marginLeft:20}}>
        <LnbRight />
        </div>
      </section>
      <BigGnb />
    </div>
  );
};

export default Imagination;
