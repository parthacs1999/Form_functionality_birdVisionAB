import Navbar from './components/UI/Navbar';
import Modal from './components/UI/Modal';
import { useSelector } from 'react-redux';
function App() {
  const modalOpen = useSelector(state => state.modal.showModal);
  return (
    <div>
      <Navbar />
      {!modalOpen && <h4 style={{ textAlign: 'center' }}>Please Click on Login or Register to get started.</h4>}
      <Modal />
    </div>
  );
}

export default App;
