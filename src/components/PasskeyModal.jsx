import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { div } from "framer-motion/client";

/**
 * Props:
 * - open (bool)
 * - pendingRoomId (string)
 * - onClose()  -> called when modal closed
 * - onVerify(accepted) -> called when modal accepted, accepted===true means allow join
 */
const PasskeyModal = ({ open, pendingRoomId, onClose, onVerify }) => {
  const [entered, setEntered] = useState("");
  const [wrong, setWrong] = useState(false);
  const [foundLocal, setFoundLocal] = useState(false);
  const [confirmFallback, setConfirmFallback] = useState(false);

  useEffect(() => {
    setEntered("");
    setWrong(false);
    setConfirmFallback(false);
    if (!open) return;
    const saved = localStorage.getItem(`yemmy_meet_${pendingRoomId}`);
    setFoundLocal(Boolean(saved));
  }, [open, pendingRoomId]);

  if (!open) return null;

  const handleVerify = () => {
    if (!pendingRoomId) {
      toast.error("No room ID provided.");
      return;
    }
    const savedRaw = localStorage.getItem(`yemmy_meet_${pendingRoomId}`);
    if (savedRaw) {
      try {
        const { passkey } = JSON.parse(savedRaw);
        if (entered === passkey) {
          toast.success("Passkey matched — joining!");
          onVerify(true);
        } else {
          setWrong(true);
          toast.error("Invalid passkey!");
        }
      } catch (err) {
        toast.error("Corrupted local data. Proceed with caution.");
        setWrong(true);
      }
    } else {
      // no local record
      // Show confirm fallback option
      if (!confirmFallback) {
        setConfirmFallback(true);
        toast((t) => (
          <div className="text-left">
            <div className="font-semibold">No local record found</div>
            <div className="text-sm">
              This meeting was not created on this browser, so we can't check the passkey.
              If you were given the passkey directly by the host, click &ldquo;Proceed Anyway&rdquo;.
            </div>
          </div>
        ), { duration: 5000 });
      } else {
        // user confirmed fallback -> accept any non-empty passkey
        if (entered && entered.trim().length > 0) {
          toast.success("Proceeding with provided passkey.");
          onVerify(true);
        } else {
          setWrong(true);
          toast.error("Enter a passkey to proceed.");
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* backdrop */}
      <div
        onClick={() => {
          onClose();
        }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-[92%] sm:w-[520px] max-w-xl rounded-2xl bg-gradient-to-br from-[#08060a]/80 to-[#0f0f12]/70 border border-[#2a2a2a] shadow-2xl p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold text-orange-300">Enter Passkey</div>
            <div className="text-sm text-gray-300">
              Room ID: <span className="text-orange-200 ml-1">{pendingRoomId || "—"}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs px-2 py-1 border border-[#2c2c2c] rounded-md text-green-300 bg-green-900/10">
              Secure
            </div>
            <button
              onClick={() => onClose()}
              className="text-sm text-gray-300 hover:text-white"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-xs text-gray-400 mb-2">Passkey</label>

          <motion.input
            value={entered}
            onChange={(e) => {
              setEntered(e.target.value);
              setWrong(false);
            }}
            animate={wrong ? { x: [0, -8, 8, -6, 6, 0] } : {}}
            transition={{ duration: 0.4 }}
            placeholder="Enter the meeting passkey"
            className={`w-full input input-bordered px-4 py-3 rounded-xl text-purple-300 placeholder-gray-600
              ${wrong ? "border-red-500 ring-1 ring-red-600" : ""}`}
            type="text"
            maxLength={12}
          />
          {wrong? (<div className="text-sm text-red-600">Wrong Password Entered!</div>):("")}
          <div className="flex items-center justify-between mt-3">
            <div className="text-sm text-gray-400">
              {foundLocal
                ? "This browser has a saved passkey for this room."
                : "No local passkey found for this room."}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  // reveal local passkey if exists (helpful to host)
                  const saved = localStorage.getItem(`yemmy_meet_${pendingRoomId}`);
                  if (saved) {
                    try {
                      const { passkey } = JSON.parse(saved);
                      navigator.clipboard.writeText(passkey);
                      toast.success("Local passkey copied to clipboard!");
                    } catch (err) {
                      toast.error("Unable to read local passkey.");
                    }
                  } else {
                    toast("No local passkey saved here.");
                  }
                }}
                className="btn btn-ghost btn-sm text-xs text-gray-200"
              >
                Copy local passkey
              </button>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button
              onClick={() => {
                onClose();
              }}
              className="flex-1 btn btn-outline"
            >
              Cancel
            </button>

            <button
              onClick={handleVerify}
              className="flex-1 btn btn-success"
            >
              {foundLocal ? "Verify & Join" : (confirmFallback ? "Proceed Anyway" : "Verify Passkey")}
            </button>
          </div>

          {!foundLocal && (
            <div className="mt-3 text-xs text-yellow-300">
              <strong>Note:</strong> Because this meeting wasn't created on this browser,
              we cannot automatically verify the passkey. Use "Proceed Anyway" only if
              you received the passkey from the host.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PasskeyModal;
