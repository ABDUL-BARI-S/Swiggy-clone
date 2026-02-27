import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect (() => {
        window.addEventListener("offline", () => {
            console.log("You are Offline");
            setIsOnline(false);
        });

        window.addEventListener("Online", () => {
            console.log("You are Online");
            setIsOnline(true);
        });
    });

    return isOnline;
}