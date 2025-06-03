import React, { useState, useEffect } from "react";

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Toast visible for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return <div className={`toast ${show ? "toast-show" : ""}`}>{message}</div>;
}
