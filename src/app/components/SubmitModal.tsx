import { motion } from "framer-motion";

const SubmitModal = ({ close }: { close: () => void }) => {
  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center
      bg-white/40 backdrop-blur-sm"
      onClick={close}
    >
      <motion.aside
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white border-2 shadow-2xl z-150
          max-h-[90vh] w-[90vw] max-w-[700px]
          p-8 relative flex flex-col gap-6
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 hover:opacity-50"
        >
          ✖
        </button>

        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold mb-2">
            Message sent
          </h2>
          <p className="text-gray-600">
            Thank you for your message. We will contact you shortly.
          </p>
        </div>
      </motion.aside>
    </div>
  );
};

export default SubmitModal;
