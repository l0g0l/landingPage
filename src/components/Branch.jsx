import {useState} from 'react'
import Modal from "./Modal";

const Branch = ({ display, position, top, left}) => {
     const [modalOpen, setModalOpen] = useState(false);
    console.log(modalOpen)

    return (
        <>
            <div className="branch-dev" onClick={() => { setModalOpen(true)}}>
                    <div className="commit-main" style={{ display: display, position: position, top: top, left: left }}></div>
                 
                  {modalOpen && <Modal closeModal={setModalOpen} url={'https://coela.herokuapp.com/'} />}
            </div>
        </>
    )
}

export default Branch
