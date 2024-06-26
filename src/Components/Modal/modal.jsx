import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <motion.div
                className="bg-white p-6 rounded-lg shadow-lg z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-xl font-bold mb-4">Notification</h2>
                <p className="mb-4">{message}</p>
                <button
                    className="bg-primary font-bold  text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </motion.div>
        </div>
    );
};

export default Modal;