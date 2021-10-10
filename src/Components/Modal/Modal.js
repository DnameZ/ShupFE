import React from 'react'
import classNames from 'classnames'
import { ModalContainer,ModalInput,ButtonModal } from './ModalStyle'


export function Modal({classes,children,...restProps}){
    return(
        <ModalContainer className={classNames("Modal",classes)} {...restProps}>
            {children}
        </ModalContainer>
    )
}

Modal.ModalInput = function ModalInputs({classes,placeholder,...restProps}){
    return(
        <ModalInput placeholder={placeholder} className={classNames("ModalInputs",classes)} {...restProps}/>
    )
}

Modal.ButtonModal = function ButtonModals({classes,children,...restProps}){
    return(
        <ButtonModal className={classNames("ButtonModals",classes)} {...restProps}>{children}</ButtonModal>
    )
} 

