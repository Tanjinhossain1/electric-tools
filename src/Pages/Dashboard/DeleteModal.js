import React from 'react';

const DeleteModal = ({ deleteOrder, order }) => {
    const { _id } = order;
    return (
        <div>



            <input type="checkbox" id="deleteModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => deleteOrder(_id)} class="btn btn-outline">Confirm Delete</button>

                        <label for="deleteModal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;