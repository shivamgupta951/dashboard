import React, { useRef, useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Yemmy_Meet_logo from "../assets/Yemmy_Meet_logo.png";

const VideoComp = () => {
  const { roomID } = useParams();
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const myMeeting = async () => {
      if (!roomID || !containerRef.current) return;

      // 🔐 Zego Cloud Kit Token
      const appID = 1926021585;
      const serverSecret = "96210387ff333b123cb140bf6352b887";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Enter Name!"
      );

      // ⚙️ Create Zego instance
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // 🎥 Join the meeting with custom settings
      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: "Personal link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
        theme: "dark", // 🌙 dark mode
        turnOnCameraWhenJoining: true,
        turnOnMicrophoneWhenJoining: true,
        showScreenSharingButton: true,
        showTextChat: true,
        layout: "Grid",
        branding: {
          logoURL: Yemmy_Meet_logo,
        },
      });
    };

    myMeeting();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [roomID]);

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-[#1f1105db] via-black to-[#050219] flex items-center justify-center overflow-hidden">
      {/* 🌈 Background animated glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050219]/70 via-[#1f1105db]/60 to-black/80 blur-2xl animate-pulse" />

      {/* 🎥 Zego container */}
      <div
        ref={containerRef}
        className="relative w-[90vw] h-[90vh] rounded-2xl shadow-2xl border border-[#2a2a2a] overflow-hidden backdrop-blur-xl bg-black/30"
      ></div>

      {/* 🧡 Overlay Room ID */}
      <div className="absolute top-1 left-20 text-orange-700 text-lg font-medium tracking-wide flex justify-center items-center z-50">
        YemmyMeet Room ID :{" "}
        <span className="text-orange-200 mx-1">{roomID}</span>
      </div>

      {/* 🔙 Back to Website Button (always visible) */}
      <button
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
        className="fixed top-1 right-20 flex items-center gap-1 px-1 py-1 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl shadow-lg transition-all duration-200 z-[1000] text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Website
      </button>
    </div>
  );
};

export default VideoComp;
