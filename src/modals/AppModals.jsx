import React from 'react'
import { motion } from 'framer-motion'
import { BsXLg } from "react-icons/bs";
import '../assets/style/app_modal.css'

export default function AppModal(props) {
    if (!props.show) return null
    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
        // duration: 0.5
    }
    return (
        <div
            className={`app-modal row ${props?.class}`}
            show={props.show}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                // exit={{ opacity: 0, scale: 1.05 }}
                transition={spring}
                className={`body ${props?.class}`}
            >
                <div className="header">
                    <span>{props?.title}</span>
                    {props?.onChange ? <BsXLg className="btn-close" onClick={props.onChange} /> : null}
                </div>
                {props.children}
            </motion.div>
        </div>
    )
}
