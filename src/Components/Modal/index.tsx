"use client";
import clsx from "clsx";
import { Container, TextBox, Divider, Spacer } from "..";
import React, { useState, useEffect, ReactNode } from "react";

type ModalProps = {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ children, className, isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    isOpen && (
      <div className={className}>
        {/* Desktop Modal */}
        <Container
          className='fixed inset-0 z-50 items-center justify-center flex max-sm:hidden bg-black/50'
          borderVisible={false}
        >
          <div
            className='fixed inset-0 backdrop-blur-sm'
            onClick={onClose}
          ></div>
          <div
            className={clsx(
              "bg-black/80 border-2 border-base-300 backdrop-blur-xl w-96 h-96 rounded-outer shadow-lg z-50 overflow-y-auto"
            )}
          >
            <button
              className='absolute top-5 right-5 text-muted hover:text-normal transition-all'
              onClick={onClose}
            >
              Close
            </button>
            <Container className='py-4 px-6 mt-auto' borderVisible={false}>
              <Spacer dir='y' margin='component' />
              <TextBox prominent={true}>
                <p>Good morning,</p>
                <p>This is a modal.</p>
              </TextBox>
              <Divider dir='x' size='full' />
              <Spacer dir='y' margin='component' />
              {children}
            </Container>
          </div>
        </Container>
        {/* Mobile Modal */}
        <Container
          borderVisible={false}
          className='md:hidden fixed bottom-0 left-0 w-full rounded-t-outer h-2/4 bg-black/90 border-t-2 border-base-300 backdrop-blur-md z-50'
        >
          <button
            className='absolute top-5 right-5 text-muted hover:text-normal transition-all'
            onClick={onClose}
          >
            Close
          </button>
          <Container className='py-4 px-6 mt-auto' borderVisible={false}>
            <Spacer dir='y' margin='component' />
            <TextBox prominent={true}>
              <p>Good morning,</p>
              <p>This is a mobile modal.</p>
            </TextBox>
            <Divider dir='x' size='full' />
            <Spacer dir='y' margin='component' />
            {children}
          </Container>
        </Container>
      </div>
    )
  );
}

export default Modal;
