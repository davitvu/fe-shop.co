import { useRef, type ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
    trigger?: ReactNode,
    triggerText?: string;
}

const DialogModal = ({
    title,
    children,
    trigger,
    triggerText = "Open"
}: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const TriggerButton = trigger ? (
        <div onClick={() => dialogRef.current?.showModal()} className="inline-block cursor-pointer">{trigger}</div>
    ) : (
        <button className="btn" onClick={() => dialogRef.current?.showModal()}>{triggerText}</button>
    )

    return (
        <>
            {TriggerButton}

            <dialog ref={dialogRef} className="modal">
                <div className="modal-box">
                    {title && <p className="font-bold text-lg mb-3">{title}</p>}

                    {children}

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            {/* <dialog ref={dialogRef} className="modal">
                <div className="modal-box">
                    {title && <p className="font-bold text-lg mb-3">{title}</p>}

                    {children}

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog> */}
        </>
    )
};

export default DialogModal;