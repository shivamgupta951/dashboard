import React, { useRef, useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import Yemmy_Meet_logo from "../assets/Yemmy_Meet_logo.png";

const VideoComp = () => {
  const { roomID } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      if (!roomID || !containerRef.current) return;

      // 🔐 Generate Zego Cloud Kit Token
      const appID = 1926021585;
      const serverSecret = "96210387ff333b123cb140bf6352b887";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Anonymous"
      );

      // ⚙️ Create a Zego instance
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // 🎥 Join the meeting with custom UI options
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
        theme: "dark", // 🌙 dark theme mode
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
      {/* Background animated glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050219]/70 via-[#1f1105db]/60 to-black/80 blur-2xl animate-pulse" />

      {/* Zego container */}
      <div
        ref={containerRef}
        className="relative w-[90vw] h-[90vh] rounded-2xl shadow-2xl border border-[#2a2a2a] overflow-hidden backdrop-blur-xl bg-black/30"
      ></div>

      {/* Overlay title */}
      <div className="absolute top-1 left-6 text-orange-700 text-lg font-medium tracking-wide flex justify-center items-center">
       YemmyMeet Room ID : <span className="text-orange-200 mx-1">{roomID}</span>
      </div>
    </div>
  );
};

export default VideoComp;
