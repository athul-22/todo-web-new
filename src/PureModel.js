import React from 'react'
import useState from 'react'
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

function PureModels() {
    const [modal, setModal] = useState(false);
    return (
        <div>
            <PureModal
                header="Your header"
                footer={
                    <div>
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                }
                isOpen={modal}
                closeButton="close"
                closeButtonPosition="bottom"
                onClose={() => {
                    setModal(false);
                    return true;
                }}
            >
                <p>MY ACC CONENT HEREt</p>
            </PureModal>;
        </div>
    )
}

export default PureModels