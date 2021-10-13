import React from 'react'
import classNames from 'classnames'
import { ModalContainer,ModalInput,ButtonModal } from './ModalStyle'


export function Modal({classes,children,...restProps}){

    const ModalTransiton=({
        ins:{y:0,transition:{type:"spring",delay:0,stiffness: 500,damping: 60,mass: 1}},
        outs:{y:"-100vw"}
    })

    return(
        <ModalContainer variants={ModalTransiton} initial={ModalTransiton.outs} 
        animate={ModalTransiton.ins} exit={ModalTransiton.outs} className={classNames("Modal",classes)} {...restProps}>
            {children}
        </ModalContainer>
    )
}

Modal.ModalInput = function ModalInputs({classes,placeholder,value,func,...restProps}){
    return(
        <ModalInput value={value} onChange={func} placeholder={placeholder} className={classNames("ModalInputs",classes)} {...restProps}/>
    )
}

Modal.ButtonModal = function ButtonModals({classes,children,...restProps}){
    return(
        <ButtonModal className={classNames("ButtonModals",classes)} {...restProps}>{children}</ButtonModal>
    )
} 

