'use client'
import dynamic from "next/dynamic"
import '@tldraw/tldraw/tldraw.css'
import { useEditor } from "@tldraw/tldraw"
import { useState } from "react"
import { blobToBase64 } from "~/lib/blobToBase64"
import { getSvgAsImage } from "~/lib/getSvgAsImage"
import ReactDOM from "react-dom"
import { PreviewModal } from "./PreviewModal"
const TLDraw = dynamic(
    () => import("@tldraw/tldraw").then((p) => p.Tldraw),
    { ssr: false }
)
  
export default function Playground() {
  const [view, setView] = useState("")

    return (
      <>
          <TLDraw/>
          <ExportButton setView={setView} />
      {view &&
        ReactDOM.createPortal(
          <div
            className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
            style={{ zIndex: 2000, backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={() => setView("")}
          >
            <PreviewModal view={view} setView={setView} />
          </div>,
          document.body
        )}
      </>
    )
}

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

function ExportButton({ setView }: { setView: (html: string) => void }) {
    const editor = useEditor();
    const [loading, setLoading] = useState(false);
    // A tailwind styled button that is pinned to the bottom right of the screen
    return (
      <button
        onClick={async (e) => {
          setLoading(true);
          try {
            e.preventDefault();
            const svg = await editor.getSvg(
              Array.from(editor.currentPageShapeIds)
            );
            if (!svg) {
              return;
            }
            const png = await getSvgAsImage(svg, {
              type: "png",
              quality: 1,
              scale: 1,
            });
            const dataUrl = await blobToBase64(png!);
            const resp = await fetch("/api/toHtml", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ image: dataUrl }),
            });
  
            const json = await resp.json();
  
            if (json.error) {
              alert("Error from open ai: " + JSON.stringify(json.error));
              return;
            }
  
            const message = json.choices[0].message.content;
            const start = message.indexOf("<!DOCTYPE html>");
            const end = message.indexOf("</html>");
            const html = message.slice(start, end + "</html>".length);
            setView(html);
          } finally {
            setLoading(false);
          }
        }}
        className="fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ="
        style={{ zIndex: 1000 }}
        disabled={loading}
      >
        {loading ? (
          <div className="flex justify-center items-center ">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          </div>
        ) : (
          "Make Real"
        )}
      </button>
    );
  }