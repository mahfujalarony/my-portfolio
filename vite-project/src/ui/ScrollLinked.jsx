"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollLinked() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "8px", 
                    originX: 0,
                    backgroundColor: "#007bff", 
                    boxShadow: "0px 2px 5px rgba(0, 123, 255, 0.5)", 
                    borderRadius: "5px", 
                    transformOrigin: "left",
                    zIndex: 1000,
                }}
            />
        </>
    );
}
