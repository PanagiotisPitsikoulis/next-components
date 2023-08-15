import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/components/utils";
import { Ghost, SendHorizontal } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

interface Message {
  person: number;
  msg: string;
}

interface ChatViewProps {
  chatHistory: Message[];
}

export function ChatView({ chatHistory }: ChatViewProps) {
  const loading = false;

  const msgStyles = {
    base: cn("flex flex-col w-[30vh] md:w-[40vh] rounded-xl py-2 px-3"),
    user: cn("ml-auto border-primary border"),
    rec: cn("bg-primary text-background"),
    hidden: cn("hidden"),
  };

  return (
    <main className="flex flex-col w-full gap-3">
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
    </main>
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
  fixed = true,
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
        "flex flex-row items-center justify-center gap-2 pt-3 pb-4 rounded-t-md bg-background/70 backdrop-blur-2xl px-global-x",
        fixed ? "fixed bottom-0 left-0 right-0" : "mt-auto"
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

export function Chat() {
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
