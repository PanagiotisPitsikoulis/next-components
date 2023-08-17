"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/components/utils/utils";
import { SendHorizontal } from "lucide-react";
import { Input } from "../input/input";
import { Button } from "../input/button";
import { ScrollArea } from "../layout/scroll-area";

interface ChatProps {
  res: (input: string) => Promise<string>;
  chatAreaHeight: string;
}

export function Chat({ res, chatAreaHeight }: ChatProps) {
  const msg = [{ person: 2, msg: "" }];

  const [chatHistory, setChatHistory] = React.useState(msg);

  async function response() {
    const Response = await res(chatHistory[chatHistory.length - 1].msg);
    setChatHistory((prev) => [...prev, { person: 2, msg: Response }]);
  }

  React.useEffect(() => {
    if (chatHistory[chatHistory.length - 1].person === 1) {
      response();
    }
  }, [chatHistory]);

  return (
    <main>
      <div className="flex flex-col min-h-screen gap-10 py-global-y">
        <ChatView chatHistory={chatHistory} height={chatAreaHeight} />
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

interface Message {
  person: number;
  msg: string;
}

interface ChatViewProps {
  chatHistory: Message[];
  height: string;
}

export function ChatView({ chatHistory, height }: ChatViewProps) {
  const loading = false;

  const msgStyles = {
    base: cn("flex flex-col w-[30vh] md:w-[40vh] rounded-xl py-2 px-3"),
    user: cn("ml-auto border-primary border"),
    rec: cn("bg-primary text-background"),
    hidden: cn("hidden"),
  };

  return (
    <ScrollArea className={cn("flex flex-col w-full gap-3", height)}>
      <>
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={cn(
              msgStyles.base,
              msg.person === 1 ? msgStyles.user : msgStyles.rec,
              msg.msg.length === 0 && msgStyles.hidden
            )}
          >
            <p className="block">{msg.msg}</p>
          </div>
        ))}
      </>
      <div className="my-7"></div>
    </ScrollArea>
  );
}

interface ChatBoxProps {
  placeholder: string;
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
  chatHistory: Message[];
  blockTillReply?: boolean;
  fixed?: boolean;
}

export function ChatBox({
  placeholder,
  setChatHistory,
  blockTillReply = false,
  chatHistory,
}: ChatBoxProps): JSX.Element {
  const [blocked, setBlocked] = useState(false);
  const lastMsgPerson = chatHistory[chatHistory.length - 1]?.person;

  useEffect(() => {
    if (blockTillReply) {
      if (lastMsgPerson === 1) {
        setBlocked(true);
      } else {
        setBlocked(false);
      }
    }
  }, [chatHistory]);

  const [inputValue, setInputValue] = useState("");

  const addMessage = (person: number, msg: string) => {
    setChatHistory((prev) => [...prev, { person, msg }]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center gap-2 pt-3 pb-4 rounded-t-md bg-background/70 backdrop-blur-2xl mt-auto"
      )}
    >
      <Input
        type="text"
        className="w-full px-6 text-xl font-bold border rounded-full border-primary h-14 bg-background"
        placeholder={placeholder}
        value={inputValue}
        disabled={blocked}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (inputValue === "") return;
            if (blocked) return;
            addMessage(1, inputValue);
            setInputValue("");
          }
        }}
        onChange={handleInputChange}
      />
      <Button
        size="icon"
        variant="ghost"
        className="p-6"
        disabled={blocked}
        type="submit"
        onClick={() => {
          addMessage(1, inputValue);
          if (inputValue === "") return;
          if (blocked) return;
          setInputValue("");
        }}
      >
        <SendHorizontal className="shrink-0" />
      </Button>
    </div>
  );
}
