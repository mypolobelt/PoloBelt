"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, MessageCircle, Send, Paperclip, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FloatingChat() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {!open && (
                    <Button
                        onClick={() => setOpen(true)}
                        className="rounded-full w-14 h-14 shadow-lg"
                    >
                        <MessageSquare className="size-7" />
                    </Button>
                )}
            </div>

            {/* Chat Box */}
            <div
                className={cn(
                    "fixed flex flex-col justify-between bottom-6 right-6 z-50 w-80 h-2/3 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl transition-all duration-300",
                    open
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10 pointer-events-none"
                )}
            >
                {/* Header */}
                <div className="bg-[#0B1B3F] text-white rounded-t-2xl p-4 flex justify-between items-center">
                    <h3 className="text-sm font-semibold">Contact Us</h3>
                    <button onClick={() => setOpen(false)}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-4 text-center text-sm text-muted-foreground">
                    <div className="w-14 h-14 mx-auto mb-3 bg-green-200 rounded-full flex items-center justify-center">
                        <MessageCircle className="text-green-600 w-6 h-6" />
                    </div>
                    <p>We&apos;ll respond as soon as we can.</p>
                </div>

                {/* Input */}
                <div className="border-t p-3 flex items-center gap-2">
                    <Paperclip className="w-4 h-4 text-muted-foreground cursor-pointer" />
                    <input
                        type="text"
                        placeholder="Enter your question..."
                        className="flex-1 bg-transparent outline-none text-sm"
                    />
                    <Button size="icon" className="rounded-full">
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </>
    )
}
