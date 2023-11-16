import React, { useEffect, useRef } from "react";

class TextScramble {
  constructor(elRef) {
    this.elRef = elRef;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.elRef.current.innerText || "";
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end, char: "" }); // Added 'char' property initialization
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.elRef.current.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const TextScrambleComponent = ({ phrases }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const fx = new TextScramble(textRef);

    let counter = 0;

    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1500);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();

    return () => {
      cancelAnimationFrame(fx.frameRequest);
    };
  }, [phrases]);

  return <div className="font-mono ui-monospace" ref={textRef}></div>;
};

export default TextScrambleComponent;
