
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This is to prevent screen readers from reading main content when modal is open

const WelcomeModal = ({ isModalOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={onRequestClose}
            contentLabel="Welcome Modal"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '60px',
                    textAlign: 'center'
                }
            }}
        >
            <h2 className='text-2xl md:text-4xl text-[#647295] font-bold mb-3'>Welcome to our Real Estate Platform!</h2>
            <p className='text-gray-500 md:w-2/3 mx-auto'>We offer an extensive selection of the latest properties. Use the filters to find your perfect home.</p>
            <button onClick={onRequestClose} className="btn mt-2 text-white  bg-[#647295]/70 hover:bg-white hover:text-[#647295]">Close</button>
        </Modal>
    );
};

export default WelcomeModal;
