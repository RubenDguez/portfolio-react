import { useEffect, useState } from "react";

export default function Typewriter({speed, lines}: Readonly<{lines: Array<string>} & Partial<{speed: number}>>) {
  const [line, setLine] = useState(0);
  const [pos, setPos] = useState(0);
  const [text, setText] = useState('');
  const [blink, setBlink] = useState(false);

  useEffect(() => {
      const interval = setInterval(() => {
        setBlink(!blink);
        if (line < lines.length) {
          if (pos <= lines[line].length) {
            setText(lines[line].substring(0, pos));
            setPos(pos + 1);
          } else {
            setLine(line + 1);
            setPos(0);
          }
        } else {
          setLine(0);
          setPos(0);
        }
  
        clearInterval(interval);
      }, speed || 350);
  });

  return (
    <div className="typewriter">
      <h3 className={blink ? "blink-on" : 'blink-off'}>{'_ '.concat(text)}</h3>
    </div>
  );
}
