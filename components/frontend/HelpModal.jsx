"use client";

import { Button, Modal } from "flowbite-react";
import {
  CornerDownLeft,
  Headphones,
  HelpCircle,
  MessageSquare,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center space-x-1 text-green-950 dark:text-slate-100"
      >
        <HelpCircle />
        <span className="">Help</span>
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          Need Help with shopping, Talk to our Help Desk
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-2 gap-6">
            <Link
              href="tel:654221901"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <Headphones className="w-6 h-6 text-lime-800" />
              </div>
              <span className="">Call: 654221901</span>
            </Link>
            <Link
              href="/track"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <Truck className="w-6 h-6 text-lime-800" />
              </div>
              <span className="">Track your Order</span>
            </Link>
            <Link
              href="tel:654221901"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <CornerDownLeft className="w-6 h-6 text-lime-800" />
              </div>
              <span className="">Return and Refunds</span>
            </Link>
            <Link
              href="tel:654221901"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <MessageSquare className="w-6 h-6 text-lime-800" />
              </div>
              <span className="">Chat with Us</span>
            </Link>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
                Decline
            </Button>
            </Modal.Footer> */}
      </Modal>
    </>
  );
}
