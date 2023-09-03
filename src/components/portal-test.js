// import { useState } from 'react';
// import { createPortal } from 'react-dom';
// import ModalContent from './modal-test';


// const portalRootTest = document.getElementById('portal-test')
// export default function PortalExample() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShowModal(true)}>
//         Mostrar modal con uso de portal
//       </button>
//       {showModal && createPortal(
//         <ModalContent onClose={() => setShowModal(false)} />,
//         portalRootTest
//       )}
//     </>
//   );
// }