"use client";
import { ChatBox, ChatView } from "@/components/composed/chat";
import React from "react";

export default function Home() {
  const msg = [{ person: 2, msg: "" }];

  const [chatHistory, setChatHistory] = React.useState(msg);

  function setRecMsg(recMsg: string) {
    setChatHistory((prev) => [...prev, { person: 2, msg: recMsg }]);
  }

  return (
    <main>
      <div className="flex flex-col gap-10 h-[40vh]">
        <ChatView chatHistory={chatHistory} />
        <ChatBox
          placeholder="Aa"
          setChatHistory={setChatHistory}
          chatHistory={chatHistory}
          blockTillReply={true}
          fixed={false}
        />
      </div>
    </main>
  );
}
