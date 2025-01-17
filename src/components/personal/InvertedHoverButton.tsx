import React, { useState, useRef, useEffect } from "react";

interface InvertedHoverButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const InvertedHoverButton: React.FC<InvertedHoverButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (isHovering) {
      window.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isHovering]);

  return (
    <button
      ref={buttonRef}
      className={`relative font-poppins overflow-hidden bg-black text-white border-none text-xs px-5 py-[10px] rounded-full transition-colors duration-300 ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {isHovering && (
        <span
          className="absolute inset-0 bg-gray-500 text-black mix-blend-difference"
          style={{
            clipPath: `circle(0% at ${mousePosition.x}px ${mousePosition.y}px)`,
            animation: "circle-grow 0.35s ease-out forwards",
          }}
        />
      )}
      <style>
        {`
          @keyframes circle-grow {
            to {
              clip-path: circle(70% at ${mousePosition.x}px ${mousePosition.y}px);
            }
          }
        `}
      </style>
    </button>
  );
};
